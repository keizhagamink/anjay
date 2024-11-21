'use client';

import { assets } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                const response = await axios.get('/api/map', {
                    params: {
                        id: params.id,
                    },
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMapData();
    }, [params.id]); // params.id digunakan sebagai dependency

    return data ? (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className="flex justify-between items-center">
                    <Link href={'/'}>
                        <Image
                            src={assets.logo}
                            width={180}
                            alt='Logo'
                            className='w-[130px] sm:w-auto'
                        />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                        Get Started <Image src={assets.arrow} alt='Arrow' />
                    </button>
                </div>
                <div className="text-center my-24">
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
                        {data.judul}
                    </h1>
                    <Image
                        className='mx-auto mt-6 border border-white rounded-full'
                        src={data.fotopenulis}
                        width={60}
                        height={60}
                        alt='Penulis'
                    />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.penulis}</p>
                </div>
            </div>
            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
                <Image
                    className='border-4 border-white'
                    src={data.gambar}
                    width={1280}
                    height={720}
                    alt='Gambar Artikel'
                />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
                <p>{data.deskripsi}</p>


                <div className="my-24">
                    <p className='text-black font font-semibold my-4'>Share This Article On Social Media</p>
                    <div className="flex">
                        <Image src={assets.facebook_icon} width={50} alt='Facebook' />
                        <Image src={assets.twitter_icon} width={50} alt='Twitter' />
                        <Image src={assets.googleplus_icon} width={50} alt='Google Plus' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : (
        <></>
    );
};

export default Page;