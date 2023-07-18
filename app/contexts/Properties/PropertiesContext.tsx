
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { City } from "../../models/city.model";
import { State } from "../../models/state.model";
import { Property } from "../../models/property.model";
import { AllCites } from "../../data/cities";
import { AllStates } from "../../data/states";
interface PropertiesContextProps {
    state: State;
    setState: Dispatch<SetStateAction<State>>;
    city: City;
    setCity: Dispatch<SetStateAction<City>>;

    properties: Property[];
    setProperties: Dispatch<SetStateAction<Property[]>>;

    getProperties: (currentCity: string) => Promise<void>;
}

const GlobalContext = createContext<PropertiesContextProps>(null!)

export const PropertiesContextProvider = ({ children }: { children: any }) => {
    const [city, setCity] = useState<City>(AllCites[0])
    const [state, setState] = useState<State>(AllStates[0])

    const [properties, setProperties] = useState<Property[]>([])

    const getProperties = async (currentCityName: string) => {
        const response = await fetch(`../../../../api/properties?state=${state.abbreviation}&city=${currentCityName}`, {
            method: 'GET',
        })
        const data = await response.json();

        setProperties(data.filteredProperties)
    }

    return (
        <GlobalContext.Provider value={{ city, getProperties, properties, setCity, setProperties, setState, state }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalPropertiesContext = () => useContext(GlobalContext);