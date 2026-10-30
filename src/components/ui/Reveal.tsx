"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  as?: "div" | "span";
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Com movimento reduzido, o MotionConfig mantém só o fade e remove o deslocamento.
export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const Element = motion[as];

  return (
    <MotionConfig reducedMotion="user">
      <Element
        data-reveal
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Element>
    </MotionConfig>
  );
}
