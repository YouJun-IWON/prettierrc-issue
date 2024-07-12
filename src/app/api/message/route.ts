import { ChatGPTMessage, OpenAIStream, OpenAIStreamPayload } from "@/demo/openai-stream";
import { MessageArraySchema } from "@/demo/validators/message";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map(message => {
    return {
      role: message.isUserMessage ? "user" : "system",
      content: message.text,
    };
  });

  outboundMessages.unshift({
    role: "system",
    content: "",
  });

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: outboundMessages,
    temperature: 0.4,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150,
    stream: true,
    n: 1,
  };

  const delay = Math.random() * (700 - 300) + 300;
  await new Promise(resolve => setTimeout(resolve, delay));

  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
