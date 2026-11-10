import { ImageResponse } from "next/og";
import { AccentDot, loadOgFonts, ogColors } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Monograma "GM." da Navbar. O iOS arredonda os cantos sozinho.
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: ogColors.background,
          color: ogColors.foreground,
          fontFamily: "Bricolage",
          fontSize: 76,
          letterSpacing: "-0.03em",
        }}
      >
        GM
        <AccentDot />
      </div>
    ),
    { ...size, fonts: loadOgFonts() },
  );
}
