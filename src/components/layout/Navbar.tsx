"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/content/site";
import { useActiveSection } from "@/hooks/useActiveSection";

const MOBILE_MENU_ID = "menu-mobile";
// Com 7 links, a navegação horizontal só cabe a partir de 1024px (lg).
const DESKTOP_BREAKPOINT = "(min-width: 64rem)";
const sectionIds = navLinks.map((link) => link.href.slice(2));

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection(sectionIds);

  // aria-current="location": indica a seção visível a leitores de tela.
  const currentFor = (href: string) =>
    href.slice(2) === activeSection ? ("location" as const) : undefined;

  useEffect(() => {
    if (!isOpen) return;

    const background = document.querySelectorAll("body > :not(header)");
    const desktop = window.matchMedia(DESKTOP_BREAKPOINT);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };
    const closeOnDesktop = () => setIsOpen(false);

    // Com o menu aberto, o conteúdo atrás dele não recebe foco nem rola.
    document.body.style.overflow = "hidden";
    background.forEach((element) => element.setAttribute("inert", ""));
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = "";
      background.forEach((element) => element.removeAttribute("inert"));
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/#inicio"
            aria-label={`GM. ${site.name}, ir para o início`}
            className="font-display text-2xl font-bold tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            GM<span className="text-accent">.</span>
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={currentFor(link.href)}
                    className="group relative block py-2 text-sm tracking-wide text-muted transition-colors duration-300 hover:text-foreground aria-[current=location]:text-foreground"
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 group-aria-[current=location]:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            // O menu só existe no DOM quando aberto: a referência acompanha.
            aria-controls={isOpen ? MOBILE_MENU_ID : undefined}
            className="-mr-3 flex size-12 items-center justify-center lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden className="size-6" strokeWidth={1.5} />
            )}
          </button>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id={MOBILE_MENU_ID}
              aria-label="Menu móvel"
              className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-background md:h-[calc(100dvh-5rem)] lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Container className="py-10">
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={link.href} className="border-b border-border">
                      <Link
                        href={link.href}
                        aria-current={currentFor(link.href)}
                        className="flex items-baseline gap-6 py-4 font-display text-3xl font-semibold tracking-tight aria-[current=location]:text-accent sm:py-5 sm:text-4xl"
                        onClick={() => setIsOpen(false)}
                      >
                        {/* Mesma numeração dos rótulos das seções (Início = 00). */}
                        <span
                          aria-hidden
                          className="font-sans text-sm font-normal tracking-wide text-accent tabular-nums"
                        >
                          {String(index).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
