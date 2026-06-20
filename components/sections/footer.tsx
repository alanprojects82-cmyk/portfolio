'use client'

import { MessageCircle, Phone } from 'lucide-react'
import { FacebookIcon } from '@/components/icons'
import { whatsappLink, PHONE_NUMBER, FACEBOOK_URL } from '@/lib/contact'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <a
              href="#inicio"
              className="font-heading text-2xl font-semibold tracking-[0.2em]"
            >
              ALAN<span className="text-gold">TO</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Consultoría creativa y digital para fortalecer la imagen y la
              presencia de tu negocio.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label="Llamar"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <Phone size={18} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ALAN TO. Todos los derechos reservados.</p>
          <p>Diseño, tecnología y presencia digital.</p>
        </div>
      </div>
    </footer>
  )
}
