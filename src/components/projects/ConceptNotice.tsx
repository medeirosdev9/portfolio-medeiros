import { conceptNotice } from "@/content/projects";
import { cn } from "@/lib/cn";

export function ConceptNotice({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "border-l border-accent pl-4 text-sm leading-6 text-muted",
        className,
      )}
    >
      {conceptNotice}
    </p>
  );
}
