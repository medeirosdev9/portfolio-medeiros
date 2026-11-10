import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { JsonLd } from "@/components/seo/JsonLd";
import { site, socialLinks } from "@/content/site";
import { baseOpenGraph, siteDescription, siteTitle } from "@/lib/metadata";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
};

// Apenas dados públicos: sem telefone, e-mail, endereço ou empregador.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl.href,
  sameAs: socialLinks.flatMap(({ url }) => (url ? [url] : [])),
};

export default function Home() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Services />
      <Contact />
    </>
  );
}
