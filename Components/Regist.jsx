'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Regist() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        try {
            const resUserExists = await fetch('/api/userexis', { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email }),
            });
            const { user } = await resUserExists.json();
            
            if (user) {
                toast.error("User already exists.");
                return;
            }

            const res = await fetch('/api/regist', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                toast.success("Registration successful!");
                e.target.reset(); // reset form fields
                setTimeout(() => {
                    router.push('/login');
                }, 2000); // jeda 2 detik sebelum redirect
            } else {
                toast.error("Registration failed.");
            }
        } catch (error) {
            console.error("Error During Registration", error);
            toast.error("An error occurred during registration.");
        }
    };

    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mt-10 mb-20">
            <ToastContainer /> {/* Menambahkan ToastContainer untuk menampilkan notifikasi */}
            <div className="text-center">
                <Image
                    className=" w-auto mx-auto"
                    src={assets.logo}
                    alt="Apple"
                    width={200}
                    height={200}
                />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Create your account
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                        Sign In →
                    </a>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="full_name">
                        Full Name
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                            id="full_name"
                            type="text"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm border-gray-300 placeholder-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                            Terms and Conditions
                        </a>
                    </label>
                </div>

                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center border font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base bg-black text-white hover:bg-gray-800 border border-black focus:ring-black w-full justify-center"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
