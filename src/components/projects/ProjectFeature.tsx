import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ConceptNotice } from "@/components/projects/ConceptNotice";
import { ProjectCapture } from "@/components/projects/ProjectCapture";
import { ProjectLink } from "@/components/projects/ProjectLink";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectFeatureProps = {
  project: Project;
  index: number;
};

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const href = `/projetos/${project.slug}`;
  const isReversed = index % 2 === 1;

  return (
    <article
      className={cn(
        "grid items-end gap-8 lg:gap-12",
        isReversed
          ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          : "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
      )}
    >
      <Reveal className={cn(isReversed && "lg:order-2")}>
        <Link
          href={href}
          className="group block overflow-hidden border border-border"
        >
          <ProjectCapture
            image={project.cover}
            sizes="(min-width: 1024px) 720px, 100vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
          />
        </Link>
      </Reveal>

      <Reveal delay={0.1} className={cn(isReversed && "lg:order-1")}>
        <p className="text-sm tracking-wide text-muted tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          <Link
            href={href}
            className="decoration-accent decoration-1 underline-offset-8 hover:underline"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm tracking-wide text-accent">
          {project.category}
        </p>
        <p className="mt-6 leading-7 text-muted">{project.summary}</p>
        {project.isConcept && <ConceptNotice className="mt-6" />}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <Button href={href}>
            Ver detalhes
            <span className="sr-only">de {project.title}</span>
            <ButtonIcon direction="right">
              <ArrowRight aria-hidden className="size-4" />
            </ButtonIcon>
          </Button>
          {project.url && <ProjectLink url={project.url} />}
        </div>
      </Reveal>
    </article>
  );
}
