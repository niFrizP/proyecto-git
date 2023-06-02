import Image from 'next/image'
import { Card } from '../../components/card';
import React from 'react'
import Link from 'next/link';
import { Eye } from 'lucide-react';




export default function Page() {
  return (
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
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="w-4 h-4" />{" "}
									</span>
								</div>

								<h2	id="featured-post"className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"></h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								</p>
								<div className="absolute bottom-4 md:bottom-8">
                  <h2>Proyecto 1</h2>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#DCE1EA] dark:invert "
                    src="/linkedin.svg"
                    alt="Next.js Logo"
                    width={120}
                    height={70}
                    priority
                  />
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
							<Card>
              <Link href={`#`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="w-4 h-4" />{" "}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
							</Card>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<div className="grid grid-cols-1 gap-4">
            <Card>
              <Link href={`#`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
					</div>
					<div className="grid grid-cols-1 gap-4">
								<Card>
                  <Link href={`#`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Eye className="w-4 h-4" />{" "}
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
								</Card>
					</div>
				</div>
			</div>
  )
}
