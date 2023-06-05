import Image from 'next/image'
import { Card } from '../../components/card';
import React from 'react'
import Link from 'next/link';




export default function Page() {
	return (
		<><header>
			<div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/0 border-transparent">
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<a className="duration-200 text-zinc-400 hover:text-zinc-100" href="/pages/proyectos">Proyectos</a>
						<a className="duration-200 text-zinc-400 hover:text-zinc-100" href="/pages/contacto">Contacto</a>
					</div>
					<a className="duration-200 text-zinc-300 hover:text-zinc-100" href="/">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 ">
							<line x1="19" x2="5" y1="12" y2="12"></line>
							<polyline points="12 19 5 12 12 5"></polyline>
						</svg>
					</a>
				</div>
			</div>
		</header>
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl xl-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Proyectos
					</h2>
					<p className="mt-4 text-zinc-400">
						Algunos proyectos realizados anteriormente
					</p>
				</div>
				<div className="w-full l-px bg-zinc-800" />

				<div className="grid grid-col-auto gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`https://github.com/niFrizP/nextjs-portfolio-pageview-counter/blob/main/app/projects/page.tsx`}>
							<div className='relative w-full h-full p-4 md:p-10'>
								<h2 id="featured-post" className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Proyecto 1</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.</p>
								<Image
									className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
									src="/linkedin.svg"
									alt="Next.js Logo"
									width={120}
									height={70}
									priority />
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">Read more <span aria-hidden="true">→</span>
									</p>
								</div>
							</div>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						<Card>
							<Link href={`https://github.com/niFrizP/nextjs-portfolio-pageview-counter/blob/main/app/projects/page.tsx`}>
								<div className='relative w-full h-full p-4 md:p-10'>
									<h2 id="featured-post" className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Proyecto 1</h2>
									<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.</p>
									<p></p>
									<Image
										className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
										src="/linkedin.svg"
										alt="Next.js Logo"
										width={120}
										height={70}
										priority />
									<p></p>
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">Read more <span aria-hidden="true">→</span>
										</p>
									</div>
								</div>
							</Link>
						</Card>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2  ">
					<div className="grid grid-cols-1 gap-4">
						<Card>
							<Link href={`https://github.com/niFrizP/nextjs-portfolio-pageview-counter/blob/main/app/projects/page.tsx`}>
								<div className='relative w-full h-full p-4 md:p-10'>
									<h2 id="featured-post" className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Proyecto 1</h2>
									<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.</p>
									<p></p>
									<Image
										className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
										src="/linkedin.svg"
										alt="Next.js Logo"
										width={120}
										height={70}
										priority />
									<p></p>
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">Read more <span aria-hidden="true">→</span>
										</p>
									</div>
								</div>
							</Link>
						</Card>

						<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
							<Card>
								<Link href={`https://github.com/niFrizP/nextjs-portfolio-pageview-counter/blob/main/app/projects/page.tsx`}>
									<div className='relative w-full h-full p-4 md:p-10'>
										<h2 id="featured-post" className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">Proyecto 1</h2>
										<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">I'm building a SAAS providing global latency monitoring for your APIs and websites from edge locations around the world. Have you ever wondered how fast your API is in any part of the world? Planetfall allows you to find out and monitor it continuously.</p>
										<p></p>
										<Image
											className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
											src="/linkedin.svg"
											alt="Next.js Logo"
											width={120}
											height={70}
											priority />
										<p></p>
										<div className="absolute bottom-4 md:bottom-8">
											<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">Read more <span aria-hidden="true">→</span>
											</p>
										</div>
									</div>
								</Link>
							</Card>
						</div>
					</div>
				</div>
			</div></>
	)
}
