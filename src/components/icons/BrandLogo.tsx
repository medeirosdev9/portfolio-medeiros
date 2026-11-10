import { type BrandLogoName, brandLogos } from "@/components/icons/brands/logos";

type BrandLogoProps = {
  name: BrandLogoName;
  className?: string;
};

// Logo oficial em SVG, sempre decorativo: o nome da marca fica no texto ao lado.
// O conteúdo vem de logos.ts, gerado a partir de arquivos SVG conhecidos.
export function BrandLogo({ name, className }: BrandLogoProps) {
  const logo: { viewBox: string; fill?: string; body: string } = brandLogos[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={logo.viewBox}
      fill={logo.fill}
      aria-hidden
      focusable="false"
      className={className}
      dangerouslySetInnerHTML={{ __html: logo.body }}
    />
  );
}
