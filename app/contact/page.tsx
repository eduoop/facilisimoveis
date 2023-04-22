import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'

const Page = () => {
    return (
        <div className='w-screen h-[50vh] flex justify-center items-center'>
            <div className='flex w-full max-w-[1250px] justify-center items-center gap-28 sm:w-[90%]'>
                <BsPeopleFill fontSize={300} className='text-primary sm:hidden' />

                <div className='flex flex-col p-5 border-4 border-solid border-primary rounded-md'> 
                    <h2 className='text-4xl text-slate-950 font-display font-extrabold'>Ficou com alguma dúvida?</h2>
                    <a href='https://wa.me/3182849538' target='_blank' className='flex transition duration-200 items-center gap-2 border-solid border-2 border-primary font-bold outline-none w-full justify-center bg-primary text-slate-950 py-3 shadow-lg rounded-md mt-6 text-xl hover:bg-primary/80 hover:shadow-none' rel="noreferrer">Contate-nos</a>
                </div>
            </div>
        </div>
    )
}

export default Page
