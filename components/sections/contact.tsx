'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Send } from 'lucide-react'
import { FacebookIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import {
  whatsappLink,
  PHONE_NUMBER,
  FACEBOOK_URL,
} from '@/lib/contact'

export function Contact() {
  const [form, setForm] = useState({ name: '', business: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hola Alan, soy ${form.name || '—'}${
      form.business ? ` de ${form.business}` : ''
    }. ${form.message || 'Me gustaría hablar sobre un proyecto.'}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Contacto
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-heading text-3xl font-light leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
              Hablemos sobre tu próximo proyecto.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Cuéntame qué necesitas y diseñemos juntos una imagen que genere
              confianza y resultados. La forma más rápida de empezar es por
              WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:gold-glow"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Phone size={18} />
                Llamar
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <FacebookIcon size={18} />
                Facebook
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-2 flex flex-col gap-1 border-t border-border pt-6 text-sm text-muted-foreground">
              <span className="text-foreground">Teléfono directo</span>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="font-heading text-2xl text-gold"
              >
                473 121 1264
              </a>
            </div>
          </Reveal>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 sm:p-9"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-muted-foreground">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Tu nombre"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="business" className="text-sm text-muted-foreground">
              Negocio o marca
            </label>
            <input
              id="business"
              type="text"
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
              placeholder="Nombre de tu negocio"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              ¿En qué te puedo ayudar?
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntame sobre tu proyecto…"
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:gold-glow"
          >
            Enviar por WhatsApp
            <Send
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
