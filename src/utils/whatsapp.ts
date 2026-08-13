/**
 * CAUQUE.IA - WhatsApp Helper Utility
 * Configured with WHATSAPP_NUMBER for easy client updates.
 */

export const WHATSAPP_NUMBER = '56987567519'; // Número oficial CAUQUE.IA (+569 87567519)

export function getWhatsAppUrl(message: string = 'Hola CAUQUE.IA, me interesa diseñar e implementar un sistema digital de captación y ventas.'): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
