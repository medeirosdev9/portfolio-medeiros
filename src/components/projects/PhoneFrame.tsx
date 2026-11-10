import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  // Posição, largura e movimento ficam na camada externa; a interna desenha o
  // aparelho. Assim um `absolute` vindo de fora não disputa com o `relative`.
  className?: string;
};

// Moldura de celular para capturas mobile, com a câmera desenhada no topo.
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={className}>
      <div className="relative rounded-[22px] border border-[#333] bg-[#0f0f0f] p-1.5 shadow-[0_24px_48px_-16px_rgb(0_0_0/0.8)]">
        <span
          aria-hidden
          className="absolute top-[11px] left-1/2 z-10 h-[5px] w-[28%] -translate-x-1/2 rounded-full bg-[#0f0f0f]"
        />
        <div className="overflow-hidden rounded-2xl">{children}</div>
      </div>
    </div>
  );
}
