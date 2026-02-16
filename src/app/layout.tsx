import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#F6EFE5",
};

export const metadata: Metadata = {
  title: "Otter Club",
  description: "Otter Club is a community of developers who are passionate about creating games.",
  keywords: ["otter", "club", "games", "development", "indie", "community"],
  authors: [{ name: "Otter Club", url: "https://otterclub.io" }],
  creator: "Otter Club",
  icons: {
    icon: "/img/otter_club_logo.png",
    shortcut: "/img/otter_club_logo.png",
    apple: "/img/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/img/otter_club_logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
