'use client'

import { motion } from 'framer-motion'
import {
  Gem,
  Globe,
  Camera,
  Share2,
  LayoutDashboard,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
}

const services: Service[] = [
  {
    icon: Gem,
    title: 'Branding',
    description:
      'Identidad visual que comunica el valor real de tu negocio y lo posiciona con autoridad.',
    benefits: ['Logotipo y sistema visual', 'Manual de marca', 'Posicionamiento'],
  },
  {
    icon: Globe,
    title: 'Diseño Web',
    description:
      'Sitios modernos, rápidos y responsivos pensados para generar confianza y conversiones.',
    benefits: ['Diseño a medida', 'Optimización móvil', 'Enfoque en conversión'],
  },
  {
    icon: Camera,
    title: 'Contenido Visual',
    description:
      'Material gráfico y audiovisual profesional que eleva la percepción de tu marca.',
    benefits: ['Fotografía y edición', 'Piezas gráficas', 'Dirección de arte'],
  },
  {
    icon: Share2,
    title: 'Redes Sociales',
    description:
      'Diseño coherente y estratégico para que tu presencia digital se vea impecable.',
    benefits: ['Plantillas premium', 'Línea visual', 'Consistencia de marca'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboards & Presentaciones',
    description:
      'Presentaciones ejecutivas y dashboards claros que comunican datos con elegancia.',
    benefits: ['Presentaciones ejecutivas', 'Visualización de datos', 'Plantillas'],
  },
  {
    icon: Wrench,
    title: 'Herramientas Digitales',
    description:
      'Soluciones digitales a medida que facilitan la operación y el contacto con clientes.',
    benefits: ['Automatización', 'Catálogos digitales', 'Contacto simplificado'],
  },
]

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones creativas con estándar profesional"
        description="Cada servicio está diseñado para fortalecer la imagen y la presencia digital de tu negocio."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col gap-5 bg-background p-8 transition-colors duration-500 hover:bg-card sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold transition-all duration-500 group-hover:scale-110 group-hover:gold-glow">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-normal text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
              <ul className="mt-auto flex flex-col gap-2 pt-2">
                {s.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
