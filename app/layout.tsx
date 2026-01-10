import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ThemeWrapper from "./_components/ThemeWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "「Next.js+ヘッドレスCMSではじまる!かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:"「Next.js+ヘッドレスCMSではじまる!かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/open.png"],
  },
  alternates: {
    canonical: "http://localhost:3000"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeWrapper>
          <Header />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
