'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['30%', '-30%'])

  const line1 = 'Tu imagen es la primera impresión que recibe tu cliente.'
  const words = line1.split(' ')

  return (
    <section className="relative overflow-hidden border-y border-border py-20 sm:py-28">
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <div
        ref={ref}
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <h2 className="font-heading text-3xl font-light leading-[1.15] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
                {i < words.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          ))}
        </h2>
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-6 sm:mt-8 font-heading text-5xl sm:text-6xl md:text-7xl font-light italic text-gold leading-none"
>
  Haz que cuente.
</motion.p>
      </div>
    </section>
  )
}
