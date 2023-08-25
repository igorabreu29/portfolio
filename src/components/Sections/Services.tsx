import { Laptop, Database, Braces } from 'lucide-react'

export function Services() {
    return (
      <section id="services">
        <div className='w-full relative after:absolute after:w-full after:h-[0.125rem] after:bottom-[-0.75rem] after:bg-slate-50'>
          <h2 className='text-4xl font-semibold leading-normal tracking-wide'>Serviços</h2>
        </div>

        <div className="min-h-[90vh] flex items-center justify-center gap-8">
          <div className="flex flex-col items-start justify-center gap-2 bg-blue-500 rounded p-3">
            <span>
              <Laptop size={25} />
            </span>
            <span className='text-center text-xl font-medium w-full'>
              Web Developer
            </span>
            <p className='w-[20rem] text-center'>
              Desenvolvo sites responsivos com React.js, Next.js e TypeScript. Utilizando ferramentas CSS que facilitam o desenvolvimento.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 mt-96 bg-blue-500 rounded p-3">
            <span>
              <Database size={25} />
            </span>
            <span className='text-center text-xl font-medium w-full'>
              System Developer
            </span>
            <p className='w-[20rem] text-center'>
              Desenvolvo APi’s REST completas com Node.js junto com um conjunto de bibliotecas do seu ecossistema.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-2 mt-20 bg-blue-500 rounded p-3">
            <span>
              <Braces size={25} />
            </span>
            <span className='text-center text-xl font-medium w-full'>
              FullStack Developer
            </span>
            <p className='w-[20rem] text-center'>
              Desenvolvo sites e sistemas completos feitos com JavaScript. Através dessa Stack posso criar qualquer tipo de coisa.
            </p>
          </div>
        </div>
      </section>
    )
}