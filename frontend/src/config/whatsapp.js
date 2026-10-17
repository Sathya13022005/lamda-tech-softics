// Single place to set the institute's WhatsApp Business number.
// Digits only, with country code, no + or spaces (e.g. 91XXXXXXXXXX for India).
export const WHATSAPP_NUMBER = '9361886138';

// Builds a wa.me link that opens WhatsApp with a pre-filled message.
export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
