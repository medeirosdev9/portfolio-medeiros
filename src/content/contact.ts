const whatsappNumber = "5547991262173";
const whatsappMessage =
  "Olá, Gabriel! Vi seu portfólio e gostaria de conversar sobre um projeto.";

// O número fica só no link: não é exibido na página.
export const contact = {
  // O "?" em laranja é adicionado pelo componente.
  title: "Vamos conversar sobre o seu projeto",
  description:
    "Para orçamentos, dúvidas ou novas oportunidades, o caminho mais rápido é o WhatsApp.",
  whatsapp: {
    label: "Conversar no WhatsApp",
    url: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  channelsTitle: "Outros canais",
};
