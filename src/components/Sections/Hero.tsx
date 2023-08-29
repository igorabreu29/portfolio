import {
  Braces,
  Code2,
  Home,
  UserCircle,
  FolderDot,
  Briefcase,
  Contact,
} from 'lucide-react'

import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function Hero() {
  return (
    <section
      id="hero"
      className="grid h-[90vh] grid-cols-2 items-center overflow-x-hidden"
    >
      <section className="flex flex-col items-center justify-center gap-14">
        <h1 className="relative w-full text-center text-3xl font-bold before:absolute before:left-28 before:top-[-1.75rem] before:h-[0.20rem] before:w-36 before:bg-zinc-500 after:absolute after:bottom-[-1.75rem] after:right-28 after:h-[0.20rem] after:w-36 after:bg-zinc-500 lg:text-5xl">
          Igor Abreu
        </h1>

        <div className="flex flex-col gap-4">
          <p className="w-[24rem] text-center text-sm md:w-[28rem] lg:text-base">
            Olá, meu nome é Igor. Sou um{' '}
            <span className="text-emerald-500">desenvolvedor FullStack</span> e
            desenvolvo minhas aplicações com as tecnologias mais atuais do
            mercado.
          </p>
          <div className="flex gap-2">
            <Braces size={20} />
            <Code2 size={20} />
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center gap-4 md:justify-end">
        <Image
          src={Sky}
          alt="sky of ifpa"
          width={450}
          className="rounded border-4 md:h-[380px] md:w-[300px] lg:h-[420px] lg:w-[360px]"
        />
        <div className="fixed bottom-12 right-16 z-50 mt-auto flex flex-col items-center justify-center gap-2">
          <a href="#hero" className="group">
            <div className="flex w-[9.25rem] items-center justify-end gap-1 overflow-hidden rounded-full transition-all group-hover:bg-zinc-950">
              <p className="invisible translate-x-[180%] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                Home
              </p>
              <Home
                size={25}
                className="mr-[50px] transition-all group-hover:mr-0"
              />
            </div>
          </a>
          <a href="#about-me" className="group">
            <div className="flex w-[9.25rem] items-center justify-end gap-1 overflow-hidden rounded-full transition-all group-hover:bg-zinc-950">
              <p className="invisible translate-x-[180%] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                Sobre
              </p>
              <UserCircle
                size={25}
                className="mr-[50px] transition-all group-hover:mr-0"
              />
            </div>
          </a>
          <a href="#portfolio" className="group">
            <div className="flex w-[9.25rem] items-center justify-end gap-1 overflow-hidden rounded-full transition-all group-hover:bg-zinc-950">
              <p className="invisible translate-x-[180%] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                Portfólio
              </p>
              <FolderDot
                size={25}
                className="mr-[50px] transition-all group-hover:mr-0"
              />
            </div>
          </a>
          <a href="#services" className="group">
            <div className="flex w-[9.25rem] items-center justify-end gap-1 overflow-hidden rounded-full transition-all group-hover:bg-zinc-950">
              <p className="invisible translate-x-[180%] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                Serviços
              </p>
              <Briefcase
                size={25}
                className="mr-[50px] transition-all group-hover:mr-0"
              />
            </div>
          </a>
          <a href="#contacts" className="group">
            <div className="flex w-[9.25rem] items-center justify-end gap-1 overflow-hidden rounded-full transition-all group-hover:bg-zinc-950">
              <p className="invisible translate-x-[180%] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                Contatos
              </p>
              <Contact
                size={25}
                className="mr-[50px] transition-all group-hover:mr-0"
              />
            </div>
          </a>
        </div>
      </section>
    </section>
  )
}
