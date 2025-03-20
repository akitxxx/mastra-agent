import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";

const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });

const openai = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || "",
  baseURL: "https://openrouter.ai/api/v1",
});

// OpenRouter経由でのClaude 3.7 Thinkingモデル指定
const openRouterClaudeThinkingModel = "anthropic/claude-3-7-sonnet:thinking";

// OpenRouter経由でのモデル利用設定
export const openRouter = openai(openRouterClaudeThinkingModel);

export const models = {
  google: {
    gemini: google("gemini-1.5-flash"),
    textEmbedding: google.textEmbeddingModel("text-embedding-004"),
  },
  openai: {
    openRouter: openRouter,
  },
};
