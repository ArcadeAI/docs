import { Warning } from "@/markdown/Callouts";
import React from "react";

interface StarterToolInfoProps {
  toolkit_name: string;
}

const StarterToolInfo: React.FC<StarterToolInfoProps> = ({ toolkit_name }) => {
  return (
    <Warning>
      <p>
        {toolkit_name} is a{" "}
        <a href="/home/use-tools/types-of-tools#starter-tools">Starter</a>{" "}
        toolkit: each tool mirrors one HTTP endpoint and offers LLMs a way to
        interact with the low-level API.
      </p>
      <p>
        Differently from{" "}
        <a href="/home/use-tools/types-of-tools#optimized-tools">
          Optimized tools
        </a>
        , Starter tools are heavily influenced by the original API design, which
        is not usually optimized for LLM usage. For this reason, we recommend
        thoroughly evaluating the toolkit with your Agents or chatbots before
        using it in production.{" "}
        <a href="/home/use-tools/types-of-tools">Read more</a> about Optimized
        vs Starter tools.
      </p>
    </Warning>
  );
};

export default StarterToolInfo;
