import type { Metadata } from "next";
import { site } from "@/content/site";

export const siteTitle = `${site.name} | ${site.role}`;

export const siteDescription = `Portfólio de ${site.name}, desenvolvedor de software: sistemas web, APIs, automações, landing pages e sites institucionais.`;

// O Next mescla a metadata de forma rasa: um `openGraph` definido na página
// substitui o do layout por inteiro. Por isso as páginas repetem esta base.
export const baseOpenGraph = {
  siteName: site.name,
  locale: "pt_BR",
  type: "website",
} satisfies Metadata["openGraph"];
