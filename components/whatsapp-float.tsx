'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

export function WhatsappFloat() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-background shadow-[0_8px_30px_-6px_rgba(201,168,106,0.6)]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
      <MessageCircle size={24} className="relative" />
    </motion.a>
  )
}
