import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col gap-4">
      <div className="w-full border-b-2">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Sobre mim
        </h2>
      </div>

      <div className="grid min-h-[90vh] grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <section className="flex flex-col items-center justify-center gap-2">
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

        <section className="flex items-center justify-center">
          <Image
            src={Sky}
            alt="sky of ifpa again"
            width={350}
            className="h-[20rem] w-[18rem] lg:h-[25rem]"
          />
        </section>
      </div>
    </section>
  )
}
