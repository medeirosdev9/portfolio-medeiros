import { ArrowDownRight, MapPin } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/content/hero";
import { site } from "@/content/site";

const [firstName, lastName] = site.name.split(" ");

// A coluna de texto e o recuo do sobrenome seguem a grade do SectionHeading.
export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col overflow-hidden md:min-h-[calc(100svh-5rem)] md:scroll-mt-20"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <Container className="relative flex flex-1 flex-col justify-between gap-16 py-12 md:gap-12">
        {/* fade={false}: o nome é o maior elemento da tela (LCP) e aparece
            desde o primeiro quadro; só o deslocamento é animado. */}
        <h1 className="font-display text-[clamp(3.5rem,17vw,6.5rem)] leading-[0.95] font-bold tracking-tight md:text-[clamp(5rem,min(13vw,22svh),10rem)]">
          <Reveal as="span" fade={false} className="block">
            {firstName}
          </Reveal>{" "}
          <Reveal
            as="span"
            fade={false}
            delay={0.1}
            className="block md:pl-[calc((100%-2.5rem)/4+2.5rem)]"
          >
            {lastName}
            <span className="text-accent">.</span>
          </Reveal>
        </h1>

        <Reveal delay={0.25}>
          <div className="relative grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10">
            {/* Linha laranja desenhada sobre a divisória, na largura da 1ª coluna. */}
            <span
              aria-hidden
              className="absolute -top-px left-0 h-px w-1/4 origin-left animate-draw-x bg-accent motion-reduce:animate-none md:w-[calc((100%-2.5rem)/4)]"
            />

            <div className="text-sm leading-6 tracking-wide">
              <p>{site.role}</p>
              <p className="mt-1 flex items-center gap-2 text-muted">
                <MapPin
                  aria-hidden
                  className="size-4 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                {hero.location}
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
                {hero.description}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href={hero.primaryAction.href}>
                  {hero.primaryAction.label}
                  <ButtonIcon>
                    <ArrowDownRight aria-hidden className="size-4" />
                  </ButtonIcon>
                </Button>
                <Button href={hero.secondaryAction.href} variant="secondary">
                  {hero.secondaryAction.label}
                  <ButtonIcon>
                    <ArrowDownRight aria-hidden className="size-4" />
                  </ButtonIcon>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Indicador de rolagem: só em telas largas, onde há margem lateral. */}
      <span
        aria-hidden
        className="absolute right-10 bottom-10 hidden items-center gap-3 text-xs tracking-[0.2em] text-muted uppercase [writing-mode:vertical-rl] xl:flex"
      >
        Role
        <span className="h-12 w-px origin-top animate-scroll-cue bg-linear-to-b from-accent to-transparent motion-reduce:animate-none" />
      </span>
    </section>
  );
}
