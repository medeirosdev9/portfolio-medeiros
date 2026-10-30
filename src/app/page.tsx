import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type PlannedSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  stage: string;
};

// PROVISÓRIO: mantém as âncoras da Navbar funcionando até cada seção ser
// desenvolvida. Remova o uso ao implementar a seção real.
function PlannedSection({ id, eyebrow, title, stage }: PlannedSectionProps) {
  return (
    <SectionWrapper id={id} aria-labelledby={`${id}-titulo`}>
      <Reveal>
        <SectionHeading
          id={`${id}-titulo`}
          eyebrow={eyebrow}
          title={title}
          description={`Seção provisória. Desenvolvimento: ${stage}.`}
        />
      </Reveal>
    </SectionWrapper>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <PlannedSection
        id="sobre"
        eyebrow="01 — Sobre"
        title="Sobre"
        stage="a definir"
      />
      <PlannedSection
        id="experiencia"
        eyebrow="02 — Experiência"
        title="Experiência"
        stage="Etapa 5"
      />
      <Projects />
      <PlannedSection
        id="contato"
        eyebrow="04 — Contato"
        title="Contato"
        stage="Etapa 6"
      />
    </>
  );
}
