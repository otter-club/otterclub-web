import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook, FaGithub, FaDiscord, FaQq } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 md:pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center justify-center grow">
        <Link href="/">
          <Image
            className="hover:shadow-[0_0_300px_#9f6d4a] transition-shadow duration-300 rounded-full size-36 md:size-64"
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
            {`We're a splashy squad of otter developers crafting cozy indie games—full of playful puzzles, hand-painted
            adventures, and heartwarming stories. Dive into worlds made with paws, passion, and a pinch of riverbank
            mischief! 🌊✨`}
          </p>
          <p>{`Let's make waves, one game at a time!`}</p>
          <Link href="https://discord.gg/otterclub" target="_blank"></Link>
          <p>
            Email us:
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
            title="Website">
            <AiOutlineGlobal />
          </Link>
          <Link
            href="mailto:contact@otterclub.io"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title="Email">
            <MdAlternateEmail />
          </Link>
          <Link
            href="https://facebook.com/otter.club.game"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title="Facebook">
            <FaFacebook />
          </Link>{" "}
          <Link
            href="https://github.com/otter-club"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title="GitHub">
            <FaGithub />
          </Link>
          <Link
            href="https://discord.gg/YWE6yFK5Bv"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title="Discord">
            <FaDiscord />
          </Link>
          <Link
            href="https://twitter.com/OtterClub_"
            target="_blank"
            className="hover:text-[#D6CEC0] transition-colors duration-300"
            title="Twitter">
            <FaXTwitter />
          </Link>
          <Link
            href="https://qm.qq.com/q/Um2QKJKlua"
            target="_blank"
            className="cursor-pointer hover:text-[#D6CEC0] transition-colors duration-300"
            title="QQ Group: 831197219">
            <FaQq />
          </Link>
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
      <Link
        href="https://www.producthunt.com/posts/otter-club?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-otter&#0045;club"
        target="_blank">
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=953516&theme=neutral&t=1744676497313"
          alt="Otter&#0032;Club - A&#0032;homepage&#0032;of&#0032;Otter&#0032;Club&#0032;game&#0032;studio&#0046; | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </Link>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">© 2021-{new Date().getFullYear()} Otter Club. All rights reserved.</p>
      </footer>
    </div>
  );
}
