'use client'

import React, { useEffect, useState } from 'react'
import { State } from '../models/state.model'
import { City } from '../models/city.model'
import { AllCites } from '../data/cities'
import { AllStates } from '../data/states'
import { useGlobalPropertiesContext } from '../contexts/Properties/PropertiesContext'

const FilterCity = () => {

    const { setCity, getProperties } = useGlobalPropertiesContext()

    const [currentCiy, setCurrentCity] = useState<City>(AllCites[0])
    const [currentState, setCurrentState] = useState<State>(AllStates[0])

    // Find the city in cities array

    const findCityById = (cityId: string) => {
        const cityFinder = AllCites.filter(city => city.id === cityId)[0]
        alert(cityFinder.name)
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

    const mostAlert = (value: string) => {
        AllCites.map((c) => {
            alert(c.name)
        })
    }

    return (
        <div className='w-full bg-[#006b3f] h-24 flex items-center justify-center sm:h-auto'>
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

                    <select className='p-3 outline-none rounded-md w-44 sm:w-full' onChange={(e) => mostAlert(e.target.value)}>
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
                <button onClick={() => {
                    searchProperties()
                }} className='p-3 px-4 outline-none rounded-md bg-[#00d38d] text-white font-bold sm:w-full'>Buscar</button>
            </div>
        </div>
    )
}

export default FilterCity
