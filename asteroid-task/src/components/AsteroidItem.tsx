import Image from 'next/image'
import React from 'react';
import Arrow from '../../public/Arrow.png';
import Asteroid from '../../public/Asteroid.png';
import { IconAlertTriangleFilled } from '@tabler/icons-react'

const AsteroidItem = () => {
    return (
        <div className='py-2'>
            <h1 className='text-2xl font-bold'>
                12 сент 2023
            </h1>
            <div className='flex gap-2 py-2'>
                <div>
                    <p className='text-sm'>3 лунные орбиты</p>
                    <Image src={Arrow} alt={`itemId-arrow`} />
                </div>
                <Image src={Asteroid} alt={`itemId-asteroid`}
                //  height={30}
                />
                <div>
                    <p className='underline text-sm font-bold'>2021FQ</p>
                    <p className='text-sm'>Ø 85 м</p>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='rounded-3xl bg-orange-500 bg-opacity-20 p-2 font-semibold text-xs text-orange-600'>
                    ЗАКАЗАТЬ
                </button>
                <p className='text-sm flex gap-2'>
                    <IconAlertTriangleFilled style={{ color: 'yellow' }} />
                    Опасен
                </p>
            </div>
        </div>
    )
}

export default AsteroidItem