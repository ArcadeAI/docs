import React, { createContext, useContext, useEffect, useState } from "react";
import { Configuration, FrontendApi } from "@ory/client";

interface OrySessionContextType {
  email: string | null;
  loading: boolean;
  error: Error | null;
}

const OrySessionContext = createContext<OrySessionContextType>({
  email: null,
  loading: true,
  error: null,
});

const ory = new FrontendApi(
  new Configuration({
    basePath: process.env.NEXT_PUBLIC_ORY_SDK_URL || "https://auth.arcade.dev",
    baseOptions: {
      withCredentials: true,
    },
  }),
);

export function OrySessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: session } = await ory.toSession();

        // Extract email from session identity traits
        const userEmail = session?.identity?.traits?.email as
          | string
          | undefined;

        if (userEmail) {
          setEmail(userEmail);
        } else {
          setEmail(null);
        }
      } catch (err) {
        // Session not found or expired
        setEmail(null);
        setError(
          err instanceof Error ? err : new Error("Failed to fetch session"),
        );
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return (
    <OrySessionContext.Provider value={{ email, loading, error }}>
      {children}
    </OrySessionContext.Provider>
  );
}

export function useOrySession() {
  const context = useContext(OrySessionContext);
  return context;
}
