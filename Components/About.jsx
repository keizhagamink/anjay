'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28 my-8'>
            <div className="py-5 px-5 md:px-12 lg:px-28 text-center my-8 ">
                <h1 className='text-3xl sm:text-5xl font-medium'>About Us</h1>
                <p className='mt-5 mx-w-[740px] m-auto text-xs sm:text-base'>ROVEBOND is committed to preserving mangrove ecosystems through innovative technology and data. </p>
            </div>

            <div className="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
                <h2 className="font-bold text-3xl text-gray-800">
                Tunda Trailblazers.
                </h2>
                <p className="text-lg leading-relaxed text-slate-500">
                    A carbon stock mapping platform providing accurate data for climate change mitigation. We combine advanced mapping technology and ecological analysis, supported by a team of experts in geospatial, ecology, and climate change fields.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-5'>
                <div className="group">
                    <div className="w-full aspect-square">
                        <Image src={assets.caa} alt='foto3'
                            sizes="(max-width: 800px) 100vw, 400px"
                            width={400}
                            height={400}
                            className="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
                        />
                    </div>

                    <div className="mt-4 text-center mb-20">
                        <h2 className="text-lg text-gray-800">Clarissa Mulya Darmawan</h2>
                        <h3 className="text-sm text-slate-500">
                            Mahasiswa Sistem Informasi Kelautan 23
                        </h3>
                    </div>
                </div>
                <div className="group">
                    <div className="w-full aspect-square">
                        <Image src={assets.zendaya} alt='foto'
                            sizes="(max-width: 800px) 100vw, 400px"
                            width={400}
                            height={400}
                            className="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
                        />
                    </div>

                    <div className="mt-4 text-center mb-20">
                        <h2 className="text-lg text-gray-800">Hilwa Nur Falah</h2>
                        <h3 className="text-sm text-slate-500">
                            Mahasiswa Sistem Informasi Kelautan 23
                        </h3>
                    </div>
                </div>

                <div className="group">
                    <div className="w-full aspect-square">
                        <Image src={assets.keizha} alt='foto1'
                            sizes="(max-width: 800px) 100vw, 400px"
                            width={400}
                            height={400}
                            className="w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square"
                        />
                    </div>

                    <div className="mt-4 text-center mb-20">
                        <h2 className="text-lg text-gray-800">Keizha Kamila</h2>
                        <h3 className="text-sm text-slate-500">
                            Mahasiswa Sistem Informasi Kelautan 23
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
