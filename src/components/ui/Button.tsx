"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

type ButtonVariant = "primary" | "secondary";

type ButtonStyleProps = {
  variant?: ButtonVariant;
};

type ButtonAsLink = ButtonStyleProps & ComponentProps<typeof MotionLink>;

type ButtonAsButton = ButtonStyleProps &
  HTMLMotionProps<"button"> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-medium tracking-wide transition-colors duration-300 motion-reduce:transform-none! disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-background hover:bg-foreground",
  secondary: "border border-border text-foreground hover:border-foreground",
};

const pressGesture = {
  initial: "rest",
  whileHover: "hover",
  whileTap: "press",
  variants: { press: { scale: 0.98 } },
  transition: { duration: 0.2, ease: "easeOut" },
} as const;

const iconVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: { x: 2, y: 2 },
};

// Ícone que acompanha o hover do Button. O `!important` do `motion-reduce` vence
// o transform inline do Motion, que mesmo sem animar aplicaria o valor final.
export function ButtonIcon({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="inline-flex motion-reduce:transform-none!"
      variants={iconVariants}
    >
      {children}
    </motion.span>
  );
}

// Renderiza um link quando recebe `href` e um <button> nos demais casos.
export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if (props.href !== undefined) {
    return <MotionLink className={styles} {...pressGesture} {...props} />;
  }

  return (
    <motion.button
      type="button"
      className={styles}
      {...pressGesture}
      {...(props as HTMLMotionProps<"button">)}
    />
  );
}
