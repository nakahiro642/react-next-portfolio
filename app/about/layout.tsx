import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "プロフィール、経歴、スキルについて紹介しています。",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
