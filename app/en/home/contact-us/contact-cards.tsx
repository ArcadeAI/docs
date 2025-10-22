"use client";

import { Discord, Github } from "@arcadeai/design-system";
import { ChartGantt, Mail, Shield, Users } from "lucide-react";
import { QuickStartCard } from "../../../_components/quick-start-card";

export function ContactCards() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <QuickStartCard
        description="Get help with technical issues, account questions, and general inquiries from our support team.  Email support is available for customers on paid plans."
        href="mailto:support@arcade.dev"
        icon={Mail}
        title="Email Support"
      />
      <QuickStartCard
        description="Discuss enterprise plans, pricing, and how Arcade can help your organization build better, safer agents."
        href="mailto:sales@arcade.dev"
        icon={Users}
        title="Contact Sales"
      />
      <QuickStartCard
        description="Join our Discord community for real-time help from the community, to connect with other developers, and stay updated on new features and announcements."
        href="https://discord.gg/GUZEMpEZ9p"
        icon={Discord}
        title="Discord Community"
      />
      <QuickStartCard
        description="Report bugs, request features, and contribute to Arcade. You can report problems via Github Issues or start a discussion on Github Discussions."
        href="https://github.com/ArcadeAI/arcade-mcp"
        icon={Github}
        title="GitHub Issues & Discussions"
      />
      <QuickStartCard
        description="Report security vulnerabilities responsibly. Learn about our security research program and disclosure process."
        href="/home/security"
        icon={Shield}
        title="Security Research"
      />
      <QuickStartCard
        description="Check the current status of Arcade's services, view incident history, and subscribe to updates."
        href="https://status.arcade.dev"
        icon={ChartGantt}
        title="System Status"
      />
    </div>
  );
}
