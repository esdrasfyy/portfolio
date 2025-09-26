"use client";
import { type ReactNode, createContext, useContext, useState, useEffect } from "react";
import type { ContextPreferencesT } from "./types/context";
import { useTranslation } from "react-i18next";

const getInitialLang = () => {
  if (typeof navigator !== "undefined") {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("i18nextLng");
      if (storedLang) return storedLang;
      
      // Detecta idioma do navegador e converte para formato do i18n
      const browserLang = navigator.language;
      if (browserLang.startsWith('pt')) return 'pt';
      return 'en';
    }
    return 'en';
  }
  return 'en';
};

const ContextPreferences = createContext<ContextPreferencesT | undefined>(undefined);

const ProviderPreferences: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<string>(getInitialLang());
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { i18n } = useTranslation();

  // Inicializa o idioma no i18n
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const toggleLang = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    setLang(value);
    i18n.changeLanguage(value);
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
