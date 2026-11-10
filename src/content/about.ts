export type Education = {
  title: string;
  detail: string;
  // Exibido como selo, ex.: "Em andamento".
  status?: string;
  icon: "graduation-cap" | "cpu";
};

const education: Education[] = [
  {
    title: "Engenharia de Software",
    detail: "Católica de Santa Catarina",
    status: "Em andamento",
    icon: "graduation-cap",
  },
  {
    title: "Aprendizagem Industrial",
    detail: "Tecnologia da Informação",
    icon: "cpu",
  },
];

export const about = {
  headline:
    "Sou desenvolvedor de software e estudante de Engenharia de Software.",
  description:
    "Atuo no desenvolvimento de aplicações corporativas, sistemas web, APIs e automações, além de criar sites e experiências web para diferentes segmentos.",
  education,
};
