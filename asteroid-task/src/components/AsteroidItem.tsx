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
import dayjs from 'dayjs';

export type Props = {
    asteroid: Asteroid,
    date: string,
    isLunar: boolean
}
const AsteroidItem = ({ asteroid, date, isLunar }: Props) => {
    require('dayjs/locale/ru')

    const isInCart = useIsInCart(asteroid.id);
    const isBig = +asteroid.estimated_diameter.meters.estimated_diameter_min > 100
    const dispatch = useDispatch();
    date = dayjs(date).locale('ru').format('D MMMM YYYY');
    const lunar = Math.round(+asteroid.close_approach_data[0].miss_distance.lunar)

    const handleAddToCart = () => {
        dispatch(
            addToCart(asteroid)
        )
    }

    // const morph = (int: number, array: string[]) => {
    //     return (array = array || ['лунная орбита', 'лунной орбиты', 'лунных орбит']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    // }

    const morph = (int: number, array: string[] = ['лунная орбита', 'лунные орбиты', 'лунных орбит']): string => {
        const singularForm = array[0];
        const genitiveSingularForm = array[1];
        const pluralForm = array[2];

        if (int % 100 > 4 && int % 100 < 20) {
            return pluralForm;
        }

        const lastDigit = int % 10;

        if (lastDigit === 1) {
            return singularForm;
        }

        if (lastDigit >= 2 && lastDigit <= 4) {
            return genitiveSingularForm
        }

        return pluralForm;
    };

    return (
        <div className='py-2'>
            <Link href={`/asteroids/${asteroid.id}`} >
                <h1 className='text-2xl font-bold'>
                    {date}
                </h1>
                <div className='flex gap-2 py-2'>
                    <div>
                        {
                            isLunar ?
                                <p className='text-sm'>{lunar} {morph(lunar)} </p>
                                :
                                <p className='text-sm'>{Math.round(+asteroid.close_approach_data[0].miss_distance.kilometers)} км</p>
                        }
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