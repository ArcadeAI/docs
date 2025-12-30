"use client";

import {
  Dialog,
  DialogContent,
  Discord,
  Github,
} from "@arcadeai/design-system";
import { HeartPulse, Mail, Shield, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { QuickStartCard } from "../../../_components/quick-start-card";

export function ContactCards() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load HubSpot script once
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/39979532.js";
      script.defer = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, []);

  return (
    <>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <QuickStartCard
          description="Get help with technical issues, account questions, and general inquiries from our support team.  Email support is available for customers on paid plans."
          href="mailto:support@arcade.dev"
          icon={Mail}
          title="Email Support"
        />
        <QuickStartCard
          description="Discuss enterprise plans, pricing, and how Arcade can help your organization build better, safer agents."
          icon={Users}
          onClick={() => setIsSalesModalOpen(true)}
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
          href="/resources/security"
          icon={Shield}
          title="Security Research"
        />
        <QuickStartCard
          description="Check the current status of Arcade's services, view incident history, and subscribe to updates."
          href="https://status.arcade.dev"
          icon={HeartPulse}
          title="System Status"
        />
      </div>
      <Dialog
        onOpenChange={(open) => !open && setIsSalesModalOpen(false)}
        open={isSalesModalOpen}
      >
        <DialogContent className="border-gray-800 bg-gray-900 sm:max-w-[500px]">
          <div className="py-4">
            <div
              className="hs-form-frame"
              data-form-id="aa1d8f09-6368-461d-bb27-d49bc056e3df"
              data-portal-id="39979532"
              data-region="na2"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
