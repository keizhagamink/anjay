'use client';
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const handleLogout = async () => {
        try {
            await signOut({ redirect: false });
            toast.success("Logout successful!");
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        } catch (error) {
            toast.error("An error occurred during logout.");
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col bg-slate-100'>
            <div className="px-2 sm:pl-14 py-3 border border-black">
                <Link href={`/admin`}>
                    <Image src={assets.logo} width={120} alt='' />
                </Link>
            </div>
            <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
                <div className="w-[50%] sm:w-[80%] absolute right-0 ">

                    <Link href={`/admin/addMap`} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
                        <Image src={assets.add_icon} alt='' width={28} /><p>Add Map</p>
                    </Link>

                    <Link href={`/admin/mapsList`} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
                        <Image src={assets.blog_icon} alt='' width={28} /><p>Maps List</p>
                    </Link>

                    <Link href={`/admin/addProduct`} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
                        <Image src={assets.add_icon} alt='' width={28} /><p>Add Blogs</p>
                    </Link>

                    <Link href={`/admin/blogList`} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
                        <Image src={assets.blog_icon} alt='' width={28} /><p>Blogs List</p>
                    </Link>

                    <button onClick={handleLogout} className="flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px#000000]">
                        <Image src={assets.email_icon} alt='' width={28} /><p>Logout</p>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Sidebar;
