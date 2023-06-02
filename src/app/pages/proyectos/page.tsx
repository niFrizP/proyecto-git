import Image from 'next/image'
import React from 'react'
import Particles from '../../components/particles'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid place-items-center">
          <nav aria-label="Main" data-aria-orientation="horizontal" dir="ltr" className='relative z-10 flex flex-1 items-center justify-center rounded-full bg-[#FFFFF] py-2 px-2 shadow-3xl'>            
          </nav>
        </div>
      </div>
        <div className="my-16 text-center animate-fade-in">

          <h2>Proyectos
          </h2>
        </div>
          

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
      </div>
    </main>
  )
}
