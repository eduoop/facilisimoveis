'use client'
import Logo from "../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className='flex justify-between w-full px-7 bg-white sm:hidden pt-2 '>
        <div className='flex justify-center items-center w-fit'>
          <Link href="/properties">
            <Image alt='Logo' src={Logo} className='w-20 h-20 cursor-pointer' />
          </Link>
        </div>

        <ul className='flex items-center gap-5'>
          <li>
            <Link className='font-semibold text-primary text-lg duration-150 hover:text-secondary' href="/properties">Imóveis</Link>
          </li>
          <li>
            <Link className='font-semibold text-primary text-lg duration-150 hover:text-secondary' href="/contact">Contato</Link>
          </li>
          <li>
            <Link className='font-semibold text-primary text-lg duration-150 hover:text-secondary' href={`/about`}>Sobre nós</Link>
          </li>
        </ul>

      
      </nav>

      <nav className='justify-between items-center w-screen px-5 hidden sm:flex sm:w-full bg-white'>
        <div className='flex justify-center items-center w-fit'>
          <Link href="/properties">
            <Image alt='Logo' src={Logo} className='w-20 h-20 cursor-pointer' />
          </Link>
        </div>
        <svg onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 cursor-pointer">
          <path strokeLinecap="round" className="text-gray-primary" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </nav>

      {open === true &&
        <div className="bg-gray-primary h-screen w-screen top-0 right-0 fixed z-50">
          <nav className="flex w-full items-center justify-center h-full relative">

            <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer absolute top-[52px] right-[25px] text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <ul className='flex flex-col justify-center items-center gap-8 w-full'>
              <li onClick={() => setOpen(false)} className="w-full flex items-center justify-center text-center">
                <Link className='font-semibold text-center text-white text-xl w-full cursor-pointer duration-150 hover:text-white-500 hover:bg-emerald-800 py-5' href="/properties">Imóveis</Link>
              </li>
              <li onClick={() => setOpen(false)} className="w-full flex items-center justify-center text-center">
                <Link className='font-semibold text-center text-white text-xl w-full cursor-pointer duration-150 hover:text-white-500 hover:bg-emerald-800 py-5' href="/contact">Contato</Link>
              </li>
              <li onClick={() => setOpen(false)} className="w-full flex items-center justify-center text-center">
                <Link className='font-semibold text-center text-white text-xl w-full cursor-pointer duration-150 hover:text-white-500 hover:bg-emerald-800 py-5' href="/about">Sobre nós</Link>
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  )
}

export default Nav