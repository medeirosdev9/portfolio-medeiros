import { Hero } from "@/components/sections/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

// PROVISÓRIO: mantém as âncoras da Navbar funcionando até cada seção ser
// desenvolvida. Remova o item ao implementar a seção real.
const plannedSections = [
  { id: "sobre", eyebrow: "01 — Sobre", title: "Sobre", stage: "a definir" },
  {
    id: "experiencia",
    eyebrow: "02 — Experiência",
    title: "Experiência",
    stage: "Etapa 5",
  },
  {
    id: "projetos",
    eyebrow: "03 — Projetos",
    title: "Projetos",
    stage: "Etapa 4",
  },
  { id: "contato", eyebrow: "04 — Contato", title: "Contato", stage: "Etapa 6" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {plannedSections.map(({ id, eyebrow, title, stage }) => (
        <SectionWrapper key={id} id={id} aria-labelledby={`${id}-titulo`}>
          <Reveal>
            <SectionHeading
              id={`${id}-titulo`}
              eyebrow={eyebrow}
              title={title}
              description={`Seção provisória. Desenvolvimento: ${stage}.`}
            />
          </Reveal>
        </SectionWrapper>
      ))}
    </>
  );
}
