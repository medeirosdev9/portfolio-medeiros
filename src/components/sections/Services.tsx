import { ArrowDownRight } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { services, servicesAction } from "@/content/services";

export function Services() {
  return (
    <SectionWrapper id="servicos" aria-labelledby="servicos-titulo">
      <Reveal>
        <SectionHeading
          id="servicos-titulo"
          eyebrow="05 — Serviços"
          title="Serviços"
        />
      </Reveal>

      <Reveal className="mt-16 md:mt-24">
        <ol className="border-b border-border">
          {services.map(({ title, description }, index) => (
            <li
              key={title}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)] md:items-baseline md:gap-10 md:py-10"
            >
              <span
                aria-hidden
                className="text-sm tracking-wide text-accent tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                {title}
              </h3>
              <p className="leading-7 text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-12">
        <Button href={servicesAction.href}>
          {servicesAction.label}
          <ButtonIcon>
            <ArrowDownRight aria-hidden className="size-4" />
          </ButtonIcon>
        </Button>
      </Reveal>
    </SectionWrapper>
  );
}
