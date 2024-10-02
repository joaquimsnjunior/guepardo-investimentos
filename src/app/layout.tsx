import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import { cn } from "./utils/cn";
import Header from "./components/header";
import Footer from "./components/footer";
import { ReactElement } from "react";
import FooterExtension from "./components/footer-extension";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
  default: "Guepardo Investimentos | Investimentos financeiros",
  template: "%s | Guepardo Investimentos",
  },
  openGraph: {
    locale: "pt-BR",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable}`, // Fonte utilizada Geist
          "bg-white  tracking-tighter text-black antialiased"
        )}
      >
          <Header />
          <main className="mx-auto overflow-hidden md:overflow-visible">
            {children}
          </main>
        <Footer />
        <FooterExtension />
      </body>
    </html>
  );
}
