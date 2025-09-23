import { Warning } from "@/markdown/Callouts";
import React from "react";

interface ApiProxyInfoProps {
  toolkit_name: string;
  api_proxy_docs_url: string;
}

const ApiProxyInfo: React.FC<ApiProxyInfoProps> = ({ toolkit_name }) => {
  return (
    <Warning>
      <p>
        {toolkit_name} is an{" "}
        <a href="/home/use-tools/types-of-tools#api-proxy-tools">API Proxy</a>{" "}
        toolkit: each tool mirrors one HTTP endpoint and offers LLMs a way to
        interact with the low-level API.
      </p>
      <p>
        Differently from{" "}
        <a href="/home/use-tools/types-of-tools#llm-native-tools">
          LLM-native tools
        </a>
        , API Proxy tools are heavily influenced by the original API design,
        which is not usually optimized for LLM usage. For this reason, we
        recommend thoroughly evaluating the toolkit with your Agents or chatbots
        before using it in production.{" "}
        <a href="/home/use-tools/types-of-tools">Read more</a> about LLM-native
        vs API Proxy tools.
      </p>
    </Warning>
  );
};

export default ApiProxyInfo;
