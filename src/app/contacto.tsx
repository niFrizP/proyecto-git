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
          </nav>
        </div>
      </div>
      
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
          src="/linkedin.svg"
          alt="Next.js Logo"
          width={300}
          height={148}
          priority
        />      
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Links:
          </h2>
        </div>
        <div className="text-center animate-fade-in">
        <a
          id="radix-:r2:-trigger-radix-:r3:"
          href="https://www.linkedin.com/in/davidnovafuentes/" // Reemplaza con la URL de linkedin
          >
          <h2 className="text-sm text-zinc-500 ">
            David Nova
          </h2>
          </a>
        </div>
        <div className="text-center animate-fade-in">
        <a
          id="radix-:r2:-trigger-radix-:r3:"
          href="#" // Reemplaza con la URL de linkedin
          >
          <h2 className="text-sm text-zinc-500 ">
            Nicolas Friz
          </h2>
          </a>
        </div>
        <div className="text-center animate-fade-in">
        <a
          id="radix-:r2:-trigger-radix-:r3:"
          href="#" // Reemplaza con la URL de linkedin
          >
          <h2 className="text-sm text-zinc-500 ">
            Sofia Gomez
          </h2>
          </a>
        </div>
        <div className="text-center animate-fade-in">
        <a
          id="radix-:r2:-trigger-radix-:r3:"
          href="#" // Reemplaza con la URL de linkedin
          >
          <h2 className="text-sm text-zinc-500 ">
            Juan Espinoza
          </h2>
          </a>
        </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
      </div>
    </main>
  )
}
