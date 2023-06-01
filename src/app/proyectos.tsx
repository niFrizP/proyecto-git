import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import Particles from './components/particles'

export default function Proyectos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid place-items-center">
          <nav aria-label="Main" data-aria-orientation="horizontal" dir="ltr" className='relative z-10 flex flex-1 items-center justify-center rounded-full bg-[#FFFFF] py-2 px-2 shadow-3xl'>
          </nav>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert"
          src="/devs.svg"
          alt="Next.js Logo"
          width={720}
          height={148}
          priority
        />
      </div>
      
        <div className="my-16 text-center animate-fade-in">
          <h1 className="text-sm font-medium">
            Portafolios:
          </h1>
        </div>

        <div className='text-center animate-fade-in' >
        <ul>
          <li>
            <Link href="https://www.google.com">
              <a className="text-sm text-zinc-500">Nicolás Friz</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/sofiagomezm/AsistApp2">
            <a className="text-sm text-zinc-500">Sofía Gómez</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.google.com">
            <a className="text-sm text-zinc-500">David Nova</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.google.com">
            <a className="text-sm text-zinc-500">Juan Espinoza</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
      </div>
    </main>
  )
}