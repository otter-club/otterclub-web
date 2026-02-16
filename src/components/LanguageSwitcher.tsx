"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LOCALE_LABELS, type Locale } from "@/lib/translations";

const LOCALES: Locale[] = ["en", "zh", "zh-TW", "ja", "ko", "fr", "es", "es-419", "ru", "vi", "th", "id", "de", "pt-BR", "pt", "it", "pl", "tr", "ar", "nl"];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-black/[.06] dark:bg-white/[.08] hover:bg-black/[.1] dark:hover:bg-white/[.12] transition-colors duration-200"
        title="Select language"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language">
        <span>{LOCALE_LABELS[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1.5 py-1 min-w-[180px] max-h-[min(50vh,320px)] overflow-y-auto rounded-lg bg-white dark:bg-neutral-900 shadow-lg border border-black/5 dark:border-white/10">
          {LOCALES.map((loc) => (
            <li key={loc} role="option" aria-selected={locale === loc}>
              <button
                onClick={() => {
                  setLocale(loc);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-black/[.05] dark:hover:bg-white/[.08] first:rounded-t-lg last:rounded-b-lg rtl:text-right ${
                  locale === loc ? "bg-black/[.05] dark:bg-white/[.08] font-medium" : ""
                }`}>
                {LOCALE_LABELS[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
