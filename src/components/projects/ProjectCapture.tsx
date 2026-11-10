import Image from "next/image";
import type { ComponentProps } from "react";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

const dimensions = {
  desktop: { width: 2400, height: 1500 },
  mobile: { width: 780, height: 1688 },
};

type ProjectCaptureProps = {
  image: ProjectImage;
  sizes: string;
  // "high" só na imagem principal da página (LCP). A documentação do Next 16
  // recomenda fetchPriority em vez de `preload`; os dois não se combinam.
  // Com "high", o carregamento também passa a ser imediato (eager): o padrão
  // do next/image é lazy, que adiaria a imagem principal até o layout.
  fetchPriority?: ComponentProps<typeof Image>["fetchPriority"];
  className?: string;
};

export function ProjectCapture({
  image,
  sizes,
  fetchPriority,
  className,
}: ProjectCaptureProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      sizes={sizes}
      fetchPriority={fetchPriority}
      loading={fetchPriority === "high" ? "eager" : undefined}
      className={cn("h-auto w-full", className)}
      {...dimensions[image.device]}
    />
  );
}
