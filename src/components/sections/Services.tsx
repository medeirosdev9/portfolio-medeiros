import {
  ArrowDownRight,
  Braces,
  Cloud,
  Globe,
  Layers3,
  LayoutTemplate,
  type LucideIcon,
  Workflow,
} from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  type ServiceIcon,
  services,
  servicesAction,
  servicesIntro,
} from "@/content/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  "layout-template": LayoutTemplate,
  globe: Globe,
  layers: Layers3,
  cloud: Cloud,
  braces: Braces,
  workflow: Workflow,
};

// Grade de 1, 2 ou 3 colunas. As bordas são compartilhadas: a lista desenha
// topo e esquerda, cada card desenha direita e base.
export function Services() {
  return (
    <SectionWrapper id="servicos" aria-labelledby="servicos-titulo">
      <Reveal>
        <SectionHeading
          id="servicos-titulo"
          eyebrow="05 — Serviços"
          title="Serviços"
          description={servicesIntro}
        />
      </Reveal>

      <Reveal className="mt-16 md:mt-24">
        <ol className="grid border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }, index) => {
            const Icon = icons[icon];

            return (
              <li
                key={title}
                className="group relative grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-x-4 border-r border-b border-border px-5 pt-6 pb-7 transition-colors duration-300 hover:bg-surface md:flex md:flex-col md:items-start md:px-8 md:pt-8 md:pb-9"
              >
                {/* Linha laranja que percorre o topo do card no hover. */}
                <span
                  aria-hidden
                  className="absolute -inset-x-px -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
                />
                <span className="flex size-11 items-center justify-center border border-border text-muted transition-colors duration-300 group-hover:border-accent/45 group-hover:text-accent md:size-12">
                  <Icon aria-hidden className="size-[22px]" strokeWidth={1.5} />
                </span>
                <h3 className="pr-8 font-display text-xl leading-tight font-semibold tracking-tight text-balance md:mt-10 md:pr-0 md:text-2xl">
                  {title}
                </h3>
                <span
                  aria-hidden
                  className="absolute top-6 right-5 text-[13px] tracking-wide text-accent tabular-nums md:top-8 md:right-8"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="col-span-full mt-4 text-[15px] leading-[26px] text-muted md:mt-3">
                  {description}
                </p>
              </li>
            );
          })}
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
