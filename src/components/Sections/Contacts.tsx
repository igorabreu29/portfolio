export function Contacts() {
  return (
    <section id="contacts" className="flex flex-col gap-4">
      <div className="w-full border-b-2">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Contatos
        </h2>
      </div>

      <div className="flex items-center justify-center lg:min-h-[90vh]">
        <section className="flex w-full flex-col items-center justify-center gap-2 rounded lg:min-h-[65vh] lg:flex-row lg:gap-0">
          <form className="flex h-full w-[18rem] flex-col items-start gap-2 rounded bg-blue-500 p-4 sm:w-[24rem] lg:w-[28rem]">
            <h3 className="text-2xl">Se contate comigo!</h3>

            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label htmlFor="name" className="text-xs text-gray-400">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                className="h-8 w-full rounded border bg-transparent px-2 outline-none"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label htmlFor="email" className="text-xs text-gray-400">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="h-8 w-full rounded border bg-transparent px-2 outline-none"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label htmlFor="message" className="text-xs text-gray-400">
                Mensagem:
              </label>
              <textarea
                id="message"
                className="h-56 w-full rounded border bg-transparent p-2"
              />
            </div>
          </form>

          <div className="flex w-full flex-col items-center justify-center gap-8 rounded bg-zinc-950 p-4 lg:h-[68vh] lg:w-auto">
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-lg text-emerald-500 lg:text-xl">
                E-mail para contato
              </h3>
              <ul className="flex w-full justify-center">
                <li className="ml-4 list-disc text-sm">
                  igor29nahan@gmail.com
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-lg text-emerald-500 lg:text-xl">
                Número para contato
              </h3>
              <ul className="flex w-full justify-center">
                <li className="ml-4 list-disc text-sm">(91) 999671491</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-lg text-emerald-500 lg:text-xl">
                Redes Sociais
              </h3>
              <ul className="flex w-full justify-center">
                <li className="ml-4 list-disc text-sm">
                  igor29nahan@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
