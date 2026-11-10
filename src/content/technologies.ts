import type { BrandLogoName } from "@/components/icons/brands/logos";

export type TechnologyIcon =
  | { kind: "brand"; logo: BrandLogoName }
  // Sem logo oficial: ícone de interface.
  | { kind: "api" }
  // Logo indisponível no Devicon e no Simple Icons.
  | { kind: "monogram"; text: string };

export type Technology = {
  name: string;
  icon: TechnologyIcon;
  // Cor oficial da marca, usada só na borda do card no hover.
  color: string;
};

export type TechnologyGroup = {
  title: string;
  items: Technology[];
};

export const technologiesIntro =
  "Tecnologias e ferramentas com as quais tenho contato ou experiência em diferentes níveis.";

const brand = (logo: BrandLogoName): TechnologyIcon => ({ kind: "brand", logo });

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: brand("html"), color: "#E34F26" },
      { name: "CSS", icon: brand("css"), color: "#1572B6" },
      { name: "JavaScript", icon: brand("javascript"), color: "#F7DF1E" },
      { name: "TypeScript", icon: brand("typescript"), color: "#3178C6" },
      { name: "React", icon: brand("react"), color: "#61DAFB" },
      { name: "Next.js", icon: brand("nextjs"), color: "#F5F5F4" },
      { name: "Tailwind CSS", icon: brand("tailwind"), color: "#06B6D4" },
    ],
  },
  {
    title: "Backend e programação",
    items: [
      { name: "Java", icon: brand("java"), color: "#EA2D2E" },
      { name: "Spring Boot", icon: brand("spring"), color: "#6DB33F" },
      { name: "Python", icon: brand("python"), color: "#3776AB" },
      { name: "C", icon: brand("c"), color: "#A8B9CC" },
      { name: "APIs REST", icon: { kind: "api" }, color: "#E2703A" },
    ],
  },
  {
    title: "Ferramentas e plataformas",
    items: [
      { name: "Git", icon: brand("git"), color: "#F05032" },
      { name: "GitHub", icon: brand("github"), color: "#F5F5F4" },
      { name: "VS Code", icon: brand("vscode"), color: "#007ACC" },
      { name: "ServiceNow", icon: { kind: "monogram", text: "SN" }, color: "#62D84E" },
      { name: "SAP", icon: brand("sap"), color: "#0FAAFF" },
      { name: "Netlify", icon: brand("netlify"), color: "#00C7B7" },
    ],
  },
];
