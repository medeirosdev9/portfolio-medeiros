import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
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
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Services />
      <PlannedSection
        id="contato"
        eyebrow="06 — Contato"
        title="Contato"
        stage="Etapa 6"
      />
    </>
  );
}
