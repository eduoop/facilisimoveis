/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import { Property } from '../../models/property.model';
import { IoLinkOutline } from 'react-icons/io5';
import { HiOutlineMap, HiOutlinePhotograph } from 'react-icons/hi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/styles.module.css"
import * as Dialog from '@radix-ui/react-dialog';

const Page = ({ params }: { params: any }) => {

    const allProperties: Property[] = require('../../../app/data/properties.json');
    const [property, setProperty] = useState<Property>()
    const [imgs, setImgs] = useState<string[]>([])
    const [currentView, setCurrentView] = useState<"photos" | "maps">("photos")

    const active = "flex transition duration-200 items-center gap-2 border-solid border-2 border-primary font-bold outline-none w-44 justify-center bg-primary py-2 px-5 shadow-lg rounded-md"

    const notActive = "flex items-center justify-center border-solid border-2 border-gray-400/100 gap-2 font-bold outline-none py-2 w-44 shadow-md rounded-md transition duration-150 hover:border-gray-400/70 hover:shadow-none hover:bg-gray-400/10"

    const changeActive = (navName: "photos" | "maps") => {
        setCurrentView(navName)
    }

    useEffect(() => {
        const finderProperty = allProperties.filter((propriety) => propriety.id === Number(params.id))[0]
        setProperty(finderProperty)
        setImgs(finderProperty.images)
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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

    return (
        <div className='flex flex-col w-screen'>
            {currentView === "photos" &&
                <Carousel
                    responsive={responsive}
                    arrows={true}
                    infinite={true}
                    draggable={false}
                    pauseOnHover={true}>
                    {imgs.map((imgUrl, index) => (
                        <Dialog.Root key={index} >
                            <Dialog.Trigger asChild>
                                <div className='max-w-full max-h-full tablet:w-full tablet:h-full laptop:w-[670px] laptop:h-[377px] desktop:w-[670px] desktop:h-[400px] cursor-pointer select-none shadow-md '>
                                    <img className='object-cover' style={{ pointerEvents: "none" }} src={imgUrl} alt={'apartament images'} />
                                </div>
                            </Dialog.Trigger>
                            <Dialog.Portal>
                                <Dialog.Overlay className={styles.DialogOverlay} />
                                <Dialog.Content className={styles.DialogContent}>
                                    <div className='w-full h-full' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "bottom" }}></div>
                                    <Dialog.Close asChild>
                                        <button className='absolute top-[25px] right-[25px] bg-zinc-800/70 h-8 w-8 flex items-center justify-center rounded-full text-white border-none outline-none font-semibold text-lg shadow-md transition duration-200 hover:bg-zinc-800'>X</button>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    ))}
                </Carousel>
            }

            { currentView === "maps" &&
                <div className='w-full flex items-center justify-center h-60'>
                    Em construção
                </div>
            }

            <div className='w-full flex justify-center items-center mt-3'>
                <div className='flex justify-between items-center w-[90%] sm:w-full sm:justify-center'>
                    <div className='flex items-center gap-7'>
                        <button onClick={() => changeActive("photos")} className={currentView === "photos" ? active : notActive}><HiOutlinePhotograph fontSize={20} /> Ver Fotos ({property && property.images.length})</button>
                        <button onClick={() => changeActive("maps")} className={currentView === "maps" ? active : notActive}><HiOutlineMap fontSize={20} /> Ver Mapa</button>
                    </div>
                    <div className='block sm:hidden'>
                        <button className='flex items-center gap-2 font-semibold outline-none border-none py-2 px-5 rounded-md text-[14px]'><IoLinkOutline fontSize={22} /> Compartilhar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
