// Cada chave corresponde a um ícone Lucide em Services.tsx.
export type ServiceIcon =
  | "layout-template"
  | "globe"
  | "layers"
  | "cloud"
  | "braces"
  | "workflow";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const servicesIntro =
  "Do site institucional ao sistema completo: soluções web sob medida, do frontend ao backend.";

export const services: Service[] = [
  {
    title: "Landing Pages",
    description:
      "Páginas modernas, responsivas e personalizadas para apresentar negócios, produtos e serviços.",
    icon: "layout-template",
  },
  {
    title: "Sites Institucionais",
    description:
      "Sites profissionais para empresas, com identidade visual, conteúdo personalizado e integração com canais de contato.",
    icon: "globe",
  },
  {
    title: "Sistemas Web Completos",
    description:
      "Desenvolvimento de aplicações com frontend, backend, banco de dados, autenticação e regras de negócio.",
    icon: "layers",
  },
  {
    title: "Plataformas SaaS",
    description:
      "Criação de plataformas web com gestão de usuários, assinaturas e funcionalidades adaptadas ao modelo de negócio.",
    icon: "cloud",
  },
  {
    title: "APIs e Integrações",
    description:
      "Desenvolvimento de APIs REST, integração entre sistemas, bancos de dados e serviços externos.",
    icon: "braces",
  },
  {
    title: "Automações e Soluções Personalizadas",
    description:
      "Automação de processos e desenvolvimento de funcionalidades sob medida para diferentes necessidades.",
    icon: "workflow",
  },
];

export const servicesAction = { label: "Entrar em contato", href: "/#contato" };
