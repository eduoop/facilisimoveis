'use client'

import React, { useEffect, useState } from 'react'
import { State } from '../models/state.model'
import { City } from '../models/city.model'
import { AllCites } from '../data/cities'
import { AllStates } from '../data/states'
import { useGlobalPropertiesContext } from '../contexts/Properties/PropertiesContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const FilterCity = () => {

    const { setCity, getProperties } = useGlobalPropertiesContext()

    const [currentCiy, setCurrentCity] = useState<City>(AllCites[0])
    const [currentState, setCurrentState] = useState<State>(AllStates[0])
    const router = useRouter();
    const pathname = usePathname();

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
        setCity(currentCiy)
        getProperties(currentCiy.name)
    }

    useEffect(() => {
        console.log("Render filter")
      }, [])

    return (
        <div className='w-screen bg-[#3A3A3A] h-24 flex items-center justify-center sm:h-auto'>
            <div className='flex gap-3 items-center sm:flex-col sm:w-11/12 sm:p-5'>
                <h2 className='text-white font-bold text-[17px] '>Encontre seu imóvel:</h2>
                <div className='flex items-center gap-3 mr-5 sm:flex-col sm:w-full sm:mr-0'>
                    <select onChange={(e) => {
                        findStateById(e.target.value)
                    }} name="states" id="states" className='p-3 outline-none rounded-md w-44 sm:w-full'>
                        {AllStates.map((state) => (
                            <option key={state.id} value={state.id}>{state.name}</option>
                        ))}
                    </select>

                    <select className='p-3 outline-none rounded-md w-44 sm:w-full' onChange={(e) => findCityById(e.target.value)}>
                        {AllCites && AllCites.map((city, i) => (
                            <option value={city.id} key={city.id + i}>{city.name}</option>
                        ))}
                    </select>

                    {/* <select onChange={(e) => {
                        findCityById(e.target.value)
                    }} name="cites" id="cites" className='p-3 outline-none rounded-md w-44 sm:w-full'>
                        {AllCites.map((city) => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select> */}
                </div>
                {pathname !== "/" ?
                    <Link href="/properties" className='sm:w-full'>
                        <button onClick={() => {
                            searchProperties()
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                        }} className='p-3 px-4 outline-none rounded-md bg-secondary text-white font-bold shadow-md sm:w-full'>Buscar</button>
                    </Link>
                    :
                    <button onClick={() => {
                        searchProperties()
                    }} className='p-3 px-4 outline-none rounded-md bg-secondary text-white font-bold shadow-md sm:w-full'>Buscar</button>
                }

            </div>
        </div>
    )
}

export default FilterCity
