import { SmoothScroll } from '@/components/smooth-scroll'
import { Navbar } from '@/components/navbar'
import { WhatsappFloat } from '@/components/whatsapp-float'
import { Hero } from '@/components/sections/hero'
import Trust from '@/components/sections/trust'
import { Services } from '@/components/sections/services'
import { Projects } from '@/components/sections/projects'
import { Philosophy } from '@/components/sections/philosophy'
import { About } from '@/components/sections/about'
import { Process } from '@/components/sections/process'
import { Results } from '@/components/sections/results'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import BrandImage from '@/components/sections/BrandImage'

export default function Page() {
  return (
    <SmoothScroll>
      <Navbar />
      <WhatsappFloat />

      <main>
        <Hero />
        <Trust />
        
        <BrandImage />

        <Services />
        <Projects />
        <Philosophy />
        <About />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  )
}