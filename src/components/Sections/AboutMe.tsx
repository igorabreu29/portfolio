import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col gap-2 ">
      <div className="w-full border-b-2">
        <h2 className="text-2xl font-semibold leading-normal tracking-wide md:text-4xl">
          Sobre mim
        </h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-4 lg:h-[60vh] lg:grid-cols-2">
        <section className="flex h-full flex-col items-center justify-center gap-2">
          <div className="w-[18rem] rounded bg-blue-600 p-3 text-xs sm:w-[34rem] sm:text-sm lg:w-auto xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className="w-[18rem] rounded bg-blue-600 p-3 text-xs sm:w-[34rem] sm:text-sm lg:w-auto xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </section>

        <section className="flex h-full items-center justify-center">
          <div className="rounded bg-blue-700 p-6">
            <Image
              src={Sky}
              alt="sky of ifpa again"
              width={350}
              className="h-[20rem] w-[18rem] lg:h-[24rem]"
            />
          </div>
        </section>
      </div>
    </section>
  )
}
