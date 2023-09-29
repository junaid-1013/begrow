import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import OurTeam from '@/components/OurTeam'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <OurTeam/>
      <Services/>
    </>
  )
}
