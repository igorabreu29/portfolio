import { Hero } from '@/components/Sections/Hero'
import { AboutMe } from '@/components/Sections/AboutMe'
import { Portflio } from '@/components/Sections/Portfolio'
import { Services } from '@/components/Sections/Services'
import { Contacts } from '@/components/Sections/Contacts'

export default function Home() {
  return (
    <main className="px-20 min-h-screen flex flex-col gap-4">
      <Hero />

      {/* About me section */}
      <AboutMe />

      {/* Portfolio section */}
      <Portflio />

      {/* Services section */}
      <Services />

      {/* Contacts section */}
      <Contacts />
    </main>
  )
}
