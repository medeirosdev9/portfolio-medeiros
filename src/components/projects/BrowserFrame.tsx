import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BrowserFrameProps = {
  // Texto da barra de endereço (ver getFrameLabel).
  label: string;
  children: ReactNode;
  className?: string;
};

// Moldura de navegador para capturas desktop. A barra é decorativa.
export function BrowserFrame({ label, children, className }: BrowserFrameProps) {
  return (
    <div className={cn("border border-border bg-surface", className)}>
      <div
        aria-hidden
        className="flex h-8 items-center gap-4 border-b border-border px-3 sm:h-9 sm:px-3.5"
      >
        <span className="flex shrink-0 gap-1.5">
          <span className="size-2 rounded-full bg-[#2e2e2e]" />
          <span className="size-2 rounded-full bg-[#2e2e2e]" />
          <span className="size-2 rounded-full bg-[#2e2e2e]" />
        </span>
        <span className="mx-auto min-w-0 max-w-72 flex-1 truncate rounded-full bg-background px-3 py-0.5 text-center text-[11px] tracking-wide text-muted">
          {label}
        </span>
        {/* Equilibra os três pontos para centralizar a barra de endereço. */}
        <span className="w-[30px] shrink-0" />
      </div>
      {children}
    </div>
  );
}
