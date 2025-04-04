import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 md:pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center justify-center grow">
        <Link href="/">
          <Image
            className="hover:shadow-[0_0_300px_#9f6d4a] transition-shadow duration-300 rounded-full"
            src="/img/otter_club_logo.png"
            alt="Otter Club logo"
            width={256}
            height={256}
            priority
          />
        </Link>

        <div className="list-inside list-decimal w-full max-w-[400px] md:max-w-[650px] text-sm text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-2xl font-bold">Otter Club</h1>
          <p>Where whiskers meet wonder!</p>
          <p>
            {`We’re a splashy squad of otter developers crafting cozy indie games—full of playful puzzles, hand-painted
            adventures, and heartwarming stories. Dive into worlds made with paws, passion, and a pinch of riverbank
            mischief! 🌊✨`}
          </p>
          <p>{`Let’s make waves, one game at a time!`}</p>
          <Link href="https://discord.gg/otterclub" target="_blank"></Link>
        </div>

        <div>
          
        </div>

        <div className="hidden md:flex gap-4 items-center flex-col sm:flex-row">
          <iframe src="https://store.steampowered.com/widget/2616200/Miss_Peacock/" width="646" height="190"></iframe>
        </div>
        <div className="flex md:hidden gap-4 items-center flex-col sm:flex-row">
          <iframe src="https://store.steampowered.com/widget/2616200/Miss_Peacock/" width="380" height="190"></iframe>
        </div>

        <div className="hidden md:flex gap-4 items-center flex-col sm:flex-row">
          <iframe src="https://store.steampowered.com/widget/2784960/Avian_Enigma/" width="646" height="190"></iframe>
        </div>
        <div className="flex md:hidden gap-4 items-center flex-col sm:flex-row">
          <iframe src="https://store.steampowered.com/widget/2784960/Avian_Enigma/" width="380" height="190"></iframe>
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">© 2021-{new Date().getFullYear()} Otter Club. All rights reserved.</p>
      </footer>
    </div>
  );
}
