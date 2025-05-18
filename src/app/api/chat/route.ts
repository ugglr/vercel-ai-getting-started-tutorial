import { google, openai } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log("messages: ", messages);

  try {
    const result = await streamText({
      model: google("gemini-2.0-flash-exp"),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log("error: ", error);
  }
}
