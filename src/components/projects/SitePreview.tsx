"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type SitePreviewProps = {
  title: string;
  url: string;
};

// O site só carrega após o clique. O sandbox mantém a página isolada do
// portfólio, e os links externos dela abrem fora da prévia.
export function SitePreview({ title, url }: SitePreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        src={url}
        title={`Prévia do site ${title}`}
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="no-referrer"
        className="h-[75vh] w-full border border-border bg-foreground"
      />
    );
  }

  return (
    <div className="flex flex-col items-start gap-6 border border-border p-8 lg:flex-row lg:items-center lg:justify-between">
      <p className="max-w-md leading-7 text-muted">
        Navegue pelo site publicado dentro desta página. O conteúdo vem do
        próprio site e pode mudar.
      </p>
      <Button variant="secondary" onClick={() => setIsLoaded(true)}>
        Carregar prévia
      </Button>
    </div>
  );
}
