import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      <Reveal>
        <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-3xl font-heading text-3xl font-light leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={`max-w-xl text-base leading-relaxed text-muted-foreground ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
