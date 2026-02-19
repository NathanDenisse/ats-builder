"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import translations from "./translations";

type Lang = "fr" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)["fr"];
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
