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
import { useState } from "react";
import { useForm } from "react-hook-form";
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

function collectFields(data: FormValues): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    if (key !== "website" && value.trim()) {
      fields[key] = value.trim();
    }
  }
  return fields;
}

async function fireHoneypot(): Promise<void> {
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

async function submitToAttio(
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

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

function ContactSalesForm({ onSuccess }: { onSuccess: () => void }) {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmitError("");

    // Honeypot — silently succeed for bots
    if (data.website) {
      await fireHoneypot();
      onSuccess();
      return;
    }

    const result = await submitToAttio(collectFields(data));

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
      setSubmitError("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-1">
          <label className="sr-only" htmlFor="firstname">
            First Name
          </label>
          <Input
            className="bg-gray-800/50 text-white"
            id="firstname"
            maxLength={256}
            placeholder="First Name"
            required
            type="text"
            {...register("firstname")}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="sr-only" htmlFor="lastname">
            Last Name
          </label>
          <Input
            className="bg-gray-800/50 text-white"
            id="lastname"
            maxLength={256}
            placeholder="Last Name"
            required
            type="text"
            {...register("lastname")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="email">
          Work Email
        </label>
        <Input
          className="bg-gray-800/50 text-white"
          id="email"
          maxLength={256}
          placeholder="Work Email"
          required
          type="email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="company">
          Company
        </label>
        <Input
          className="bg-gray-800/50 text-white"
          id="company"
          maxLength={256}
          placeholder="Company"
          required
          type="text"
          {...register("company")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="sr-only" htmlFor="message">
          How can we help?
        </label>
        <Textarea
          className="min-h-[100px] resize-y bg-gray-800/50 text-white"
          id="message"
          maxLength={5000}
          placeholder="How can we help?"
          rows={4}
          {...register("message")}
        />
      </div>
      {/* Honeypot field — hidden from real users */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input
          autoComplete="off"
          tabIndex={-1}
          type="text"
          {...register("website")}
        />
      </div>
      {submitError && (
        <div className="flex items-center gap-3 rounded-lg bg-red-500/10 p-3 text-white">
          <AlertOctagon className="h-5 w-5 shrink-0" />
          <span className="text-sm">{submitError}</span>
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
          href="/resources/security-research-program"
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
