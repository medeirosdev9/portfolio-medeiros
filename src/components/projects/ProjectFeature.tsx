import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrowserFrame } from "@/components/projects/BrowserFrame";
import { ConceptNotice } from "@/components/projects/ConceptNotice";
import { PhoneFrame } from "@/components/projects/PhoneFrame";
import { ProjectBadge } from "@/components/projects/ProjectBadge";
import { ProjectCapture } from "@/components/projects/ProjectCapture";
import { ProjectLink } from "@/components/projects/ProjectLink";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getFrameLabel, type Project } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectFeatureProps = {
  project: Project;
  index: number;
};

// Movimento do hover: só `translate`, desligado com movimento reduzido.
const lift =
  "transition-[translate,border-color] duration-500 ease-out motion-reduce:transition-colors motion-reduce:group-hover:translate-none";

export function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const href = `/projetos/${project.slug}`;
  const isReversed = index % 2 === 1;
  const mobileCapture = project.gallery.find(
    (image) => image.device === "mobile",
  );

  return (
    <article
      className={cn(
        "group grid gap-8 lg:items-center lg:gap-12",
        isReversed
          ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          : "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
      )}
    >
      <Reveal className={cn(isReversed && "lg:order-2")}>
        {/* A partir de 640px, a margem lateral (18%) recebe o celular, que
            cobre só uma faixa estreita da borda da captura desktop. */}
        <div
          className={cn(
            "relative sm:pb-14",
            isReversed ? "sm:pl-[18%]" : "sm:pr-[18%]",
          )}
        >
          {/* Atalho de clique para mouse e toque. Fica fora do Tab e dos
              leitores de tela, que usam o título e "Ver detalhes"; a capa
              continua acessível pelo texto alternativo. */}
          <Link
            href={href}
            tabIndex={-1}
            aria-hidden
            className="absolute inset-0 z-10"
          />
          <BrowserFrame
            label={getFrameLabel(project)}
            className={cn(lift, "group-hover:-translate-y-1 group-hover:border-accent/45")}
          >
            <ProjectCapture
              image={project.cover}
              sizes="(min-width: 1024px) 590px, (min-width: 640px) 82vw, 100vw"
            />
          </BrowserFrame>

          {mobileCapture && (
            <PhoneFrame
              className={cn(
                lift,
                "absolute bottom-0 hidden w-[22%] group-hover:-translate-y-2.5 sm:block",
                isReversed ? "left-0" : "right-0",
              )}
            >
              {/* Decorativa: a capa ao lado já descreve o projeto. */}
              <ProjectCapture
                image={{ ...mobileCapture, alt: "" }}
                sizes="(min-width: 1024px) 160px, 22vw"
              />
            </PhoneFrame>
          )}
        </div>
      </Reveal>

      {/* max-w-2xl: com a coluna ocupando toda a largura (abaixo de 1024px),
          limita o comprimento das linhas de texto. */}
      <Reveal
        delay={0.1}
        className={cn("max-w-2xl lg:max-w-none", isReversed && "lg:order-1")}
      >
        <p
          aria-hidden
          className="font-display text-7xl leading-[0.8] font-bold tracking-tighter text-transparent tabular-nums transition-[-webkit-text-stroke-color] duration-500 [-webkit-text-stroke:1px_#3a3a3a] group-hover:[-webkit-text-stroke-color:var(--color-accent)] sm:text-8xl"
        >
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          <Link
            href={href}
            className="decoration-accent decoration-1 underline-offset-8 hover:underline"
          >
            {project.title}
          </Link>
        </h3>
        <ProjectBadge isConcept={project.isConcept} className="mt-4" />
        <p className="mt-6 leading-7 text-muted">{project.summary}</p>
        {project.isConcept && <ConceptNotice className="mt-6" />}
        <ul aria-label="Destaques" className="mt-6 flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="border border-border px-2.5 py-1 text-xs tracking-wide text-muted"
            >
              {highlight}
            </li>
          ))}
        </ul>
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
