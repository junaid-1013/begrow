import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import OurTeam from '@/components/OurTeam'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <OurTeam/>
    </>
  )
}
