import { ArrowUpRight } from "lucide-react";
import { Button, ButtonIcon } from "@/components/ui/Button";

export function ProjectLink({ url }: { url: string }) {
  return (
    <Button
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
    >
      Abrir site
      <span className="sr-only">(abre em nova aba)</span>
      <ButtonIcon direction="up-right">
        <ArrowUpRight aria-hidden className="size-4" />
      </ButtonIcon>
    </Button>
  );
}
