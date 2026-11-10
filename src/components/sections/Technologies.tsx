import { Webhook } from "lucide-react";
import type { CSSProperties } from "react";
import { BrandLogo } from "@/components/icons/BrandLogo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  type TechnologyIcon,
  technologiesIntro,
  technologyGroups,
} from "@/content/technologies";
import { cn } from "@/lib/cn";

// Colunas por largura de tela. As classes ficam escritas por inteiro para o
// Tailwind encontrá-las: forçam o início de uma nova linha (col-start-1).
const breakpoints = [
  { columns: 3, newRow: "col-start-1", sameRow: "col-start-auto" },
  { columns: 4, newRow: "sm:col-start-1", sameRow: "sm:col-start-auto" },
  { columns: 6, newRow: "lg:col-start-1", sameRow: "lg:col-start-auto" },
];

// Distribui os itens em linhas equilibradas para nenhum ficar sozinho:
// 7 itens em 3 colunas viram 3 + 2 + 2, em vez de 3 + 3 + 1.
function rowStarts(count: number, columns: number) {
  const rows = Math.ceil(count / columns);
  const base = Math.floor(count / rows);
  const larger = count % rows;
  const starts = new Set<number>();

  for (let row = 0, index = 0; row < rows; row++) {
    starts.add(index);
    index += row < larger ? base + 1 : base;
  }

  return starts;
}

function placementClasses(index: number, count: number) {
  return breakpoints.map(({ columns, newRow, sameRow }) =>
    rowStarts(count, columns).has(index) ? newRow : sameRow,
  );
}

const logoStyles =
  "size-[30px] saturate-[.55] brightness-[.92] transition-[filter] duration-300 group-hover:saturate-100 group-hover:brightness-100";

function TechIcon({ icon }: { icon: TechnologyIcon }) {
  if (icon.kind === "brand") {
    return <BrandLogo name={icon.logo} className={logoStyles} />;
  }

  if (icon.kind === "api") {
    return (
      <Webhook aria-hidden className="size-7 text-accent" strokeWidth={1.5} />
    );
  }

  return (
    <span
      aria-hidden
      className="flex size-[30px] items-center justify-center border border-[#3a3a3a] font-display text-[10px] font-bold tracking-tight text-muted"
    >
      {icon.text}
    </span>
  );
}

export function Technologies() {
  return (
    <SectionWrapper id="tecnologias" aria-labelledby="tecnologias-titulo">
      <Reveal>
        <SectionHeading
          id="tecnologias-titulo"
          eyebrow="04 — Tecnologias"
          title="Tecnologias"
          description={technologiesIntro}
        />
      </Reveal>

      <div className="mt-16 border-b border-border md:mt-24">
        {technologyGroups.map(({ title, items }) => (
          <Reveal
            key={title}
            className="grid gap-6 border-t border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10 md:py-10"
          >
            <h3 className="text-sm tracking-wide text-muted md:pt-1">
              {title}
            </h3>
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {items.map(({ name, icon, color }, index) => (
                <li
                  key={name}
                  style={{ "--brand": color } as CSSProperties}
                  className={cn(
                    "group flex flex-col items-start gap-5 border border-border bg-surface p-4 transition-[border-color,translate] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--brand)_55%,var(--color-border))] motion-reduce:hover:translate-none",
                    ...placementClasses(index, items.length),
                  )}
                >
                  <span className="flex size-8 items-center justify-center">
                    <TechIcon icon={icon} />
                  </span>
                  <span className="text-sm leading-5">{name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
