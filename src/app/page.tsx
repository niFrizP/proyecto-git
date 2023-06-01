import Image from 'next/image'
import Link from "next/link";
import React from 'react'
import Particles from './components/particles'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid place-items-center">
          <nav aria-label="Main" data-aria-orientation="horizontal" dir="ltr" className='relative z-10 flex flex-1 items-center justify-center rounded-full bg-[#FFFFF] py-2 px-2 shadow-3xl'>
            <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center rounded-lg gap-3" dir="ltr">
              <li>
                <a
                  id="radix-:r2:-trigger-radix-:r3:"
                  href="/proyectos" // Reemplaza con la URL de la página de proyectos
                  data-state="closed"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-[#383434] disabled:opacity-50 outline-0 disabled:pointer-events-none bg-transparent data-[state=open]:bg-transparent h-10 py-2 px-4 group w-max focus:ring-0 focus:ring-[#DCE1EA] focus:outline-0 group"
                  data-radix-collection-item=""
                  >
                  Proyectos
                    <path
                      fill="currentColor"
                      d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>

                </a>
              </li>
              <li>
              <a
                  id="radix-:r2:-trigger-radix-:r3:"
                  href="/contacto" // Reemplaza con la URL de la página de proyectos
                  data-state="closed"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors hover:bg-[#383434] disabled:opacity-50 outline-0 disabled:pointer-events-none bg-transparent data-[state=open]:bg-transparent h-10 py-2 px-4 group w-max focus:ring-0 focus:ring-[#DCE1EA] focus:outline-0 group"
                  data-radix-collection-item=""
                  >
                  Contacto
                    <path
                      fill="currentColor"
                      d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>

                </a>
              </li>
            </ul>
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
          <h2 className="text-sm text-zinc-500 ">
            Hola!, Bienvenid@ a nuestro portafolio
          </h2>
        </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
      </div>
    </main>
  )
}
