import { show_test_response_test } from "./demo-script";

export type ChatGPTAgent = "user" | "system";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatGPTMessage[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream: boolean;
  n: number;
}

// 전역 변수로 호출 횟수 추적
let callCount = 0;

export async function OpenAIStream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();

  console.log(payload);

  const currentResponse =
    show_test_response_test[callCount % show_test_response_test.length];
  callCount++;

  const stream = new ReadableStream({
    async start(controller) {
      // Simulate streaming response from currentResponse
      let position = 0;
      const length = currentResponse.length;
      const chunkSize = 8;

      async function push() {
        if (position < length) {
          const chunk = currentResponse.slice(position, position + chunkSize);
          position += chunkSize;
          controller.enqueue(encoder.encode(chunk));
          await new Promise(resolve => setTimeout(resolve, 100));
          push();
        } else {
          controller.close();
        }
      }

      push();
    },
  });

  return stream;
}
