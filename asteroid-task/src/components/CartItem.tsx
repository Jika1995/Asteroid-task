import { Asteroid } from '@/utils/types'
import { IconAlertTriangleFilled } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import AsteroidImg from '../../public/Asteroid.png';

type Props = {
    item: Asteroid
}
const CartItem = ({ item }: Props) => {

    const isBig = +item.estimated_diameter.meters.estimated_diameter_min > 100

    return (
        <div className='flex gap-9 p-4 items-center'>
            <p className='text-sm' >{item?.name.match(/\(([^)]+)\)/)?.[1] ?? ''}</p>
            <Image src={AsteroidImg} alt={`itemId-asteroid`}
                width={isBig ? 40 : 25}
                height={isBig ? 40 : 25}
                className="object-contain aspect-square"
            />
            {
                item.is_potentially_hazardous_asteroid ?
                    (
                        <p className='text-sm flex gap-2 text-red-600'>
                            <IconAlertTriangleFilled style={{ color: 'yellow' }} />
                            Опасен
                        </p>
                    )
                    :
                    (
                        <p className='text-sm flex gap-2 text-green-500'>

                            Безопасен
                        </p>
                    )
            }
        </div>
    )
}

export default CartItem