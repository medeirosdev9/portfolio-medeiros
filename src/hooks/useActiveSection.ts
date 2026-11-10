"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Retorna o id da seção que cruza uma faixa fina no meio da tela.
// Fora da home as seções não existem e o retorno é null.
export function useActiveSection(ids: string[]) {
  const pathname = usePathname();
  // Guarda a rota junto do id: ao trocar de página, o valor antigo é ignorado.
  const [state, setState] = useState<{ pathname: string; id: string } | null>(
    null,
  );
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState({ pathname, id: entry.target.id });
          }
        }
      },
      // Faixa de 1% da altura, a 45% do topo da tela.
      { rootMargin: "-45% 0px -54% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key, pathname]);

  return state?.pathname === pathname ? state.id : null;
}
