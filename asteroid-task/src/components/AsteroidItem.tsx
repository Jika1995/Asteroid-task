import Image from 'next/image'
import React from 'react';
import Arrow from '../../public/Arrow.png';
import AsteroidImg from '../../public/Asteroid.png';
import { IconAlertTriangleFilled } from '@tabler/icons-react'
import { Asteroid } from '@/utils/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cart.slice';
import { useIsInCart } from '@/store/hooks';
import Link from 'next/link';
import { spawn } from 'child_process';

export type Props = {
    asteroid: Asteroid,
    date: string
}
const AsteroidItem = ({ asteroid, date }: Props) => {

    const isInCart = useIsInCart(asteroid.id);
    const isBig = +asteroid.estimated_diameter.meters.estimated_diameter_min > 100
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart(asteroid)
        )
    }

    return (
        <div className='py-2'>
            <Link href={`/asteroids/${asteroid.id}`} >
                <h1 className='text-2xl font-bold'>
                    {date}
                </h1>
                <div className='flex gap-2 py-2'>
                    <div>
                        <p className='text-sm'>{Math.round(+asteroid.close_approach_data[0].miss_distance.lunar)} лунных орбит</p>
                        <Image src={Arrow} alt={`itemId-arrow`} />
                    </div>
                    <Image src={AsteroidImg} alt={`itemId-asteroid`}
                        width={isBig ? 40 : 25}
                        height={isBig ? 40 : 25}
                        className="object-contain aspect-square"
                    //  height={30}
                    />
                    <div>
                        <p className='underline text-xs font-bold'>{asteroid.name.match(/\(([^)]+)\)/)?.[1] ?? ''}</p>
                        <p className='text-sm'>Ø {Math.round(+asteroid.estimated_diameter.meters.estimated_diameter_min)}</p>
                    </div>
                </div>
            </Link>

            <div className='flex gap-4 items-center'>
                {
                    isInCart ?
                        <button className='rounded-3xl bg-btnBg bg-opacity-20 p-2 font-semibold text-xs hover:bg-opacity-100 text-white' onClick={handleAddToCart}>
                            В КОРЗИНЕ
                        </button>
                        :
                        <button className='rounded-3xl bg-btnBg bg-opacity-20 p-2 font-semibold text-xs hover:bg-opacity-100 text-btnBg hover:text-white' onClick={handleAddToCart}>
                            ЗАКАЗАТЬ
                        </button>
                }
                {
                    asteroid.is_potentially_hazardous_asteroid ?
                        (
                            <p className='text-sm flex gap-2'>
                                <IconAlertTriangleFilled style={{ color: 'yellow' }} />
                                Опасен
                            </p>
                        )
                        : null

                }
            </div>
        </div>
    )
}

export default AsteroidItem