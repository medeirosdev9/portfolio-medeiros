export const site = {
  name: "Gabriel Medeiros",
  role: "Software Developer",
} as const;

export type NavLink = {
  label: string;
  href: `/#${string}`;
};

// Âncoras com "/" funcionam também fora da home, como na página 404.
export const navLinks: NavLink[] = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Contato", href: "/#contato" },
];

export type SocialLink = {
  label: string;
  url: string | null;
};

// PLACEHOLDER: troque `null` pela URL real. Enquanto for `null`, o rodapé
// mostra o item como "link pendente" em vez de um link quebrado.
export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: null },
  { label: "LinkedIn", url: null },
];
