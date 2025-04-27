import { createContext, useContext, useState, ReactNode } from "react";

type Language = "english" | "hindi";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (english: string, hindi: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("english");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "english" ? "hindi" : "english"));
  };

  // Translate function
  const t = (english: string, hindi: string) => {
    return language === "english" ? english : hindi;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}