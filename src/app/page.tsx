import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import OurTeam from '@/components/OurTeam'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import { Blogs } from '@/components/Blogs'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurTeam />
      <Services />
      <Blogs/>
      <Contact />
      <Footer/>
    </>
  )
}
