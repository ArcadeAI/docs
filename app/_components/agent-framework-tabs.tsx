import { Tabs } from "nextra/components";
import { PlatformCard } from "@/app/_components/platform-card";

export function AgentFrameworkTabs() {
  return (
    <Tabs items={["Python", "JavaScript"]} storageKey="preferredLanguage">
      <Tabs.Tab>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
          <PlatformCard
            icon="https://avatars.githubusercontent.com/u/170677839?s=200&v=4"
            link="/en/get-started/agent-frameworks/crewai/use-arcade-tools"
            name="CrewAI"
            type="Agent Framework"
          />
          <PlatformCard
            icon="https://avatars.githubusercontent.com/u/1342004?s=200&v=4"
            link="/en/get-started/agent-frameworks/google-adk/setup-python"
            name="Google ADK"
            type="Agent Framework"
          />
          <PlatformCard
            icon="/images/icons/langchain.svg"
            invertInDark
            link="/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py"
            name="LangChain"
            type="Agent Framework"
          />
          <PlatformCard
            icon="https://avatars.githubusercontent.com/u/14957082?s=200&v=4"
            link="/en/get-started/agent-frameworks/openai-agents/setup-python"
            name="OpenAI Agents"
            type="Agent Framework"
          />
          <PlatformCard
            icon="/images/icons/python.svg"
            link="/en/get-started/agent-frameworks/setup-arcade-with-your-llm-python"
            name="Vanilla Python"
            type="MCP Client"
          />
        </div>
      </Tabs.Tab>
      <Tabs.Tab>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
          <PlatformCard
            icon="/images/icons/langchain.svg"
            invertInDark
            link="/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-ts"
            name="LangChain"
            type="Agent Framework"
          />
          <PlatformCard
            icon="https://avatars.githubusercontent.com/u/1342004?s=200&v=4"
            link="/en/get-started/agent-frameworks/google-adk/setup-typescript"
            name="Google ADK"
            type="Agent Framework"
          />
          <PlatformCard
            icon="/images/icons/mastra.svg"
            invertInDark
            link="/en/get-started/agent-frameworks/mastra"
            name="Mastra"
            type="Agent Framework"
          />
          <PlatformCard
            icon="/images/icons/vercel.svg"
            invertInDark
            link="/en/get-started/agent-frameworks/vercelai"
            name="Vercel AI"
            type="Agent Framework"
          />
        </div>
      </Tabs.Tab>
    </Tabs>
  );
}
