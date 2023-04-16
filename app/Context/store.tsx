
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    name: string,
    setName: Dispatch<SetStateAction<string>>,
}

const GlobalContext = createContext<ContextProps>(null!)

export const GlobalContextProvider = ({ children }: { children: any}) => {
    const [name, setName] = useState('');
    
    return (
        <GlobalContext.Provider value={{ name, setName }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);