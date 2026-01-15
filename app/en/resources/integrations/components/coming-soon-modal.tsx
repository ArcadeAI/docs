"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Input,
} from "@arcadeai/design-system";
import posthog from "posthog-js";
import type React from "react";
import { useState } from "react";
import { useComingSoon } from "@/app/_components/coming-soon-context";

type ComingSoonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  toolkitName: string;
};

export function ComingSoonModal({
  isOpen,
  onClose,
  toolkitName,
}: ComingSoonModalProps) {
  const { email, setEmail } = useComingSoon();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email?.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      posthog.capture("Notify me clicked", {
        toolkit_name: toolkitName,
        notify_email: email,
      });
      setIsSubmitted(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError("");
    onClose();
  };

  return (
    <Dialog onOpenChange={(open) => !open && handleClose()} open={isOpen}>
      <DialogContent className="border-gray-800 bg-gray-900 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-gray-100">
            {toolkitName} is coming soon
          </DialogTitle>
          {!isSubmitted && (
            <DialogDescription className="pt-6 text-gray-400">
              This toolkit is coming to Arcade soon. Sign up to be notified when
              it's available.
            </DialogDescription>
          )}
        </DialogHeader>

        {isSubmitted ? (
          <SuccessMessage handleClose={handleClose} toolkitName={toolkitName} />
        ) : (
          <form className="space-y-4 py-2" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Input
                className="w-full bg-gray-800/50 text-white"
                disabled={isSubmitting}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                type="email"
                value={email}
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
            <Button className="w-full" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Submitting..." : "Notify me"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

const SuccessMessage = ({
  toolkitName,
  handleClose,
}: {
  toolkitName: string;
  handleClose: () => void;
}) => (
  <div className="flex flex-col items-center justify-center pt-6 pb-2 text-center">
    <div className="mb-4 rounded-full bg-green-500/10 p-3">
      <svg
        className="h-6 w-6 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Success</title>
        <path
          d="M5 13l4 4L19 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </div>
    <h3 className="mb-1 font-medium text-gray-100 text-lg">
      Thanks for your interest!
    </h3>
    <p className="text-gray-400 text-sm">
      We'll notify you when the {toolkitName} toolkit becomes available.
    </p>
    <Button className="mt-6 w-full" onClick={handleClose} variant="default">
      Close
    </Button>
  </div>
);
