'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Alan transformó por completo la imagen de nuestra clínica. Ahora transmitimos la confianza y profesionalismo que buscábamos.',
    name: 'Dirección',
    role: 'CAAM Clínica Dental',
  },
  {
    quote:
      'El material visual que desarrolló elevó nuestra marca a otro nivel. Trabajo impecable y atención muy personalizada.',
    name: 'Gerencia',
    role: 'Hotel Paseo de la Presa',
  },
  {
    quote:
      'Entendió exactamente lo que necesitábamos y lo entregó con una calidad que superó nuestras expectativas.',
    name: 'Equipo',
    role: 'Los Gallos',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)

  const go = (n: number) => {
    setDir(n)
    setIndex((prev) => (prev + n + testimonials.length) % testimonials.length)
  }

  const t = testimonials[index]

  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen mis clientes"
          align="center"
        />

        <div className="relative mt-14 min-h-[260px]">
          <Quote
            size={56}
            className="mx-auto mb-8 text-gold/40"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl"
            >
              <p className="font-heading text-2xl font-light leading-snug text-foreground text-balance sm:text-3xl">
                {t.quote}
              </p>
              <footer className="mt-8">
                <p className="text-base text-gold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            aria-label="Anterior testimonio"
            onClick={() => go(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al testimonio ${i + 1}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Siguiente testimonio"
            onClick={() => go(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold/50 hover:text-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
