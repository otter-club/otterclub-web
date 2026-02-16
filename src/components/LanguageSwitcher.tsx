"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 px-3 py-1.5 text-sm font-medium rounded-full bg-black/[.06] dark:bg-white/[.08] hover:bg-black/[.1] dark:hover:bg-white/[.12] transition-colors duration-200"
      title={locale === "en" ? "Switch to 简体中文" : "Switch to English"}>
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
