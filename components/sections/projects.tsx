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
      '/projects/negocio1/post presentacion caam.jpg',
      '/projects/negocio1/logo caam.png',
      '/projects/negocio1/post caam.jpg',
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
      '/projects/negocio2/qr hotel.jpeg',
      '/projects/negocio2/das2 hotel.png',
      '/projects/negocio2/hotel fachada.jpg',
      '/projects/negocio2/pag hotel.png',
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
    sector: 'Barbería',
    problem: 'Marca sin identidad en redes sociales.',
    solution: 'Branding con carácter y contenido para redes sociales.',
    result: 'Marca memorable con fuerte presencia local.',
    link:
      'https://www.facebook.com/search/top?q=peluqueria%20los%20gallos',
    images: [
      '/projects/negocio3/diseño nuevo logo.jpg',
      '/projects/negocio3/logo peluqueria_page-0001.jpg',
      '/projects/negocio3/screenshot face.png',
      '/projects/negocio3/publicidad gallos.png',
    ],
  },
  {
    name: 'Vidriería MG',
    sector: 'Construcción',
    problem: 'Sin presencia digital profesional.',
    solution: 'Identidad corporativa y catálogo digital.',
    result: 'Mayor confianza y clientes nuevos.',
    link: 'https://www.facebook.com/MGVidrioyAluminio',
    images: [
      '/projects/negocio5/diseño tarjeta vidrios oscar frente2.jpg',
      '/projects/negocio5/diseño tarjeta vidrios oscar1.jpg',
      '/projects/negocio5/face mg.png',
      '/projects/negocio5/tarjetas mg.png',
    ],
  },
]

const secondaryProjects = [
  { title: 'Casetas Turísticas de Guanajuato', category: 'Turismo' },
  { title: 'Discografía Ignacio Mendoza', category: 'Producción Musical' },
  { title: 'Portadas de Revistas Guanajuatenses', category: 'Editorial' },
  { title: 'Diseño de Logotipos para Negocios', category: 'Branding' },
  { title: 'Material Publicitario Hoteles', category: 'Marketing' },
  { title: 'Identidad Visual Restaurantes', category: 'Branding' },
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
      {/* IMÁGENES */}
      <motion.div
        className="group relative h-[420px] md:h-[520px] overflow-hidden rounded-2xl border border-border bg-black/10 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ y: yImg }}
          >
            <Image
              src={project.images[imgIndex]}
              alt={project.name}
              fill
              className="object-contain p-6"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/30" />

        <span className="absolute left-5 top-5 text-xs text-gold">
          0{index + 1} / {project.images.length}
        </span>

        {project.images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 text-white"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 text-white"
            >
              →
            </button>
          </>
        )}
      </motion.div>

      {/* INFO */}
      <div className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {project.sector}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="font-heading text-3xl underline decoration-gold/60"
        >
          {project.name}
        </a>

        <div className="border-l border-border pl-6 space-y-4 text-sm text-muted-foreground">
          <p><span className="text-gold">Problema:</span> {project.problem}</p>
          <p><span className="text-gold">Solución:</span> {project.solution}</p>
          <p><span className="text-gold">Resultado:</span> {project.result}</p>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <SectionHeading
        eyebrow="Proyectos"
        title="Trabajo que habla por sí mismo"
        description="Diseño estratégico aplicado a negocios reales."
      />

      {/* PRINCIPALES */}
      <div className="mt-20 flex flex-col gap-24">
        {featured.map((p, i) => (
          <FeaturedProject key={p.name} project={p} index={i} />
        ))}
      </div>

      {/* SECUNDARIOS HORIZONTAL */}
      <div className="mt-32">
  <h3 className="text-center font-heading text-3xl mb-10">
    Otros proyectos destacados
  </h3>

  {/* WRAPPER CON FADE EN LOS BORDES */}
  <div className="relative w-full overflow-hidden">

    {/* FADE IZQUIERDA */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />

    {/* FADE DERECHA */}
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

    {/* SCROLL INFINITO */}
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        duration: 28, // velocidad (más alto = más lento)
        ease: 'linear',
        repeat: Infinity,
      }}
    >

      {/* DUPLICAMOS PARA LOOP PERFECTO */}
      {[...secondaryProjects, ...secondaryProjects].map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="
            min-w-[280px]
            flex-shrink-0
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            transition
            hover:border-gold/60
            hover:shadow-lg
            cursor-pointer
          "
        >
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold">
            {p.category}
          </p>

          <h4 className="font-heading text-xl leading-snug">
            {p.title}
          </h4>
        </motion.div>
      ))}

    </motion.div>
  </div>
</div>

    </section>
  )
}