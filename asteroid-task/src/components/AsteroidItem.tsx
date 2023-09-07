import Image from 'next/image'
import React from 'react';
import Arrow from '../../public/Arrow.png';
import AsteroidImg from '../../public/Asteroid.png';
import { IconAlertTriangleFilled } from '@tabler/icons-react'
import { Asteroid } from '@/utils/types';

export type Props = {
    asteroid: Asteroid,
    date: string
}
const AsteroidItem = ({ asteroid, date }: Props) => {

    return (
        <div className='py-2'>
            <h1 className='text-2xl font-bold'>
                {date}
            </h1>
            <div className='flex gap-2 py-2'>
                <div>
                    <p className='text-sm'>{Math.round(+asteroid.close_approach_data[0].miss_distance.lunar)} лунных орбит</p>
                    <Image src={Arrow} alt={`itemId-arrow`} />
                </div>
                <Image src={AsteroidImg} alt={`itemId-asteroid`}
                //  height={30}
                />
                <div>
                    <p className='underline text-xs font-bold'>{asteroid.name.match(/\(([^)]+)\)/)?.[1] ?? ''}</p>
                    <p className='text-sm'>Ø {Math.round(+asteroid.estimated_diameter.meters.estimated_diameter_max)}</p>
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