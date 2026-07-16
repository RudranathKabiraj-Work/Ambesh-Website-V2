// WhatsApp helper - opens chat with Ambesh with a prefilled message.
const PHONE = "918929465115";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:
    "Hi Ambesh, I want to book a Business Systems Diagnostic for my company. Please share the next steps.",
  diagnostic:
    "Hi Ambesh, I want to book a Business Systems Diagnostic for my company. Please share the next steps.",
  osAudit:
    "Hi Ambesh, I want to book a Business Systems Diagnostic for my company. Please share the next steps.",
  training:
    "Hi Ambesh, we are exploring an AI training program for our team. Please share the next steps.",
  strategy:
    "Hi Ambesh, we want to discuss SOPs and process consulting for our team. Please share the next steps.",
  automation:
    "Hi Ambesh, we want to discuss implementation through BDA Technologies. Please share the next steps.",
  contact:
    "Hi Ambesh, I want to talk about building clear systems for my business. Please share the next steps.",
  podcast:
    "Hi Ambesh, I would like to pitch a guest for the Inspire with Ambesh podcast.",
  book: "Hi Ambesh, I would like a bulk order or signed copy of Accelerate with AI.",
};
