import { createLogger } from "@mastra/core/logger";
import { Mastra } from "@mastra/core/mastra";
import { agents } from "./agents";

export const mastra = new Mastra({
  agents: agents,
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
