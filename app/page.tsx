"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useGlobalPropertiesContext } from './contexts/Properties/PropertiesContext';
import Propriety from './components/Propriety';
import React, { useState } from 'react'
import { AllStates } from './data/states';
import { AllCites } from './data/cities';
import { City } from './models/city.model';
import { State } from './models/state.model';

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

  const { setCity, setState, getProperties } = useGlobalPropertiesContext()

  const [currentCiy, setCurrentCity] = useState<City>()
  const [currentState, setCurrentState] = useState<State>()

  // Find the city in cities array

  const findCityById = (cityId: string) => {
    const cityFinder = AllCites.filter(city => city.id === cityId)[0]
    if (cityFinder) {
      setCurrentCity(cityFinder)
    }
  }

  // Find the state in cities array

  const findStateById = (stateId: string) => {
    const stateFinder = AllStates.filter(state => state.id === stateId)[0]
    if (stateFinder) {
      setCurrentState(stateFinder)
    }
  }

  const searchProperties = async () => {
    if (currentCiy) {
      setCity(currentCiy)
      getProperties(currentCiy.name)
    }

    if (currentState) {
      setState(currentState)
    }

  }

  return (
    <div className='flex flex-col'>
      <div className='w-full bg-[#006b3f] h-24 flex items-center justify-center sm:h-auto'>
        <div className='flex gap-3 items-center sm:flex-col sm:w-11/12 sm:p-5'>
          <h2 className='text-white font-bold text-[17px] '>Encontre seu imóvel:</h2>
          <div className='flex items-center gap-3 mr-5 sm:flex-col sm:w-full sm:mr-0'>
            <select onChange={(e) => findStateById(e.target.value)} name="states" id="states" className='p-3 outline-none rounded-md w-44 sm:w-full'>
              {AllStates.map((state) => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
            <select onChange={(e) => {
              findCityById(e.target.value)
            }} name="cites" id="cites" className='p-3 outline-none rounded-md w-44 sm:w-full'>
              {AllCites.map((city) => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>
          <button onClick={() => {
            searchProperties()
          }} className='p-3 px-4 outline-none rounded-md bg-[#00d38d] text-white font-bold sm:w-full'>Buscar</button>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        arrows={true} autoPlay={true}
        infinite={true}
        pauseOnHover={true}>
        <div className='w-screen cursor-pointer select-none'>
          <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/vitrine_residencialOregon_linha_bio_desktop.webp" />
        </div>
        <div className='w-screen cursor-pointer select-none'>
          <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/mg_contagem_residencialcascais_20230131095222.webp" />
        </div>
        <div className='w-screen cursor-pointer select-none'>
          <img className='object-cover' style={{ pointerEvents: "none" }} src="https://imoveis.mrv.com.br/upload/vitrines/JPG/1920x728/MG_BeloHorizonte_Milionarios_1920x420.webp" />
        </div>
      </Carousel>

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
