'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  TrendingUp,
  ImageIcon,
  Eye,
  MessagesSquare,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const results: { title: string; icon: LucideIcon }[] = [
  { title: 'Modernización de imagen corporativa', icon: Sparkles },
  { title: 'Mayor presencia digital', icon: TrendingUp },
  { title: 'Material visual profesional', icon: ImageIcon },
  { title: 'Mejor percepción de marca', icon: Eye },
  { title: 'Herramientas que facilitan el contacto con clientes', icon: MessagesSquare },
]

export function Results() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Resultados"
        title="Beneficios reales para cada cliente"
        description="El diseño bien aplicado se traduce en confianza, presencia y oportunidades de negocio."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {results.map((r, i) => {
          const Icon = r.icon
          const wide = i === results.length - 1 && results.length % 2 !== 0
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: (i % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group flex items-center gap-5 rounded-2xl border border-border bg-card p-7 transition-colors duration-500 hover:border-gold/40 ${
                wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold transition-transform duration-500 group-hover:scale-110">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <p className="text-base text-foreground">{r.title}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
