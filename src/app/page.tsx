import { Terminal } from "lucide-react";
import * as motion from "motion/react-client";

// Página provisória da Etapa 1: valida tema, fontes, Motion e Lucide.
export default function Home() {
  return (
    <main className="flex flex-1 items-center px-6 py-24 sm:px-12">
      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="flex items-center gap-3 text-sm tracking-wide text-accent">
          <Terminal aria-hidden className="size-4" />
          Em construção
        </p>
        <h1 className="mt-8 font-display text-6xl font-bold tracking-tight sm:text-8xl">
          Medeiros
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
          Desenvolvedor de software. Texto provisório até a seção principal
          ficar pronta.
        </p>
      </motion.div>
    </main>
  );
}
