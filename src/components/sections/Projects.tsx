import { ProjectFeature } from "@/components/projects/ProjectFeature";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <SectionWrapper id="projetos" aria-labelledby="projetos-titulo">
      <Reveal>
        <SectionHeading
          id="projetos-titulo"
          eyebrow="03 — Projetos"
          title="Projetos"
          description="Um site desenvolvido para cliente e dois conceitos independentes."
        />
      </Reveal>
      <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
        {projects.map((project, index) => (
          <ProjectFeature key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
