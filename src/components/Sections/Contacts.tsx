export function Contacts() {
  return (
    <section id="contacts">
      <div className="relative w-full after:absolute after:bottom-[-0.75rem] after:h-[0.125rem] after:w-full after:bg-slate-50">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Contatos
        </h2>
      </div>

      <div className="flex min-h-[90vh] items-center justify-center">
        <section className="flex h-[65vh] w-full items-center justify-center rounded">
          <form className="flex h-full w-[28rem] flex-col items-start gap-2 rounded bg-blue-500 p-4">
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

          <div className="flex h-full w-[18vw] flex-col items-center justify-center gap-8 rounded bg-zinc-950">
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-xl text-emerald-500">E-mail para contato</h3>
              <ul className="flex w-full justify-center">
                <li className="ml-4 list-disc text-sm">
                  igor29nahan@gmail.com
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-xl text-emerald-500">Número para contato</h3>
              <ul className="flex w-full justify-center">
                <li className="ml-4 list-disc text-sm">(91) 999671491</li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="text-xl text-emerald-500">Redes Sociais</h3>
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
