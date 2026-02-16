"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook, FaGithub, FaDiscord, FaQq } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

import type { Locale } from "@/lib/translations";

const STEAM_LANG: Record<Locale, string> = {
  en: "english",
  zh: "schinese",
  "zh-TW": "tchinese",
  ja: "japanese",
  ko: "koreana",
  fr: "french",
  es: "spanish",
  "es-419": "latam",
  ru: "russian",
  vi: "vietnamese",
  th: "thai",
  id: "indonesian",
  de: "german",
  "pt-BR": "brazilian",
  pt: "portuguese",
  it: "italian",
  pl: "polish",
  tr: "turkish",
  ar: "arabic",
  nl: "dutch",
};

function steamWidgetUrl(appId: string, name: string, locale: Locale) {
  return `https://store.steampowered.com/widget/${appId}/${name}/?l=${STEAM_LANG[locale]}`;
}

export function HomeContent() {
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 md:pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center justify-center grow">
        <Link href="/">
          <Image
            className="hover:shadow-[0_0_300px_#9f6d4a] transition-shadow duration-300 rounded-full size-36 md:size-64"
            src="/img/otter_club_logo.png"
            alt={t.brandName}
            width={256}
            height={256}
            priority
          />
        </Link>

        <div className="list-inside list-decimal w-full max-w-[400px] md:max-w-[650px] text-sm text-start font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-2xl font-bold">{t.brandName}</h1>
          <p>{t.tagline}</p>
          <p className="text-amber-800/90">{t.greeting}</p>
          <p>{t.intro}</p>
          <p>{t.outro}</p>
          <Link href="https://discord.gg/otterclub" target="_blank"></Link>
          <p>
            {t.emailUs}{" "}
            <Link href="mailto:contact@otterclub.io">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold tracking-widest">{`contact@otterclub.io`}</code>
            </Link>
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center text-3xl ">
          <Link
            href="https://otterclub.io/"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.website}>
            <AiOutlineGlobal />
          </Link>
          <Link
            href="mailto:contact@otterclub.io"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.email}>
            <MdAlternateEmail />
          </Link>
          <Link
            href="https://facebook.com/otter.club.game"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.facebook}>
            <FaFacebook />
          </Link>{" "}
          <Link
            href="https://github.com/otter-club"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.github}>
            <FaGithub />
          </Link>
          <Link
            href="https://discord.gg/YWE6yFK5Bv"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.discord}>
            <FaDiscord />
          </Link>
          <Link
            href="https://twitter.com/OtterClub_"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.twitter}>
            <FaXTwitter />
          </Link>
          <Link
            href="https://qm.qq.com/q/Um2QKJKlua"
            target="_blank"
            className="cursor-pointer hover:text-[#D6CEC0] transition-colors duration-300"
            title={t.titles.qq}>
            <FaQq />
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center flex-col sm:flex-row">
          <iframe src={steamWidgetUrl("2616200", "Miss_Peacock", locale)} width="646" height="190"></iframe>
        </div>
        <div className="flex md:hidden gap-4 items-center flex-col sm:flex-row">
          <iframe src={steamWidgetUrl("2616200", "Miss_Peacock", locale)} width="380" height="190"></iframe>
        </div>

        <div className="hidden md:flex gap-4 items-center flex-col sm:flex-row">
          <iframe src={steamWidgetUrl("2784960", "Avian_Enigma", locale)} width="646" height="190"></iframe>
        </div>
        <div className="flex md:hidden gap-4 items-center flex-col sm:flex-row">
          <iframe src={steamWidgetUrl("2784960", "Avian_Enigma", locale)} width="380" height="190"></iframe>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">{t.footer.replace("{year}", String(new Date().getFullYear()))}</p>
      </footer>
    </div>
  );
}
