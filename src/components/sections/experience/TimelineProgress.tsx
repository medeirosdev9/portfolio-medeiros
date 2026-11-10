"use client";

import { motion, useScroll } from "motion/react";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

type TimelineProgressProps = {
  children: ReactNode;
  className?: string;
};

// Linha laranja que acompanha a rolagem sobre a linha cinza da timeline.
// Só anima `scaleY` (feito pela GPU). Com movimento reduzido, é escondida por
// CSS (sem diferença entre servidor e navegador) e a linha cinza permanece.
export function TimelineProgress({ children, className }: TimelineProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.span
        aria-hidden
        className="absolute top-0 bottom-0 left-0 z-10 w-px origin-top bg-accent motion-reduce:hidden"
        style={{ scaleY: scrollYProgress }}
      />
      {children}
    </div>
  );
}
