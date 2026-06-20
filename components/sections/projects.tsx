'use client'

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Project = {
  name: string
  sector: string
  problem: string
  solution: string
  result: string
  images: string[]
  link: string
}

const featured: Project[] = [
  {
    name: 'CAAM Clínica Dental',
    sector: 'Salud · Odontología',
    problem: 'Imagen poco profesional que no transmitía confianza clínica.',
    solution: 'Branding completo y presencia digital limpia y moderna.',
    result: 'Percepción de marca premium y mayor captación de pacientes.',
    link: 'https://www.facebook.com/profile.php?id=61560210330673',
    images: [
      '/projects/negocio1/logo caam.png',
      '/projects/negocio1/post caam.jpg',
      '/projects/negocio1/post presentacion caam.jpg',
      '/projects/negocio1/screenshot face caam.png',
    ],
  },
  {
    name: 'Hotel Paseo de la Presa',
    sector: 'Hotelería · Turismo',
    problem: 'Comunicación visual dispersa entre canales digitales.',
    solution: 'Sistema visual elegante y material gráfico unificado.',
    result: 'Una identidad sofisticada acorde a su experiencia de hospedaje.',
    link: 'https://hotelpaseodelapresa.vercel.app',
    images: [
      '/projects/negocio2/das2 hotel.png',
      '/projects/negocio2/hotel fachada.jpg',
      '/projects/negocio2/pag hotel.png',
      '/projects/negocio2/qr hotel.jpeg',
    ],
  },
  {
    name: 'Prihoda',
    sector: 'Industrial · Ventilación',
    problem: 'Material técnico difícil de comunicar a clientes.',
    solution: 'Presentaciones ejecutivas y contenido visual claro.',
    result: 'Comunicación técnica más persuasiva y profesional.',
    link: 'https://www.prihoda.com/',
    images: [
      '/projects/negocio4/dash1.png',
      '/projects/negocio4/dash2.png',
      '/projects/negocio4/dash3.png',
      '/projects/negocio4/prihoda google.png',
      '/projects/negocio4/prihoda.png',
    ],
  },
  {
    name: 'Los Gallos',
    sector: 'peluquería · Barbería',
    problem: 'Marca sin identidad en redes sociales.',
    solution: 'Branding con carácter y contenido para redes sociales.',
    result: 'Una marca memorable con fuerte presencia local.',
    link: 'https://www.facebook.com/search/top?q=peluqueria%20los%20gallos%20ex%20del%20cantador%20ahora%20en%20lomas%20del',
    images: [
      '/projects/negocio3/diseño nuevo logo.jpg',
      '/projects/negocio3/logo peluqueria_page-0001.jpg',
      '/projects/negocio3/screenshot face.png',
      '/projects/negocio3/publicidad gallos.png',
    ],
  },
  {
    name: 'Vidriería y Aluminios MG',
    sector: 'Construcción · Manufactura',
    problem: 'Ausencia de presencia digital profesional.',
    solution: 'Identidad corporativa y catálogo digital de productos.',
    result: 'Mayor alcance y confianza con nuevos clientes.',
    link: 'https://www.facebook.com/MGVidrioyAluminio',
    images: [
      '/projects/negocio5/diseño tarjeta vidrios oscar frente2.jpg',
      '/projects/negocio5/diseño tarjeta vidrios oscar1.jpg',
      '/projects/negocio5/face mg.png',
      '/projects/negocio5/tarjetas mg.png',
    ],
  },
]

function FeaturedProject({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yImg = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const reversed = index % 2 === 1

  const [imgIndex, setImgIndex] = useState(0)

  const next = () =>
    setImgIndex((p) => (p + 1) % project.images.length)

  const prev = () =>
    setImgIndex((p) =>
      p === 0 ? project.images.length - 1 : p - 1
    )

  return (
    <div
      ref={ref}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
        reversed ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* 🖼️ IMAGENES (FIX DEFINITIVO SIN MOCHAS) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9 }}
        className="group relative h-[420px] md:h-[520px] overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white/5 to-black/10 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={project.images[imgIndex]}
              alt={project.name}
              fill
              sizes="100vw"
              className="
                object-contain
                p-6
                transition-transform duration-700
              "
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/30" />

        {/* contador */}
        <span className="absolute left-5 top-5 rounded-full border border-gold/40 bg-black/40 px-4 py-1.5 text-xs tracking-wide text-gold backdrop-blur-md">
          0{index + 1} / {project.images.length}
        </span>

        {/* controles */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/80"
            >
              →
            </button>
          </>
        )}
      </motion.div>

      {/* 📝 INFO */}
      <div className="flex flex-col gap-6 [direction:ltr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {project.sector}
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mt-3"
          >
            <h3 className="
              font-heading
              text-3xl
              font-light
              text-foreground
              sm:text-4xl
              underline
              decoration-gold/60
              underline-offset-4
              hover:text-gold
              transition
            ">
              {project.name}
            </h3>

            <span className="opacity-0 group-hover:opacity-100 transition text-gold">
              ↗
            </span>
          </a>
        </div>

        <dl className="flex flex-col gap-4 border-l border-border pl-6">
          {[
            { k: 'Problema', v: project.problem },
            { k: 'Solución', v: project.solution },
            { k: 'Resultado', v: project.result },
          ].map((row) => (
            <div key={row.k} className="flex flex-col gap-1">
              <dt className="text-[11px] uppercase tracking-[0.25em] text-gold/80">
                {row.k}
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Proyectos"
        title="Trabajo que habla por sí mismo"
        description="Una selección de proyectos donde el diseño se convirtió en una ventaja real para el negocio."
      />

      <div className="mt-20 flex flex-col gap-24 sm:gap-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}