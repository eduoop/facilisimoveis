/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import { Property } from '../../models/property.model';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner from "../../../public/banner.png"
import Image from 'next/image';
import styles from "../../styles/styles.module.css"
import ViewImage from '../../components/ViewImage';
import * as Dialog from '@radix-ui/react-dialog';

const Page = ({ params }: { params: any }) => {

    const allProperties: Property[] = require('../../../app/data/properties.json');
    const [property, setProperty] = useState<Property>()
    const [imgs, setImgs] = useState<string[]>([])

    useEffect(() => {
        const finderProperty = allProperties.filter((propriety) => propriety.id === Number(params.id))[0]
        setProperty(finderProperty)
        setImgs(finderProperty.images)
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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
        <div className='flex flex-col w-screen '>
            <Carousel
                responsive={responsive}
                arrows={true}
                infinite={true}
                draggable={false}
                pauseOnHover={true}>
                {imgs.map((imgUrl, index) => (
                    <Dialog.Root key={index} >
                        <Dialog.Trigger asChild>
                            <div className='w-[670px] h-[400px] cursor-pointer select-none shadow-md'>
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
            {property &&
                <main className='w-full flex flex-col items-center'>
                    <div></div>
                    <div className='bg-zinc-700'>

                    </div>
                </main>
            }

        </div>
    )
}

export default Page
