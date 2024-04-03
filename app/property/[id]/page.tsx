/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import { Property } from '../../models/property.model';
import { IoCarOutline, IoLinkOutline } from 'react-icons/io5';
import Carousel from 'react-multi-carousel';
import { HiOutlineMap, HiOutlinePhotograph } from 'react-icons/hi';
import { RiShareFill } from 'react-icons/ri';
import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/styles.module.css"
import toast, { Toaster } from 'react-hot-toast';
import * as Dialog from '@radix-ui/react-dialog';
import { BiBed, BiBuildings, BiRuler } from 'react-icons/bi';
import { MdOutlineShower } from 'react-icons/md';
import { AccordionDemo } from '../../components/AccordionDifferentials';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api'

const Page = ({ params }: { params: any }) => {

    const allProperties: Property[] = require('../../../app/data/properties.json');
    const [property, setProperty] = useState<Property>()
    const [imgs, setImgs] = useState<string[]>([])
    const [currentView, setCurrentView] = useState<"photos" | "maps">("photos")
    const [map, setMap] = React.useState(null)
    const [center, setCenter] = React.useState<{
        lat: number,
        lng: number
    }>({
        lat: -19.852723,
        lng: -43.955997
    })

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_KEY ? process.env.GOOGLE_KEY : "none"
    })

    const active = "flex transition duration-200 items-center gap-2 border-solid border-2 border-primary font-bold outline-none w-44 justify-center bg-primary py-2 px-5 shadow-lg rounded-md"

    const notActive = "flex items-center justify-center border-solid border-2 border-gray-400/100 gap-2 font-bold outline-none py-2 w-44 shadow-md rounded-md transition duration-150 hover:border-gray-400/70 hover:shadow-none hover:bg-gray-400/10"

    const changeActive = (navName: "photos" | "maps") => {
        setCurrentView(navName)
    }

    useEffect(() => {
        const finderProperty = allProperties.filter((propriety) => propriety.id === Number(params.id))[0]
        setProperty(finderProperty)
        setImgs(finderProperty.images)
        setCenter({
            lat: Number(finderProperty.lat),
            lng: Number(finderProperty.lon)
        })
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
            items: 1,
        }
    }

    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    console.log(isLoaded)

    return (
        <div className='flex flex-col w-screen'>
            {currentView === "photos" &&
                <div className='relative '>
                    <div onClick={() => {
                        toast.success("Link copiado!")
                        navigator.clipboard.writeText(`https://facilisimoveis.com.br/property/${params.id}`)
                    }} className='absolute hidden sm:block top-[20px] right-[20px] bg-zinc-800/80 p-2 rounded-md z-40'>
                        <RiShareFill color='white' fontSize={20} />
                    </div>
                    <Carousel
                        responsive={responsive}
                        arrows={true}
                        infinite={true}
                        draggable={false}
                        pauseOnHover={true}>
                        {imgs.map((imgUrl, index) => (
                            <Dialog.Root key={index} >
                                <Dialog.Trigger asChild>
                                    <div className='max-w-full max-h-full tablet:w-full tablet:h-full laptop:w-[670px] laptop:h-[377px] desktop:w-full desktop:h-[400px] cursor-pointer select-none shadow-md'>
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
                </div>

            }

            {currentView === "maps" && isLoaded === true &&
                <div className='w-full flex items-center justify-center max-h-full tablet:w-full tablet:h-[377px] laptop:h-[377px] desktop:w-full h-[300px]'>
                    <GoogleMap
                        id="marker-example"
                        zoom={17}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        mapContainerStyle={containerStyle}
                        center={center}
                    >
                        <MarkerF
                            position={center}
                        />
                    </GoogleMap>
                </div>
            }

            <div className='w-full flex justify-center items-center mt-5'>
                <div className='flex justify-between items-center w-[90%] max-w-[1250px] sm:w-full sm:justify-center'>
                    <div className='flex items-center gap-7'>
                        <button onClick={() => changeActive("photos")} className={currentView === "photos" ? active : notActive}><HiOutlinePhotograph fontSize={20} /> Ver Fotos ({property && property.images.length})</button>
                        <button onClick={() => changeActive("maps")} className={currentView === "maps" ? active : notActive}><HiOutlineMap fontSize={20} /> Ver Mapa</button>
                    </div>
                    <div className='block sm:hidden'>
                        <button onClick={() => {
                            toast.success("Link copiado!")
                            navigator.clipboard.writeText(`https://facilisimoveis.com.br/property/${params.id}`)
                        }} className='flex items-center gap-2 font-semibold outline-none border-none py-2 rounded-md text-[14px]'><IoLinkOutline fontSize={22} /> Compartilhar</button>
                    </div>
                </div>
            </div>
            <div className='w-screen h-[1px] bg-zinc-800/10 my-5' />
            {property &&
                <div className='w-screen overflow-x-hidden flex items-center justify-center'>
                    <div className='w-[90%] max-w-[1250px] flex justify-between gap-9 sm:flex-col'>
                        {/* Left side div */}
                        <div className='flex flex-col w-[60%] sm:w-full'>
                            <div className='flex flex-col w-full'>
                                <h1 className='font-display font-bold text-[20px] text-slate-950'>{property.residential} <br /> {property.neighborhood} - {property.stateAbbreviation}</h1>
                                <h2>{property.road} - {property.neighborhood} - {property.city}/{property.stateAbbreviation}</h2>
                            </div>

                            <div className='w-[100%] h-[1px] bg-zinc-800/10 my-5' />

                            {/* List items of property */}

                            <div>
                                <h1 className='font-display font-bold text-[20px] text-slate-950 mb-3'>
                                    Informações do imóvel
                                </h1>

                                <div className='flex flex-wrap gap-10'>
                                    <div className='flex gap-2'>
                                        <BiRuler fontSize={24} />
                                        <div className='flex flex-col'>
                                            <h2 className='text-slate-950 font-bold leading-5'>Área</h2>
                                            <h3>{property.size}</h3>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <MdOutlineShower fontSize={24} />
                                        <div className='flex flex-col'>
                                            <h2 className='text-slate-950 font-bold leading-5'>Banheiros</h2>
                                            <h3>{property.countBathrooms}</h3>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BiBuildings fontSize={24} />
                                        <div className='flex flex-col'>
                                            <h2 className='text-slate-950 font-bold leading-5'>Estágio</h2>
                                            <h3>{property.status}</h3>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <BiBed fontSize={24} />
                                        <div className='flex flex-col'>
                                            <h2 className='text-slate-950 font-bold leading-5'>Quartos</h2>
                                            <h3>{property.countRooms}</h3>
                                        </div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <IoCarOutline fontSize={24} />
                                        <div className='flex flex-col'>
                                            <h2 className='text-slate-950 font-bold leading-5'>Vagas</h2>
                                            <h3>{property.garages}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-[100%] h-[1px] bg-zinc-800/10 my-5' />

                            {/* Property description */}

                            <div>
                                <h1 className='font-display font-bold text-[20px] text-slate-950 mb-3'>
                                    Descrição do imóvel
                                </h1>

                                <div>{property.description}</div>
                            </div>

                            <div className='w-[100%] h-[1px] bg-zinc-800/10 my-5' />

                            {/* Property differentials */}
                            <div className='w-full flex- flex-col sm:w-[95%] pb-6'>
                                <h1 className='font-display font-bold text-[20px] text-slate-950 mb-3'>
                                    Diferenciais:
                                </h1>

                                {/* List differentials */}
                                <AccordionDemo differentials={property.differentials} />
                            </div>
                        </div>

                        {/* Right side div */}
                        <div className='flex flex-col w-[40%] sm:w-full'>
                            <div className='p-3 border-2 border-solid border-primary rounded-md flex flex-col'>
                                <h2 className='font-display font-bold text-[22px] text-slate-950'>Tem interesse?</h2>
                                <small className='font-display font-semibold text-[14px] text-slate-950'>Entre em contato conosco para saber mais sobre o imóvel ou efetuar <br /> sua compra de forma simples</small>
                                <a className='flex transition duration-200 items-center gap-2 border-solid border-2 border-primary font-bold outline-none w-full justify-center bg-primary py-3 shadow-lg rounded-md mt-6 hover:bg-primary/80 hover:shadow-none'
                                    href="https://wa.me/3182849538"
                                    target='_blank'
                                    rel="noreferrer">Contatar</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Page