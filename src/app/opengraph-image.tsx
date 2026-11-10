import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { AccentDot, OgFrame, loadOgFonts, ogColors, ogSize } from "@/lib/og";

export const alt = `${site.name} — ${site.role}`;
export const size = ogSize;
export const contentType = "image/png";

const [firstName, lastName] = site.name.split(" ");

// Mesma composição do Hero: nome em duas linhas, sobrenome recuado.
export default async function Image() {
  return new ImageResponse(
    (
      <OgFrame
        footerStart={site.role}
        footerEnd="Portfólio · Projetos · Contato"
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Bricolage",
            fontSize: 40,
            letterSpacing: "-0.02em",
          }}
        >
          GM
          <AccentDot />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            fontFamily: "Bricolage",
            fontSize: 168,
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
          }}
        >
          <div style={{ display: "flex" }}>{firstName}</div>
          <div style={{ display: "flex", paddingLeft: 260 }}>
            {lastName}
            <span style={{ color: ogColors.accent }}>.</span>
          </div>
        </div>
      </OgFrame>
    ),
    { ...size, fonts: loadOgFonts() },
  );
}
