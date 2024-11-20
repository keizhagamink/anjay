'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const AdminDashboard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) setGreeting("Selamat Pagi");
        else if (hours < 18) setGreeting("Selamat Siang");
        else setGreeting("Selamat Malam");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center">
                    {greeting}, {session?.user?.name || "Admin"}!
                </h1>
                <p className="mt-4 text-lg text-center">
                    Selamat datang di panel Admin. Di sini Anda dapat mengelola berita dan peta yang tersedia di sistem.
                </p>
                
                {/* Grid of Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {/* List Berita */}
                    <div 
                        onClick={() => router.push('/admin/blogList')}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold">List Berita</h2>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Lihat dan kelola daftar berita yang telah diposting.</p>
                    </div>

                    {/* Upload Berita */}
                    <div 
                        onClick={() => router.push('/admin/addProduct')}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold">Upload Berita</h2>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Tambahkan berita baru ke sistem.</p>
                    </div>

                    {/* List Map */}
                    <div 
                        onClick={() => router.push('/admin/mapsList')}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold">List Map</h2>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Lihat dan kelola daftar peta yang tersedia.</p>
                    </div>

                    {/* Upload Map */}
                    <div 
                        onClick={() => router.push('/admin/addMap')}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold">Upload Map</h2>
                        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Tambahkan peta baru ke sistem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
