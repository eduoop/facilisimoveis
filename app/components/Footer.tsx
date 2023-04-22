import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { TfiLinkedin } from 'react-icons/tfi'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <div className='w-screen bg-gray-primary flex justify-center flex-col items-center mt-12'>
      <div className='max-w-[1250px] flex flex-col'>
        {/* Redes sociais */}
        <div className='w-full flex justify-center items-center mt-5 gap-5'>
          {/* Item */}
          <a href='https://www.instagram.com/facilis.imoveis/' target='_blank' className='p-2 rounded-full border-solid border-2 border-primary/20 cursor-pointer text-primary transition duration-150 hover:border-primary hover:bg-zinc-800/80' rel="noreferrer">
            <AiOutlineInstagram fontSize={25} />
          </a>
          <a href='https://www.facebook.com/facilis.imoveis/' target='_blank' className='p-2 rounded-full border-solid border-2 border-primary/20 cursor-pointer text-primary transition duration-150 hover:border-primary hover:bg-zinc-800/80' rel="noreferrer">
            <FaFacebookF fontSize={20} />
          </a>
          <a href='https://wa.me/3198825154' target='_blank' className='p-2 rounded-full border-solid border-2 border-primary/20 cursor-pointer text-primary transition duration-150 hover:border-primary hover:bg-zinc-800/80' rel="noreferrer">
            <IoLogoWhatsapp fontSize={23} />
          </a>
        </div>

        {/* Navs */}
        <div className='flex gap-5 items-center mt-5'>
          <Link href="/" className='text-primary font-semibold transition duration-200 hover:text-primary/70'>Home</Link>
          <Link href="/contact" className='text-primary font-semibold transition duration-200 hover:text-primary/70'>Contato</Link>
          <Link href="/about" className='text-primary font-semibold transition duration-200 hover:text-primary/70'>Sobre nós</Link>
        </div>
      </div>
      {/* Copy */}
      <div className='flex justify-center items-center bg-zinc-800 w-full mt-4 py-3'>
        <h2 className='text-white/80'>Facilis imóveis &copy; 2023</h2>
      </div>
    </div>
  )
}

export default Footer