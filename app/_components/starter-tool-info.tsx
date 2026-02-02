import { Callout } from "nextra/components";
import type React from "react";

type StarterToolInfoProps = {
  toolkitName: string;
};

const StarterToolInfo: React.FC<StarterToolInfoProps> = ({ toolkitName }) => (
  <Callout type="warning">
    <p>
      {toolkitName} is a{" "}
      <u>
        <a href="/guides/create-tools/improve/types-of-tools#unoptimized-tools">
          Unoptimized MCP Server
        </a>
      </u>
      : each tool mirrors one HTTP endpoint and offers LLMs a way to interact
      with the low-level API.
    </p>
    <br />
    <p>
      Differently from{" "}
      <u>
        <a href="/guides/create-tools/improve/types-of-tools#optimized-tools">
          Optimized MCP Servers
        </a>
      </u>
      , unoptimized tools are heavily influenced by the original API design,
      which is not usually optimized for LLM usage. For this reason, we
      recommend thoroughly evaluating the tools with your Agents or chatbots
      before using it in production.{" "}
      <a href="/guides/create-tools/improve/types-of-tools">Read more</a> about
      Optimized vs unoptimized tools.
    </p>
  </Callout>
);

export default StarterToolInfo;
