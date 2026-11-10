import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

// Rótulo das seções ("01 — Sobre") com o marcador quadrado laranja.
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-sm tracking-wide text-accent before:size-1.5 before:shrink-0 before:bg-accent before:content-['']",
        className,
      )}
      {...props}
    />
  );
}
