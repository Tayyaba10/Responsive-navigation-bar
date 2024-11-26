'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
 const [navbar,setNavbar] = useState(false);
  return (
    <div>
      <nav className='w-full bg-fuchsia-600 fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 '>
            <div>
                <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                   {/* LOGO*/}
                   <Link href={"/"}>
                     <h2 className='text-rose-400 text-3xl font-bold'>LOGO</h2>
                   </Link>
                   {/*Humburger navbar for mobile */}
                   <div className='md:hidden'>
                    <button className='p-2 text-gray-700 rounded-md outline-none focus:border-pink-600'
                    onClick={() => setNavbar(!navbar)}
                    >
                     {navbar ? (  
                    <img src = "/closed.png" alt="logo" width={30} height={30}/> ):(
                    <img src = "/hamburger-menu.png" alt="logo" width={30} height={30} 
                    className="focus:border-none active:border-none"/>
                    )}
                    </button>
                   </div>
                </div>
            </div>
            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                    <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink-800'>
                            <a href='#home' onClick={() => setNavbar(!navbar)}>
                            Home
                            </a>
                        </li>
                        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink-800'>
                            <a href='#about' onClick={() => setNavbar(!navbar)}>
                            About
                            </a>
                        </li>
                        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink-800'>
                            <a href='#service' onClick={() => setNavbar(!navbar)}>
                            Service
                            </a>
                        </li>
                        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink-800'>
                            <a href='#contact' onClick={() => setNavbar(!navbar)}>
                            Contact
                            </a>
                        </li>
                        <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-pink-800'>
                            <a href='#projects' onClick={() => setNavbar(!navbar)}>
                            Projects
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
