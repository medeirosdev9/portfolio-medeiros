import { NextResponse, type NextRequest } from "next/server";
import { getProject } from "@/content/projects";

// Com Partial Prerendering, o notFound() da página chega depois do status 200.
// Aqui o projeto inexistente recebe um 404 real antes de a resposta começar.
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];

  if (getProject(slug)) return NextResponse.next();

  return NextResponse.rewrite(new URL("/404", request.url), { status: 404 });
}

export const config = { matcher: "/projetos/:slug" };
