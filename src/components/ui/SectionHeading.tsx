import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] md:gap-10",
        className,
      )}
    >
      <p className="text-sm tracking-wide text-accent md:pt-3">{eyebrow}</p>
      <div>
        <h2
          id={id}
          className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
