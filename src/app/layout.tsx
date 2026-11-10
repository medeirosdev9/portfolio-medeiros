import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/content/site";
import { baseOpenGraph, siteDescription, siteTitle } from "@/lib/metadata";
import { isIndexable, siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: `%s | ${site.name}`,
  },
  description: siteDescription,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    ...baseOpenGraph,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
  },
  // Local, preview e produção sem domínio definitivo não são indexados.
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sem JavaScript, o Reveal não anima e o conteúdo ficaria invisível. */}
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:text-background"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
