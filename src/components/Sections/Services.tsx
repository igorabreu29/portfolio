import { Laptop, Database, Braces } from 'lucide-react'

export function Services() {
  return (
    <section id="services">
      <div className="relative w-full after:absolute after:bottom-[-0.75rem] after:h-[0.125rem] after:w-full after:bg-slate-50">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Serviços
        </h2>
      </div>

      <div className="flex h-[60vh] items-center justify-center gap-8">
        <div className="flex h-[12rem] flex-col items-start justify-center gap-2 rounded bg-blue-500 p-3 transition-colors hover:bg-blue-400">
          <span>
            <Laptop size={25} />
          </span>
          <span className="w-full text-center text-xl font-medium">
            Web Developer
          </span>
          <p className="w-[20rem] text-center">
            Desenvolvo sites responsivos com React.js, Next.js e TypeScript.
            Utilizando ferramentas CSS que facilitam o desenvolvimento.
          </p>
        </div>

        <div className="mt-20 flex h-[12rem] flex-col items-start justify-center gap-2 rounded bg-blue-500 p-3 transition-colors hover:bg-blue-400 ">
          <span>
            <Database size={25} />
          </span>
          <span className="w-full text-center text-xl font-medium">
            System Developer
          </span>
          <p className="w-[20rem] text-center">
            Desenvolvo APi’s REST completas com Node.js junto com um conjunto de
            bibliotecas do seu ecossistema.
          </p>
        </div>

        <div className="mt-12 flex h-[12rem] flex-col items-start justify-center gap-2 rounded bg-blue-500 p-3 transition-colors hover:bg-blue-400">
          <span>
            <Braces size={25} />
          </span>
          <span className="w-full text-center text-xl font-medium">
            FullStack Developer
          </span>
          <p className="w-[20rem] text-center">
            Desenvolvo sites e sistemas completos feitos com JavaScript. Através
            dessa Stack posso criar qualquer tipo de coisa.
          </p>
        </div>
      </div>
    </section>
  )
}
