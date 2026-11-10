import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { AccentDot, OgFrame, loadOgFonts, ogColors, ogSize } from "@/lib/og";

export const alt = `Projeto do portfólio de ${site.name}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = getProject((await params).slug);

  if (!project) notFound();

  return new ImageResponse(
    (
      <OgFrame
        footerStart={
          <span style={{ fontFamily: "Bricolage", letterSpacing: "-0.02em" }}>
            {site.name}
            <AccentDot />
          </span>
        }
        footerEnd={site.role}
      >
        <div style={{ display: "flex", fontSize: 30, color: ogColors.accent }}>
          {project.category}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            maxWidth: 1000,
            fontFamily: "Bricolage",
            fontSize: 112,
            lineHeight: 1,
            letterSpacing: "-0.035em",
          }}
        >
          {project.title}
        </div>
      </OgFrame>
    ),
    { ...size, fonts: loadOgFonts() },
  );
}
