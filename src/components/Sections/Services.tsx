import { Laptop, Database, Braces } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="flex flex-col gap-8">
      <div className="w-full border-b-2">
        <h2 className="text-2xl font-semibold leading-normal tracking-wide md:text-4xl">
          Serviços
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 xl:h-[40vh] xl:flex-row xl:gap-8">
        <div className="flex flex-col items-start justify-center gap-2 rounded bg-blue-500 p-2 transition-colors hover:bg-blue-400 md:h-[12rem] md:p-3">
          <span>
            <Laptop size={25} />
          </span>
          <span className="w-full text-center text-lg font-medium md:text-xl">
            Web Developer
          </span>
          <p className="w-[16rem] text-center text-xs sm:w-[20rem] sm:text-sm md:text-base">
            Desenvolvo sites responsivos com React.js, Next.js e TypeScript.
            Utilizando ferramentas CSS que facilitam o desenvolvimento.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 rounded bg-blue-500 p-2 transition-colors hover:bg-blue-400 md:h-[12rem] md:p-3">
          <span>
            <Database size={25} />
          </span>
          <span className="w-full text-center text-xl font-medium">
            System Developer
          </span>
          <p className="w-[16rem] text-center text-xs sm:w-[20rem] sm:text-sm md:text-base">
            Desenvolvo APi’s REST completas com Node.js junto com um conjunto de
            bibliotecas do seu ecossistema.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 rounded bg-blue-500 p-2 transition-colors hover:bg-blue-400 md:h-[12rem] md:p-3">
          <span>
            <Braces size={25} />
          </span>
          <span className="w-full text-center text-xl font-medium">
            FullStack Developer
          </span>
          <p className="w-[16rem] text-center text-xs sm:w-[20rem] sm:text-sm md:text-base">
            Desenvolvo sites e sistemas completos feitos com JavaScript. Através
            dessa Stack posso criar qualquer tipo de coisa.
          </p>
        </div>
      </div>
    </section>
  )
}
