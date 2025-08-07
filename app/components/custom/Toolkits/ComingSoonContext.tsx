"use client";
import React, { createContext, useContext, useState } from "react";

interface ComingSoonContextType {
  email: string;
  // eslint-disable-next-line no-unused-vars
  setEmail: (email: string) => void;
}

const ComingSoonContext = createContext<ComingSoonContextType>({
  email: "",
  setEmail: () => {},
});

export const ComingSoonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState("");

  return (
    <ComingSoonContext.Provider value={{ email, setEmail }}>
      {children}
    </ComingSoonContext.Provider>
  );
};

export const useComingSoon = () => useContext(ComingSoonContext);
