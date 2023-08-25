export function Contacts() {
    return (
        <section id="contacts">
            <div className='w-full relative after:absolute after:w-full after:h-[0.125rem] after:bottom-[-0.75rem] after:bg-slate-50'>
                <h2 className='text-4xl font-semibold leading-normal tracking-wide'>Contatos</h2>
            </div>
            
            <div className="min-h-[90vh] flex items-center justify-center">
                <section className="min-h-[70vh] w-[40vw] rounded flex items-center justify-center">
                    <form className="flex flex-col items-start gap-2 h-full w-[22rem] bg-blue-500 p-4 rounded">
                        <h3 className="text-2xl">Se contate comigo!</h3>

                        <div className="flex flex-col items-start justify-center gap-1 w-full">
                            <label htmlFor="name" className="text-xs text-gray-400">Nome:</label>
                            <input type="text" id="name" className="w-full rounded outline-none bg-transparent border px-2 h-8" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-1 w-full">
                            <label htmlFor="email" className="text-xs text-gray-400">E-mail</label>
                            <input type="text" id="email" className="w-full rounded outline-none bg-transparent border px-2 h-8" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-1 w-full">
                            <label htmlFor="message" className="text-xs text-gray-400">Mensagem:</label>
                            <textarea id="message" className="rounded bg-transparent w-full h-56 p-2 border" />
                        </div>
                    </form>

                    <div className="flex flex-col items-center justify-center gap-8 h-[51.5vh] w-[18vw] rounded bg-zinc-950">
                        <div className="flex flex-col items-start justify-center gap-1">
                            <h3 className="text-emerald-500 text-xl">E-mail para contato</h3>
                            <ul className="flex justify-center w-full">
                                <li className="text-sm list-disc ml-4">igor29nahan@gmail.com</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-1">
                            <h3 className="text-emerald-500 text-xl">Número para contato</h3>
                            <ul className="flex justify-center w-full">
                                <li className="text-sm list-disc ml-4">(91) 999671491</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-start justify-center gap-1">
                            <h3 className="text-emerald-500 text-xl">Redes Sociais</h3>
                            <ul className="flex justify-center w-full">
                                <li className="text-sm list-disc ml-4">igor29nahan@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}