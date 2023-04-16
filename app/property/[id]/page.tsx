"use client"
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React, { useEffect, useState } from 'react'
import { Property } from '../../models/property.model';
import Carousel from 'react-multi-carousel';

const Page = ({ params }: { params: any }) => {

    const allProperties: Property[] = require('../../../app/data/properties.json');
    const [property, setProperty] = useState<Property>()

    useEffect(() => {
        const finderProperty = allProperties.filter((propriety) => propriety.id === Number(params.id))[0]
        setProperty(finderProperty)
    }, [])

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

    return (
        <div className='flex flex-col w-scree items-center'>
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
