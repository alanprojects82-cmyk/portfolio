export const WHATSAPP_NUMBER = '524731211264'
export const PHONE_NUMBER = '4731211264'
export const FACEBOOK_URL = 'https://www.facebook.com/Alangrafics01'

export function whatsappLink(
  message = 'Hola Alan, vi tu sitio web y me gustaría hablar sobre un proyecto.',
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
