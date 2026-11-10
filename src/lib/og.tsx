import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";

// O gerador de imagens não lê variáveis CSS: estas cores repetem as do
// @theme em globals.css e precisam acompanhar qualquer mudança feita lá.
export const ogColors = {
  background: "#0a0a0a",
  foreground: "#f5f5f4",
  muted: "#a3a3a3",
  border: "#262626",
  accent: "#e2703a",
};

export const ogSize = { width: 1200, height: 630 };

// TTFs estáticos (licença OFL) usados só no build; o site usa next/font.
// A leitura é síncrona: com Cache Components, uma leitura assíncrona de
// arquivo impediria que as imagens fossem geradas no build.
const fontsDir = join(process.cwd(), "src/assets/fonts");

const ogFonts = [
  {
    name: "Bricolage",
    data: readFileSync(join(fontsDir, "BricolageGrotesque-Bold.ttf")),
    weight: 700 as const,
    style: "normal" as const,
  },
  {
    name: "Inter",
    data: readFileSync(join(fontsDir, "Inter-Regular.ttf")),
    weight: 400 as const,
    style: "normal" as const,
  },
];

export function loadOgFonts() {
  return ogFonts;
}

type OgFrameProps = {
  children: ReactNode;
  footerStart: ReactNode;
  footerEnd: ReactNode;
};

// Moldura comum: conteúdo no topo e rodapé com linha divisória, como no Hero.
export function OgFrame({ children, footerStart, footerEnd }: OgFrameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px 64px",
        backgroundColor: ogColors.background,
        color: ogColors.foreground,
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          borderTop: `1px solid ${ogColors.border}`,
          paddingTop: 32,
          fontSize: 28,
          letterSpacing: "0.01em",
        }}
      >
        <div style={{ display: "flex" }}>{footerStart}</div>
        <div style={{ display: "flex", color: ogColors.muted }}>{footerEnd}</div>
      </div>
    </div>
  );
}

export function AccentDot({ children = "." }: { children?: string }) {
  return <span style={{ color: ogColors.accent }}>{children}</span>;
}
