import Image from 'next/image'
import Sky from '../../assets/sky.png'

export function Portflio() {
  return (
    <section id="portfolio">
      <div className="relative w-full after:absolute after:bottom-[-0.75rem] after:h-[0.125rem] after:w-full after:bg-slate-50">
        <h2 className="text-4xl font-semibold leading-normal tracking-wide">
          Portfólio
        </h2>
      </div>

      <div className="grid min-h-[90vh] grid-cols-3 py-6">
        <div className="group flex flex-col items-center justify-start gap-2">
          <div className="relative flex flex-col gap-2 overflow-hidden rounded bg-transparent p-3 transition-all group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[16rem] rounded"
            />
            <p className="w-[22rem] translate-y-[150%] text-sm transition-all group-hover:translate-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center justify-center gap-2">
          <div className="relative flex flex-col gap-2 overflow-hidden rounded bg-transparent p-3 transition-all group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[16rem] rounded"
            />
            <p className="w-[22rem] translate-y-[150%] text-sm transition-all group-hover:translate-y-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>

        <div className="group flex flex-col items-center justify-end gap-2">
          <div className="relative flex flex-col gap-2 overflow-hidden rounded bg-transparent p-3 transition-all group-hover:bg-blue-700">
            <Image
              src={Sky}
              alt="sky image1"
              width={350}
              className="h-[16rem] rounded"
            />
            <p className="w-[22rem] translate-y-[150%] text-sm transition-all group-hover:translate-y-0">
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
