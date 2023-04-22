"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGlobalPropertiesContext } from './contexts/Properties/PropertiesContext';
import Propriety from './components/Propriety';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Banner from "../public/banner.png"
import BannerSmall from "../public/banner-small.png"


const Home = () => {
  const { city, properties } = useGlobalPropertiesContext()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  useEffect(() => {
    console.log("Render home")
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='sm:hidden'>
        <Carousel
          responsive={responsive}
          arrows={true} 
          infinite={true}
          pauseOnHover={true}>
          <div className='w-screen cursor-pointer select-none'>
            <Image alt='Banner' fill className='object-cover' style={{ pointerEvents: "none" }} src={Banner} />
          </div>
          <div className='w-screen cursor-pointer select-none'>
            <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/mg_contagem_residencialcascais_20230131095222.webp" />
          </div>
          <div className='w-screen cursor-pointer select-none'>
            <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/MG_BeloHorizonte_Milionarios_1920x420.webp" />
          </div>
        </Carousel>
      </div>

      <div className='hidden sm:block'>
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          pauseOnHover={true}>
          <div className='w-screen cursor-pointer select-none h-[260px]'>
            <Image alt='Banner' fill className='object-cover' style={{ pointerEvents: "none" }} src={BannerSmall} />
          </div>
          <div className='w-screen cursor-pointer select-none'>
            <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/mg_contagem_residencialcascais_20230131095222.webp" />
          </div>
          <div className='w-screen cursor-pointer select-none'>
            <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/MG_BeloHorizonte_Milionarios_1920x420.webp" />
          </div>
        </Carousel>
      </div>

      <div className='flex mt-6 justify-center items-center'>
        <h2 className='text-[#242625] text-4xl font-extrabold text-center font-display sm:text-2xl'>Imóveis à venda em {city.name}-{city.state}</h2>
      </div>

      <div className='flex w-full justify-center mt-7 mb-10'>
        <div className='w-full max-w-[1250px]'>
          <div className='w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-8 p-3'>
            {properties.map((property) => (
              <Propriety propriety={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
