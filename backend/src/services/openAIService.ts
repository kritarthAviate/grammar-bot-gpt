import dotenv from "dotenv";
import { Configuration, OpenAIApi, CreateChatCompletionRequest } from "openai";

dotenv.config();

const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY || "";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getCorrectedSentenceFromOpenAI(
  sentence: string
): Promise<string> {
  try {
    const promptToGetCorrectedSentence = `Please correct the following sentence: ${sentence}`;
    const chatCompletionReq: CreateChatCompletionRequest = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: promptToGetCorrectedSentence }],
    };

    const chatCompletion = await openai.createChatCompletion(chatCompletionReq);
    return chatCompletion?.data?.choices[0]?.message?.content || "";
  } catch (error) {
    console.error(error);
    return "";
  }
}

export { getCorrectedSentenceFromOpenAI };
