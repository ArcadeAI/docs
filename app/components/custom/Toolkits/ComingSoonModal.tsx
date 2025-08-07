"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostHog } from "posthog-js/react";
import { useComingSoon } from "./ComingSoonContext";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolkitName: string;
}

export function ComingSoonModal({
  isOpen,
  onClose,
  toolkitName,
}: ComingSoonModalProps) {
  const { email, setEmail } = useComingSoon();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const posthog = usePostHog();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email?.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      posthog?.capture("Notify me clicked", {
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
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

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 py-2">
            <div className="space-y-2">
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 text-white"
                required
                disabled={isSubmitting}
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Notify me"}
            </Button>
          </form>
        ) : (
          <SuccessMessage toolkitName={toolkitName} handleClose={handleClose} />
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
}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-2 pt-6 text-center">
      <div className="mb-4 rounded-full bg-green-500/10 p-3">
        <svg
          className="h-6 w-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="mb-1 text-lg font-medium text-gray-100">
        Thanks for your interest!
      </h3>
      <p className="text-sm text-gray-400">
        We'll notify you when the {toolkitName} toolkit becomes available.
      </p>
      <Button onClick={handleClose} className="mt-6 w-full" variant="default">
        Close
      </Button>
    </div>
  );
};
