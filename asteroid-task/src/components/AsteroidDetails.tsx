import { useFetchAsteroidById } from '@/services/fetchAsteroidById'
import { Title } from '@mantine/core'
import React from 'react'
import ApproachItem from './ApproachItem'
import AsteroidItem from './AsteroidItem'

type Props = {
    id: string
}

const AsteroidDetails = ({ id }: Props) => {
    const [asteroid] = useFetchAsteroidById({ id }, { enabled: Boolean(id) });

    const headings = [
        'Вокруг',
        'Скорость (км/час)',
        'Расстояние до Земли (в км)',
        'Время макс. сближения'
    ]

    console.log(asteroid);


    return (
        <div
            className='py-10'
        >
            <Title size='md'>Название: {asteroid?.name.match(/\(([^)]+)\)/)?.[1] ?? ''}</Title>

            <div>
                {asteroid?.is_potentially_hazardous_asteroid ? (
                    <p className=' text-red-500 font-bold'>
                        Опасен!
                    </p>
                ) : (
                    <p className=' text-green-300 font-bold'>
                        Безопасен
                    </p>
                )}
                <Title size='sm'>Диаметр: {asteroid?.estimated_diameter.meters.estimated_diameter_min} м</Title>

                <Title size='sm' mt={10} align='center'>Сближения по планетам</Title>
                <div className='py-4 md:w-full'>
                    <table className='md:w-full'>
                        <thead>
                            <tr>
                                {headings.map(elem => (
                                    <th key={elem} className='text-xs font-serif border p-1 md:text-base'>{elem}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                asteroid?.close_approach_data.map(item => (
                                    <ApproachItem key={item.close_approach_date} item={item} />
                                ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default AsteroidDetails