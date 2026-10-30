export type ProjectImage = {
  src: string;
  alt: string;
  device: "desktop" | "mobile";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  objective: string;
  features: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  // Conceitos independentes exibem o aviso `conceptNotice`.
  isConcept: boolean;
  // Omitidos até haver confirmação: não preencha com estimativas.
  year?: string;
  technologies?: string[];
  // Conceitos não apontam para os sites publicados, que usam marcas reais.
  url?: string;
  hasPreview?: boolean;
};

const clientCategory = "Projeto para cliente";
const conceptCategory = "Estudo de caso / Conceito de site";

export const conceptNotice =
  "Conceito independente, desenvolvido por iniciativa própria. Não é um site oficial e não foi contratado nem aprovado por nenhuma empresa. Nome, marca e conteúdo exibidos nas imagens são fictícios.";

export const projects: Project[] = [
  {
    slug: "arena-futmais",
    title: "Arena Futmais",
    category: clientCategory,
    summary:
      "Site de uma arena de futebol society, com estrutura, eventos, galeria, horários e agendamento pelo WhatsApp.",
    context:
      "Site desenvolvido para a Arena Futmais, um espaço de futebol society que também recebe campeonatos e eventos.",
    objective:
      "Apresentar a estrutura e os eventos da arena, informar horários e localização e levar o visitante ao agendamento pelo WhatsApp.",
    features: [
      "Navegação por seções em uma única página",
      "Galeria de fotos com filtros por categoria",
      "Horários de funcionamento",
      "Perguntas frequentes",
      "Localização com link para o Google Maps",
      "Agendamento pelo WhatsApp",
    ],
    cover: {
      src: "/projects/arena-futmais/cover.webp",
      alt: "Seção de apresentação do site da Arena Futmais, com a foto da fachada.",
      device: "desktop",
    },
    gallery: [
      {
        src: "/projects/arena-futmais/desktop-2.webp",
        alt: "Seção de horários e agendamento do site da Arena Futmais.",
        device: "desktop",
      },
      {
        src: "/projects/arena-futmais/desktop-3.webp",
        alt: "Seção de localização do site da Arena Futmais, com vista aérea.",
        device: "desktop",
      },
      {
        src: "/projects/arena-futmais/mobile-1.webp",
        alt: "Seção de apresentação do site da Arena Futmais em tela de celular.",
        device: "mobile",
      },
      {
        src: "/projects/arena-futmais/mobile-2.webp",
        alt: "Seção de horários do site da Arena Futmais em tela de celular.",
        device: "mobile",
      },
    ],
    isConcept: false,
    url: "https://arenafutmais.com.br/",
    hasPreview: true,
  },
  {
    slug: "conceito-loja",
    title: "Conceito para loja de materiais",
    category: conceptCategory,
    summary:
      "Conceito de site para uma loja de materiais de construção, com categorias, vitrine de produtos e consulta pelo WhatsApp.",
    context:
      "Estudo desenvolvido por iniciativa própria sobre como uma loja de materiais de construção pode apresentar seus produtos na web.",
    objective:
      "Organizar os produtos por categoria e levar o visitante a consultar a disponibilidade pelo WhatsApp, sem exibir preços ou estoque.",
    features: [
      "Categorias de produtos",
      "Vitrine com filtros por categoria",
      "Consulta de produto pelo WhatsApp",
      "Navegação por seções em uma única página",
    ],
    cover: {
      src: "/projects/conceito-loja/cover.webp",
      alt: "Abertura do conceito de site para loja de materiais, com a marca fictícia Loja Modelo.",
      device: "desktop",
    },
    gallery: [
      {
        src: "/projects/conceito-loja/desktop-2.webp",
        alt: "Vitrine de produtos demonstrativos com filtros por categoria.",
        device: "desktop",
      },
      {
        src: "/projects/conceito-loja/desktop-3.webp",
        alt: "Seção de categorias de produtos do conceito.",
        device: "desktop",
      },
      {
        src: "/projects/conceito-loja/mobile-1.webp",
        alt: "Abertura do conceito de loja em tela de celular.",
        device: "mobile",
      },
      {
        src: "/projects/conceito-loja/mobile-2.webp",
        alt: "Vitrine de produtos do conceito em tela de celular.",
        device: "mobile",
      },
    ],
    isConcept: true,
  },
  {
    slug: "conceito-climatizacao",
    title: "Conceito para climatização",
    category: conceptCategory,
    summary:
      "Conceito de site para uma empresa de climatização e refrigeração, com serviços, documentação técnica e pedido de orçamento pelo WhatsApp.",
    context:
      "Estudo desenvolvido por iniciativa própria sobre como uma empresa de climatização e refrigeração pode apresentar seus serviços na web.",
    objective:
      "Explicar os serviços e as etapas de trabalho, destacar a documentação técnica e levar o visitante ao pedido de orçamento pelo WhatsApp.",
    features: [
      "Apresentação de dez serviços",
      "Etapas de trabalho, do projeto à manutenção",
      "Seção de documentação técnica (PMOC e Laudo TRT)",
      "Pedido de orçamento pelo WhatsApp",
    ],
    cover: {
      src: "/projects/conceito-climatizacao/cover.webp",
      alt: "Abertura do conceito de site para climatização e refrigeração, com a marca fictícia Modelo.",
      device: "desktop",
    },
    gallery: [
      {
        src: "/projects/conceito-climatizacao/desktop-2.webp",
        alt: "Grade de serviços do conceito de climatização.",
        device: "desktop",
      },
      {
        src: "/projects/conceito-climatizacao/desktop-3.webp",
        alt: "Seção de documentação técnica do conceito de climatização.",
        device: "desktop",
      },
      {
        src: "/projects/conceito-climatizacao/mobile-1.webp",
        alt: "Abertura do conceito de climatização em tela de celular.",
        device: "mobile",
      },
      {
        src: "/projects/conceito-climatizacao/mobile-2.webp",
        alt: "Lista de serviços do conceito de climatização em tela de celular.",
        device: "mobile",
      },
    ],
    isConcept: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
