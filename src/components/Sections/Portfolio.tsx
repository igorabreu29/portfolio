import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function Portflio() {
  return (
    <section id="portfolio" className="flex flex-col gap-4">
      <div className="w-full border-b-2">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Portfólio
        </h2>
      </div>

      <div className="grid min-h-[90vh] grid-cols-1 gap-4 py-6 lg:grid-cols-2 lg:items-center lg:justify-center xl:grid-cols-3">
        <div className="group flex flex-col items-center justify-start gap-2">
          <div className="flex flex-col gap-2 overflow-hidden rounded bg-blue-700 bg-transparent p-3 transition-all lg:bg-transparent lg:group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[10rem] w-[18rem] rounded object-cover md:h-[14rem] xl:h-[16rem]"
            />
            <p className="m-auto w-[18rem] text-center text-xs transition-all md:w-[22rem] md:text-sm lg:translate-y-[150%] lg:group-hover:translate-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col gap-2 overflow-hidden rounded bg-blue-700 bg-transparent p-3 transition-all lg:bg-transparent lg:group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[10rem] w-[18rem] rounded object-cover md:h-[14rem] xl:h-[16rem]"
            />
            <p className="m-auto w-[18rem] text-center text-xs transition-all md:w-[22rem] md:text-sm lg:translate-y-[150%] lg:group-hover:translate-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center justify-end gap-2">
          <div className="flex flex-col gap-2 overflow-hidden rounded bg-blue-700 bg-transparent p-3 transition-all lg:bg-transparent lg:group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[10rem] w-[18rem] rounded object-cover md:h-[14rem] xl:h-[16rem]"
            />
            <p className="m-auto w-[18rem] text-center text-xs transition-all md:w-[22rem] md:text-sm lg:translate-y-[150%] lg:group-hover:translate-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
