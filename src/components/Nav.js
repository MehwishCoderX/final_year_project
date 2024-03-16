'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

import logo from './Nav/logo.svg';
import Signup from '@/app/(Auth)/Signup/page';

export default function Navbar() {
  const [isClicked, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClick(!isClicked);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Blog', path: '/blog' },
    { title: 'About', path: '/About' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap shadow-md bg-white rounded pr-10 md:pl-4 lg:pl-8 mt-7 mx-4 md:mx-8 lg:mx-16 mb-1 sm:pl-5">
      <div className="flex items-center flex-shrink-0 text-black mr-4">
        <Image src={logo} alt='logo' className={`h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 ${isClicked ? 'animate-spin' : ''}`} onClick={handleClick} />
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg className="fill-current text-blue-950 h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className={` w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'} md:block `}>
        <div className="text-sm md:flex-grow ">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className='Nav_text'>
              <button className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 mr-4 font-semibold">
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        <div>
        <button className="inline-block text-md font-bold px-4   py-2 leading-none border-black hover:border-transparent hover:text-blue-950 hover:bg-white mt-4 md:mt-0" onClick={Signup}>
            Login
          </button>
          <button className="inline-block text-sm px-5 py-3 leading-none border rounded-full text-white bg-blue-950 hover:border-transparent hover:text-blue-950 hover:bg-white mt-4 md:mt-0 ml-2 hover:transition duration-300 ease-in-out transform hover:scale-105" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

