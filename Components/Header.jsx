import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='grid'>
      <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo Section */}
          <Link href={`/`}>
            <Image
              src={assets.logo}
              width={180}
              alt=''
              className='w-[130px] sm:w-auto'
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href={`/`}
              className='font-medium py-1 px-3 sm:py-3 sm:px-6 hover:shadow-[2px_2px_0px_#000000]'
            >
              Home
            </Link>
            <Link
              href={`/blogs`}
              className='font-medium py-1 px-3 sm:py-3 sm:px-6 hover:shadow-[2px_2px_0px_#000000]'
            >
              Blog
            </Link>
            <Link
              href={`/maps`}
              className='font-medium py-1 px-3 sm:py-3 sm:px-6 hover:shadow-[2px_2px_0px_#000000]'
            >
              Carbon
            </Link>
            <Link
              href={`/about`}
              className='font-medium py-1 px-3 sm:py-3 sm:px-6 hover:shadow-[2px_2px_0px_#000000]'
            >
              About
            </Link>
            <Link
              href={`/contact`}
              className='font-medium py-1 px-3 sm:py-3 sm:px-6 hover:shadow-[2px_2px_0px_#000000]'
            >
              Contact Us
            </Link>
          </div>

          {/* Sign Up and Login Section */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 w-full sm:w-auto">
            <Link
              href={`/signup`}
              className='flex items-center justify-center font-medium py-2 px-4 sm:py-3 sm:px-6 border border-solid border-black w-full sm:w-auto text-center'
            >
              Sign Up
            </Link>
            <Link
              href={`/login`}
              className='flex items-center justify-center font-medium py-2 px-4 sm:py-3 sm:px-6 border border-solid border-black hover:shadow-[-7px_7px_0px_#000000] w-full sm:w-auto text-center'
            >
              Login
              <Image src={assets.arrow} alt='Arrow Icon' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
