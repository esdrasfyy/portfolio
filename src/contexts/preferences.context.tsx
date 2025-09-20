"use client";
import { type ReactNode, createContext, useContext, useState } from "react";
import type { ContextPreferencesT } from "./types/context";

const getInitialLang = () => {
  if (typeof navigator !== "undefined") {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("i18nextLng");
      return storedLang || navigator.language;
    }
    return navigator.language;
  }
  return "pt-BR";
};

const ContextPreferences = createContext<ContextPreferencesT | undefined>(undefined);

const ProviderPreferences: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>(getInitialLang());
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleLang = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    setLang(value);
    window.location.reload();
  };

  const contextValue: ContextPreferencesT = {
    lang,
    toggleLang,
    onClose: () => setMenu(false),
    onOpen: () => setMenu(true),
    menu,
    loading,
    setLoading,
  };

  return <ContextPreferences.Provider value={contextValue}>{children}</ContextPreferences.Provider>;
};

export { ContextPreferences, ProviderPreferences };

export const usePreferences = () => {
  const context = useContext(ContextPreferences);
  if (context === undefined) {
    throw new Error("usePreferences must be used within a ProviderPreferences");
  }
  return context;
};
