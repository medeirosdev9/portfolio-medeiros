import { ArrowDownRight } from "lucide-react";
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
      className="flex min-h-[calc(100svh-4rem)] scroll-mt-16 flex-col md:min-h-[calc(100svh-5rem)] md:scroll-mt-20"
    >
      <Container className="flex flex-1 flex-col justify-between gap-16 py-12 md:gap-12">
        <h1 className="font-display text-[clamp(3.5rem,17vw,6.5rem)] leading-[0.95] font-bold tracking-tight md:text-[clamp(5rem,min(13vw,22svh),10rem)]">
          <Reveal as="span" className="block">
            {firstName}
          </Reveal>{" "}
          <Reveal
            as="span"
            delay={0.1}
            className="block md:pl-[calc((100%-2.5rem)/4+2.5rem)]"
          >
            {lastName}
            <span className="text-accent">.</span>
          </Reveal>
        </h1>

        <Reveal delay={0.25}>
          <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10">
            <div className="text-sm leading-6 tracking-wide">
              <p>{site.role}</p>
              <p className="text-muted">{hero.location}</p>
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
    </section>
  );
}
