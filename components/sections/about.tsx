'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-border"
        >
          <Image
            src="/alan-portrait.png"
            alt="Retrato profesional de Alan Emir"
            fill
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </motion.div>

        <div className="flex flex-col gap-6">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Sobre mí
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-heading text-3xl font-light leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Sobre Alan To
            </h2>
          </Reveal>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <Reveal delay={2}>
              <p>
                Soy Alan Emir y ayudo a negocios, emprendedores y empresas a
                fortalecer su imagen mediante diseño, tecnología y soluciones
                digitales personalizadas.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                Trabajo directamente con cada cliente para comprender sus
                necesidades y desarrollar soluciones visuales que generen
                confianza, profesionalismo y una mejor presencia digital.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <p>
                Combino creatividad, tecnología y visión empresarial para crear
                proyectos que realmente aporten valor a cada negocio.
              </p>
            </Reveal>
          </div>
          <Reveal delay={5}>
            <div className="mt-4 flex flex-wrap gap-3">
              {['Branding', 'Diseño Web', 'Contenido Visual', 'Estrategia'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/30 bg-gold-soft px-4 py-1.5 text-xs text-gold"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
