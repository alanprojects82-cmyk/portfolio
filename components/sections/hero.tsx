'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const headingWords = [
    'Transformando',
    'la',
    'presencia',
    'digital',
    'de',
    'negocios',
    'y',
    'marcas.',
  ]

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Animated golden ambient background */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[10%] top-[15%] h-[35vh] w-[35vh] rounded-full bg-gold/10 blur-[100px]"
        />
        <div className="absolute inset-0 grain opacity-60" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          Consultoría Creativa & Digital
        </motion.p>

        <h1 className="font-heading text-[2.7rem] font-light leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {headingWords.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
            >
              <motion.span
                className={`inline-block ${
                  word === 'digital' || word === 'marcas.' ? 'text-gold' : ''
                }`}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < headingWords.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Ayudo a empresas y emprendedores a proyectar una imagen profesional
          mediante branding, diseño web, contenido visual y herramientas
          digitales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:gold-glow"
          >
            <MessageCircle size={18} />
            Hablar por WhatsApp
          </a>
          <a
            href="#proyectos"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-gold/50 hover:text-gold"
          >
            Ver proyectos
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
