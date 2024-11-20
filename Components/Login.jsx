'use client'
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                toast.error("Username or Password Wrong");
                return;
            }

            toast.success("Login successful!");
            setTimeout(() => {
                router.replace("/admin");
            }, 2000);
        } catch (error) {
            console.error(error);
            toast.error("An error occurred during login.");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mt-10 mb-20">
                <div className="text-center">
                    <Image
                        className=" w-auto mx-auto"
                        src={assets.logo}
                        alt="Apple"
                        width={200}
                        height={200}
                    />
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Don&apos;t have an account?
                        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                            Sign Up →
                        </a>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
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
                                autoFocus
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

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="inline-flex items-center border font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base bg-black text-white hover:bg-gray-800 border border-black focus:ring-black w-full justify-center"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
