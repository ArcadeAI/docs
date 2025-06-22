import {
  Agent,
  type AgentInputItem,
  Runner,
  type Tool,
  handoff,
  setDefaultOpenAIClient,
  user,
} from "@openai/agents";
import OpenAI from "openai";

import { Config } from "./config";
import type { Logger } from "./logger";

export abstract class CodaAgent {
  readonly agent: Agent<unknown, "text">;
  readonly runner: Runner;
  history: AgentInputItem[] = [];

  constructor(
    readonly name: string, // eslint-disable-line no-unused-vars
    readonly instructions: string, // eslint-disable-line no-unused-vars
    readonly tools: Tool[] | undefined, // eslint-disable-line no-unused-vars
    readonly handoffs: ReturnType<typeof handoff<unknown, "text">>[], // eslint-disable-line no-unused-vars
    readonly config: Config, // eslint-disable-line no-unused-vars
    readonly logger: Logger, // eslint-disable-line no-unused-vars
  ) {
    // TODO: This likely isn't necessary every time we make a new agent
    const client = new OpenAI({
      apiKey: this.config.openai_api_key,
      baseURL: this.config.openai_base_url,
    });
    setDefaultOpenAIClient(client);

    this.agent = new Agent<unknown, "text">({
      name: this.name,
      model: this.config.openai_model,
      instructions: this.instructions,
      tools: this.tools,
      handoffs: this.handoffs,
    });

    this.runner = new Runner(this.agent);
  }

  protected async run(prompt: string, maxTurns = 10) {
    this.history.push(user(prompt));

    const result = await this.runner.run(this.agent, this.history, {
      maxTurns,
    });

    if (result.history.length > 0) {
      this.history = result.history;
    }

    if (result.finalOutput) {
      this.logger.debug(result.finalOutput);
    }

    return result;
  }
}
