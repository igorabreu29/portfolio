import { Braces, Code2, Home, UserCircle, FolderDot, Briefcase, Contact } from 'lucide-react'

import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function Hero() {
    return (
        <section id='hero' className="h-[90vh] grid grid-cols-2 items-center">
            <section className="flex flex-col items-center justify-center gap-14">
                <h1 className="text-5xl font-bold w-full relative text-center before:absolute before:left-28 before:top-[-1.75rem] before:w-36 before:h-[0.20rem] before:bg-zinc-500 after:absolute after:right-28 after:bottom-[-1.75rem] after:w-36 after:h-[0.20rem] after:bg-zinc-500">
                    Igor Abreu
                </h1>
            
                <div className='flex flex-col gap-4'>
                    <p className="w-[35rem] text-center text-lg">
                        Olá, meu nome é Igor. Sou um <span className="text-emerald-500">desenvolvedor FullStack</span> e desenvolvo minhas aplicações com as tecnologias mais atuais do mercado.
                    </p>
                    <div className='flex gap-2'>
                        <Braces size={16} />
                        <Code2 size={16} />
                    </div>
                </div>
            </section>
            
            <section className='relative flex items-center justify-center gap-4'>
                <Image src={Sky} alt="sky of ifpa" width={450} className='border-4 rounded' />
                <div className='mt-auto flex flex-col items-center justify-center gap-2 fixed right-16 bottom-12 z-50'>
                    <a href="#hero" className='group'>
                        <div className='flex items-center justify-end gap-1 w-[9.25rem] overflow-hidden group-hover:bg-zinc-950 transition-all rounded-full'>
                            <p className='translate-x-[180%] invisible opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 transition-all'>Home</p>
                            <Home size={25} className='mr-[50px] group-hover:mr-0 transition-all' />
                        </div>
                    </a>
                    <a href="#about-me" className='group'>
                        <div className='flex items-center justify-end gap-1 w-[9.25rem] overflow-hidden group-hover:bg-zinc-950 transition-all rounded-full'>
                            <p className='translate-x-[180%] invisible opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 transition-all'>Sobre</p>
                            <UserCircle size={25} className='mr-[50px] group-hover:mr-0 transition-all' />
                        </div>
                    </a>
                    <a href="#portfolio" className='group'>
                        <div className='flex items-center justify-end gap-1 w-[9.25rem] overflow-hidden group-hover:bg-zinc-950 transition-all rounded-full'>
                            <p className='translate-x-[180%] invisible opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 transition-all'>Portfólio</p>
                            <FolderDot size={25} className='mr-[50px] group-hover:mr-0 transition-all' />
                        </div>
                    </a>
                    <a href="#services" className='group'>
                        <div className='flex items-center justify-end gap-1 w-[9.25rem] overflow-hidden group-hover:bg-zinc-950 transition-all rounded-full'>
                            <p className='translate-x-[180%] invisible opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 transition-all'>Serviços</p>
                            <Briefcase size={25} className='mr-[50px] group-hover:mr-0 transition-all' />
                        </div>
                    </a>
                    <a href="#contacts" className='group'>
                        <div className='flex items-center justify-end gap-1 w-[9.25rem] overflow-hidden group-hover:bg-zinc-950 transition-all rounded-full'>
                            <p className='translate-x-[180%] invisible opacity-0 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 transition-all'>Contatos</p>
                            <Contact size={25} className='mr-[50px] group-hover:mr-0 transition-all' />   
                        </div>
                    </a>
                </div>
            </section>
      </section>
    )
}