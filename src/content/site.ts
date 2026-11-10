import type { BrandLogoName } from "@/components/icons/brands/logos";

export const site = {
  name: "Gabriel Medeiros",
  role: "Software Developer",
} as const;

export type NavLink = {
  label: string;
  href: `/#${string}`;
};

// Âncoras com "/" funcionam também fora da home, como na página 404.
// A ordem segue a numeração das seções: Início é 00, Sobre 01... Contato 06.
export const navLinks: NavLink[] = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Tecnologias", href: "/#tecnologias" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/#contato" },
];

export type SocialLink = {
  label: string;
  url: string | null;
  // Exibido na seção Contato ao lado do nome da rede.
  handle?: string;
  icon?: BrandLogoName;
};

// Com `url: null`, o rodapé mostra o item como "link pendente" e a seção
// Contato o omite, em vez de exibir um link quebrado.
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/medeirosdev9",
    handle: "medeirosdev9",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/gabriel-leite-medeiros-211b53354/",
    handle: "gabriel-leite-medeiros",
    icon: "linkedin",
  },
];
