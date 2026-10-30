import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConceptNotice } from "@/components/projects/ConceptNotice";
import { ProjectCapture } from "@/components/projects/ProjectCapture";
import { ProjectLink } from "@/components/projects/ProjectLink";
import { SitePreview } from "@/components/projects/SitePreview";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getNextProject, getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) return {};

  const title = `${project.title} | ${site.name}`;

  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  };
}

const headingStyles = "font-display text-2xl font-semibold tracking-tight";
const gridStyles =
  "grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]";

export default async function ProjectPage({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const desktopImages = project.gallery.filter(
    (image) => image.device === "desktop",
  );
  const mobileImages = project.gallery.filter(
    (image) => image.device === "mobile",
  );

  return (
    <article>
      <Container className="py-12 md:py-16">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-3 py-2 text-sm tracking-wide text-muted transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Voltar aos projetos
        </Link>

        <Reveal className="mt-12 md:mt-16">
          <p className="text-sm tracking-wide text-accent">
            {project.category}
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          {project.isConcept && <ConceptNotice className="mt-8 max-w-2xl" />}
        </Reveal>

        <Reveal delay={0.15} className="mt-12 md:mt-16">
          <div className="border border-border">
            <ProjectCapture
              image={project.cover}
              sizes="(min-width: 1152px) 1072px, 100vw"
              preload
            />
          </div>
        </Reveal>

        <div className={`${gridStyles} mt-16 md:mt-24`}>
          <aside className="text-sm leading-6 tracking-wide">
            <dl className="space-y-6">
              <div>
                <dt className="text-muted">Categoria</dt>
                <dd className="mt-1">{project.category}</dd>
              </div>
              {project.year && (
                <div>
                  <dt className="text-muted">Ano</dt>
                  <dd className="mt-1">{project.year}</dd>
                </div>
              )}
              {project.technologies && (
                <div>
                  <dt className="text-muted">Tecnologias</dt>
                  <dd className="mt-1">{project.technologies.join(", ")}</dd>
                </div>
              )}
            </dl>
            {project.url && (
              <div className="mt-8">
                <ProjectLink url={project.url} />
              </div>
            )}
          </aside>

          <div className="max-w-2xl space-y-12">
            <section>
              <h2 className={headingStyles}>Contexto</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                {project.context}
              </p>
            </section>
            <section>
              <h2 className={headingStyles}>Objetivo</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                {project.objective}
              </p>
            </section>
            <section>
              <h2 className={headingStyles}>Principais funcionalidades</h2>
              <ul className="mt-4 border-t border-border">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-border py-4 text-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <section aria-labelledby="galeria-titulo" className="mt-24 md:mt-36">
          <h2 id="galeria-titulo" className={headingStyles}>
            Galeria
          </h2>
          <div className="mt-8 space-y-8">
            {desktopImages.map((image) => (
              <Reveal key={image.src}>
                <div className="border border-border">
                  <ProjectCapture
                    image={image}
                    sizes="(min-width: 1152px) 1072px, 100vw"
                  />
                </div>
              </Reveal>
            ))}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:ml-auto md:w-3/4">
              {mobileImages.map((image) => (
                <Reveal key={image.src}>
                  <div className="border border-border">
                    <ProjectCapture
                      image={image}
                      sizes="(min-width: 768px) 400px, 50vw"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {project.hasPreview && project.url && (
          <section
            aria-labelledby="previa-titulo"
            className="mt-24 hidden md:mt-36 md:block"
          >
            <h2 id="previa-titulo" className={headingStyles}>
              Prévia interativa
            </h2>
            <div className="mt-8">
              <SitePreview title={project.title} url={project.url} />
            </div>
          </section>
        )}

        <nav
          aria-label="Navegação entre projetos"
          className="mt-24 flex flex-col gap-10 border-t border-border pt-12 md:mt-36 md:flex-row md:items-end md:justify-between"
        >
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-3 py-2 text-sm tracking-wide text-muted transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Voltar aos projetos
          </Link>
          <Link
            href={`/projetos/${nextProject.slug}`}
            className="group md:text-right"
          >
            <span className="block text-sm tracking-wide text-muted">
              Próximo projeto
            </span>
            <span className="mt-3 inline-flex items-center gap-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {nextProject.title}
              <ArrowRight
                aria-hidden
                className="size-6 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
