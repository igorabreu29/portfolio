import Image from "next/image";
import Sky from '../../assets/sky.png'

export function Portflio() {
    return (
        <section id="portfolio">
            <div className='w-full relative after:absolute after:w-full after:h-[0.125rem] after:bottom-[-0.75rem] after:bg-slate-50'>
                <h2 className='text-4xl font-semibold leading-normal tracking-wide'>Portfólio</h2>
            </div>

            <div className='min-h-[90vh] grid grid-cols-3 py-6'>
                <div className='flex items-center justify-start flex-col gap-2 group'>
                    <div className='relative flex flex-col gap-2 rounded bg-transparent p-3 overflow-hidden transition-all group-hover:bg-blue-700'>
                        <Image src={Sky} alt="sky image1" width={350} className="h-[16rem] rounded" />
                        <p className='w-[22rem] translate-y-[150%] group-hover:translate-y-0 transition-all text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center flex-col gap-2 group'>
                    <div className='relative flex flex-col gap-2 rounded bg-transparent p-3 overflow-hidden transition-all group-hover:bg-blue-700'>
                        <Image src={Sky} alt="sky image1" width={350} className="h-[16rem] rounded" />
                        <p className='w-[22rem] translate-y-[150%] group-hover:translate-y-0 transition-all text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        </p>
                    </div>
                </div>
                
                <div className='flex items-center justify-end flex-col gap-2 group'>
                    <div className='relative flex flex-col gap-2 rounded bg-transparent p-3 overflow-hidden transition-all group-hover:bg-blue-700'>
                        <Image src={Sky} alt="sky image1" width={350} className="h-[16rem] rounded" />
                        <p className='w-[22rem] translate-y-[150%] group-hover:translate-y-0 transition-all text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        </p>
                    </div>
                </div>
            </div>
      </section>
    )
}