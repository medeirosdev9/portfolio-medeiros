import Image from "next/image";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

const dimensions = {
  desktop: { width: 2400, height: 1500 },
  mobile: { width: 780, height: 1688 },
};

type ProjectCaptureProps = {
  image: ProjectImage;
  sizes: string;
  preload?: boolean;
  className?: string;
};

export function ProjectCapture({
  image,
  sizes,
  preload,
  className,
}: ProjectCaptureProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      sizes={sizes}
      preload={preload}
      className={cn("h-auto w-full", className)}
      {...dimensions[image.device]}
    />
  );
}
