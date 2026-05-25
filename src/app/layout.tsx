import type { Metadata } from "next";
import { Cormorant_Garamond, Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const body = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const script = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Happy Birthday, Dishuu 💗",
  description:
    "A beautiful interactive birthday world — made with love for Dishuu.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
