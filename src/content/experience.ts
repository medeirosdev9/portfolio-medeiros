export type Experience = {
  title: string;
  label?: string;
  isCurrent: boolean;
  activities: string[];
};

// Texto genérico de propósito: não cite empregador, sistemas internos ou
// clientes corporativos. Datas e cargos ficam de fora até serem confirmados.
export const experiences: Experience[] = [
  {
    title: "Desenvolvimento de Software",
    label: "Atuação profissional atual",
    isCurrent: true,
    activities: [
      "Desenvolvimento e manutenção de aplicações corporativas",
      "Automação de processos e fluxos de trabalho",
      "Integração entre sistemas e plataformas",
      "Desenvolvimento de interfaces e funcionalidades web",
      "Análise e implementação de regras de negócio",
      "Correção de problemas e evolução de aplicações existentes",
    ],
  },
  {
    title: "Desenvolvimento Web Independente",
    isCurrent: false,
    activities: [
      "Criação de landing pages",
      "Desenvolvimento de sites institucionais",
      "Interfaces responsivas",
      "Integração com formulários e canais de contato",
      "Publicação, manutenção e melhorias de sites",
      "Projetos para clientes e estudos de caso independentes",
    ],
  },
];
