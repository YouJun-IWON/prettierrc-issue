"use client";

import {
  FC,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { useMutation } from "@tanstack/react-query";
import { CornerDownLeft, Loader2 } from "lucide-react";
import { nanoid } from "nanoid";

import { Textarea } from "@/components/ui/textarea";
import { MessagesContext } from "@/demo/context/messages";
import { Message } from "@/demo/validators/message";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [input, setInput] = useState<string>("");

  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
    setMessages,
  } = useContext(MessagesContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoading) {
      timer = setTimeout(
        () => {
          handleSendMessage();
          setIsLoading(false);

          // Remove the processing message after loading is done
          const lastMessageIndex = messages.length - 1;
          const lastMessage = messages[lastMessageIndex];
          let updatedMessages = [...messages];

          console.log("lastMessage", lastMessage.text);
          console.log(
            "lastMessageIndex",
            lastMessage.text.includes("<strong>"),
          );

          if (lastMessage.text.includes("<strong>")) {
            const updatedLastMessage = {
              ...lastMessage,
              text: lastMessage.text.replace(
                /<strong>[\s\S]*/,
                `<div class="text-lg font-bold">Confirmed! ✅</div>`,
              ),
            };
            updatedMessages[messages.length - 1] = updatedLastMessage;
            setMessages(updatedMessages);
          }
        },
        Math.floor(Math.random() * 3000) + 1000,
      );
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  useEffect(() => {
    if (messages[messages.length - 1]?.text.includes("[")) {
      setIsLoading(true);
    }
  }, [messages]);

  console.log(messages);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationKey: ["sendMessage"],
    // include message to later use it in onMutate
    mutationFn: async (_message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, _message] }),
      });

      return response.body;
    },
    onMutate(message) {
      if (!isLoading) {
        addMessage(message);
      }
    },
    onSuccess: async stream => {
      if (!stream) throw new Error("No stream");

      // construct new message to add
      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      // add new message to state
      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, prev => prev + chunkValue);
      }

      // clean up
      setIsMessageUpdating(false);
      setInput("");

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 10);
    },
    onError: (_, message) => {
      removeMessage(message.id);
      textareaRef.current?.focus();
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const message: Message = {
        id: nanoid(),
        isUserMessage: true,
        text: input,
      };

      sendMessage(message);
    }
  };

  const handleSendMessage = () => {
    const message: Message = {
      id: nanoid(),
      isUserMessage: true,
      text: "upload policy.txt",
    };

    sendMessage(message);
  };

  return (
    <div {...props}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        {messages.length === 100 ? (
          <></>
        ) : (
          <>
            <Textarea
              ref={textareaRef}
              onKeyDown={handleKeyDown}
              rows={2}
              value={input}
              autoFocus
              disabled={isPending || isLoading}
              onChange={e => setInput(e.target.value)}
              placeholder="Write a message..."
              className="peer disabled:opacity-50 placeholder:text-gray-500 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
            />

            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
                {isPending || isLoading ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <CornerDownLeft className="w-3 h-3" />
                )}
              </kbd>
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
