import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "DDF Motors — Geselecteerde Tweedehands Auto's | Brugge",
    template: "%s | DDF Motors",
  },
  description:
    "DDF Motors BV in Brugge — meer dan 30 jaar uw partner voor geselecteerde tweedehands wagens en lichte bedrijfswagens in West-Vlaanderen. Eerlijke prijs, snelle service.",
  keywords: [
    "tweedehands auto kopen Brugge",
    "auto verkopen West-Vlaanderen",
    "DDF Motors",
    "autohandelaar Brugge",
    "tweedehands wagens West-Vlaanderen",
  ],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "DDF Motors BV",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
