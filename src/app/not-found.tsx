import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Página não encontrada | ${site.name}`,
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 md:py-40">
      <p className="text-sm tracking-wide text-accent tabular-nums">404</p>
      <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-balance sm:text-7xl lg:text-8xl">
        Página não encontrada
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
        O endereço acessado não existe ou foi alterado.
      </p>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Button href="/">Voltar ao início</Button>
        <Button href="/#projetos" variant="secondary">
          Ver projetos
        </Button>
      </div>
    </Container>
  );
}
