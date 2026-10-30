import type { ComponentProps } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionWrapperProps = ComponentProps<"section"> & {
  id: string;
};

// `scroll-mt-*` compensa a altura da Navbar fixa na navegação por âncoras.
export function SectionWrapper({
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "scroll-mt-16 border-t border-border py-24 md:scroll-mt-20 md:py-36",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
