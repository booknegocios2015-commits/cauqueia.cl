/**
 * CAUQUE.IA - WhatsApp Helper Utility
 * Configured with WHATSAPP_NUMBER for easy client updates.
 */

export const WHATSAPP_NUMBER = '56912345678'; // Reemplazar con el número real de CAUQUE.IA cuando esté disponible

export function getWhatsAppUrl(message: string = 'Hola CAUQUE.IA, me interesa diseñar e implementar un sistema digital de captación y ventas.'): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
