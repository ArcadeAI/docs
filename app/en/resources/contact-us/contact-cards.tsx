"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Discord,
  Github,
  Input,
  Textarea,
} from "@arcadeai/design-system";
import {
  AlertOctagon,
  CheckCircle,
  HeartPulse,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import posthog from "posthog-js";
import type React from "react";
import { useState } from "react";
import { QuickStartCard } from "../../../_components/quick-start-card";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_ATTIO_WEBHOOK_URL;

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
  ]) {
    const value = params.get(key);
    if (value) {
      utms[key] = value;
    }
  }
  return utms;
}

function collectFormFields(formData: FormData): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (key === "website") {
      continue;
    }
    if (typeof value === "string" && value.trim()) {
      fields[key] = value.trim();
    }
  }
  return fields;
}

async function submitForm(
  fields: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  if (!WEBHOOK_URL) {
    return { success: false, error: "Webhook URL not configured" };
  }

  const payload = {
    submission_id: crypto.randomUUID(),
    form_type: "contact_sales",
    fields,
    context: {
      pageUri: window.location.href,
      pageName: "Contact Sales",
      timestamp: new Date().toISOString(),
      ...getUtmParams(),
    },
  };

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return { success: true };
  }
  return {
    success: false,
    error: `HTTP ${response.status}: ${response.statusText}`,
  };
}

async function submitHoneypot(): Promise<void> {
  if (!WEBHOOK_URL) {
    return;
  }
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _hp: true }),
    });
  } catch {
    // Swallow errors for spam submissions
  }
}

function ContactSalesForm({ onSuccess }: { onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website") as string;

    if (honeypot) {
      await submitHoneypot();
      onSuccess();
      return;
    }

    const fields = collectFormFields(formData);

    try {
      const result = await submitForm(fields);

      if (result.success) {
        posthog.capture("contact_sales_form_submitted", {
          form_type: "contact_sales",
          page: "Contact Sales",
          source: "contact_us_page",
        });
        onSuccess();
      } else {
        posthog.capture("contact_sales_form_submit_failed", {
          form_type: "contact_sales",
          page: "Contact Sales",
          error: result.error,
        });
        setError("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Network error";
      posthog.capture("contact_sales_form_submit_failed", {
        form_type: "contact_sales",
        page: "Contact Sales",
        error: errorMessage,
      });
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex gap-3 max-[767px]:flex-col">
        <Input
          aria-label="First Name"
          className="flex-1 bg-gray-800/50 text-white"
          maxLength={256}
          name="firstname"
          placeholder="First Name"
          required
          type="text"
        />
        <Input
          aria-label="Last Name"
          className="flex-1 bg-gray-800/50 text-white"
          maxLength={256}
          name="lastname"
          placeholder="Last Name"
          required
          type="text"
        />
      </div>
      <Input
        aria-label="Work Email"
        className="bg-gray-800/50 text-white"
        maxLength={256}
        name="email"
        placeholder="Work Email"
        required
        type="email"
      />
      <Input
        aria-label="Company"
        className="bg-gray-800/50 text-white"
        maxLength={256}
        name="company"
        placeholder="Company"
        required
        type="text"
      />
      <Textarea
        aria-label="How can we help?"
        className="min-h-[100px] resize-y bg-gray-800/50 text-white"
        maxLength={5000}
        name="message"
        placeholder="How can we help?"
        rows={4}
      />
      {/* Honeypot field — hidden from real users */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </div>
      {error && (
        <div className="flex items-center gap-3 rounded-lg bg-red-500/10 p-3 text-white">
          <AlertOctagon className="h-5 w-5 shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}
      <Button className="w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Please wait..." : "Get in touch"}
      </Button>
    </form>
  );
}

function SuccessMessage({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center pt-6 pb-2 text-center">
      <div className="mb-4 rounded-full bg-green-500/10 p-3">
        <CheckCircle className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="mb-1 font-semibold text-gray-100 text-lg">Thank you!</h3>
      <p className="text-gray-400 text-sm">We'll be in touch shortly.</p>
      <Button className="mt-6 w-full" onClick={onClose} variant="default">
        Close
      </Button>
    </div>
  );
}

export function ContactCards() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSalesClick = () => {
    posthog.capture("Contact sales modal opened", {
      source: "contact_us_page",
    });
    setIsSalesModalOpen(true);
  };

  const handleClose = () => {
    setIsSalesModalOpen(false);
    setIsSubmitted(false);
  };

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
          onClick={handleContactSalesClick}
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
          href="/guides/security/security-research-program"
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
        onOpenChange={(open) => !open && handleClose()}
        open={isSalesModalOpen}
      >
        <DialogContent className="border-gray-800 bg-gray-900 sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-gray-100">Contact Sales</DialogTitle>
          </DialogHeader>
          {isSubmitted ? (
            <SuccessMessage onClose={handleClose} />
          ) : (
            <ContactSalesForm onSuccess={() => setIsSubmitted(true)} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
