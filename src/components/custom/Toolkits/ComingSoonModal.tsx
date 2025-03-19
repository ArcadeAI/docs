import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setError("");
    }
  }, [isOpen]);

  const posthog = usePostHog();

  const trackNotifyMeClick = (toolkitName: string, email: string) => {
    posthog?.capture("Notify me clicked", {
      toolkit_name: toolkitName,
      notify_email: email,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      trackNotifyMeClick(toolkitName, email);
      console.log("Notify me clicked", {
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

  // Ensure we always call onClose when dialog state changes
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-700 bg-gray-900 p-6 shadow-lg duration-200 sm:max-w-[425px] sm:rounded-lg">
          <Dialog.Title className="text-lg font-semibold text-gray-100">
            {toolkitName} is coming soon
          </Dialog.Title>
          {!isSubmitted && (
            <Dialog.Description className="mt-2 text-sm text-gray-400">
              This toolkit is coming to Arcade soon. Sign up to be notified when
              it's available.
            </Dialog.Description>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 text-white"
                  required
                />
                {error && <p className="text-xs text-red-500">{error}</p>}
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Submitting..." : "Notify me"}
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
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
                We'll notify you when the {toolkitName} toolkit becomes
                available.
              </p>
              <Button onClick={onClose} className="mt-4" variant="secondary">
                Close
              </Button>
            </div>
          )}

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
