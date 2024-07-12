import { createContext, useState } from "react";

import { nanoid } from "nanoid";

import { Message } from "@/demo/validators/message";

const defaultValue = [
  {
    id: nanoid(),
    text: '[Suggestion]\nDetected Potential False Positive: "I see that this product might help with your issues."\nThis was blocked by "Avoid making promises"',
    isUserMessage: false,
  },
];
export const MessagesContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
  setMessages: (messages: Message[]) => void; // 추가
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => {},
  removeMessage: () => {},
  updateMessage: () => {},
  setIsMessageUpdating: () => {},
  setMessages: () => {}, // 추가
});

export function MessagesProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState(defaultValue);
  const [isMessageUpdating, setIsMessageUpdating] = useState<boolean>(false);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const removeMessage = (id: string) => {
    setMessages(prev => prev.filter(message => message.id !== id));
  };

  const updateMessage = (
    id: string,
    updateFn: (prevText: string) => string,
  ) => {
    setMessages(prev =>
      prev.map(message => {
        if (message.id === id) {
          return { ...message, text: updateFn(message.text) };
        }
        return message;
      }),
    );
  };

  return (
    <MessagesContext.Provider
      value={{
        messages,
        isMessageUpdating,
        addMessage,
        removeMessage,
        updateMessage,
        setIsMessageUpdating,
        setMessages, // 추가
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
