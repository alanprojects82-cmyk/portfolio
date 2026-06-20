'use client'

import { motion } from 'framer-motion'
import { Ear, Search, PenTool, Rocket, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps: { num: string; title: string; desc: string; icon: LucideIcon }[] =
  [
    {
      num: '01',
      title: 'Escuchar',
      desc: 'Entiendo tu negocio, tus objetivos y lo que quieres transmitir.',
      icon: Ear,
    },
    {
      num: '02',
      title: 'Analizar',
      desc: 'Estudio tu mercado y defino la estrategia visual adecuada.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Diseñar',
      desc: 'Desarrollo soluciones visuales con estándar profesional.',
      icon: PenTool,
    },
    {
      num: '04',
      title: 'Impulsar',
      desc: 'Entrego herramientas que fortalecen tu presencia y conversión.',
      icon: Rocket,
    },
  ]

export function Process() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow="Proceso"
          title="Una metodología clara y cercana"
          description="Cada proyecto sigue un proceso pensado para entender, diseñar e impulsar tu negocio."
        />

        <div className="relative mt-16">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-border md:left-0 md:top-12 md:h-px md:w-full" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex gap-5 md:flex-col md:gap-6"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background text-gold">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="font-heading text-sm text-gold">
                      Paso {s.num}
                    </span>
                    <h3 className="mt-1 font-heading text-2xl font-normal text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
