import { Hero } from '@/components/Sections/Hero'
import { AboutMe } from '@/components/Sections/AboutMe'
import { Portflio } from '@/components/Sections/Portfolio'
import { Services } from '@/components/Sections/Services'
import { Contacts } from '@/components/Sections/Contacts'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 xl:px-20">
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
