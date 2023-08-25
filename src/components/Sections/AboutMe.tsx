import Image from "next/image";
import Sky from '../../assets/sky.png'

export function AboutMe() {
    return (
        <section id="about-me">
            <div className='w-full relative after:absolute after:w-full after:h-[0.125rem] after:bottom-[-0.75rem] after:bg-slate-50'>
                <h2 className='text-4xl font-semibold leading-normal tracking-wide'>Sobre mim</h2>
            </div>

            <div className='min-h-[90vh] grid grid-cols-2 items-center'>
                <section className='flex flex-col gap-6'>
                    <div className='bg-blue-600 p-4 rounded'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>

                    <div className='bg-blue-600 p-4 rounded'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </section>

                <section className='flex items-center justify-center'>
                    <Image src={Sky} alt='sky of ifpa again' width={350} className='h-[30rem]' />
                </section>
            </div>
        </section>
    )
}