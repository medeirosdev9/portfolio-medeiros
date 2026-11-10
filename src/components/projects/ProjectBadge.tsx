import { BadgeCheck, Lightbulb } from "lucide-react";
import { projectBadges } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectBadgeProps = {
  isConcept: boolean;
  className?: string;
};

export function ProjectBadge({ isConcept, className }: ProjectBadgeProps) {
  const Icon = isConcept ? Lightbulb : BadgeCheck;

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 border border-accent/35 py-1.5 pr-3 pl-2.5 text-[13px] tracking-wide text-accent",
        className,
      )}
    >
      <Icon aria-hidden className="size-[15px]" strokeWidth={1.5} />
      {isConcept ? projectBadges.concept : projectBadges.client}
    </p>
  );
}
