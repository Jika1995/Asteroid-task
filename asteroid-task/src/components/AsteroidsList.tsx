import { useFetchAsteroids } from '@/services/fetchAsteroids';
import { Asteroid } from '@/utils/types';
import { Anchor, Tabs } from '@mantine/core';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Earth from '../../public/Earth.png'
import AsteroidItem from './AsteroidItem';

const AsteroidsList = () => {
    // const [activeTab, setActiveTab] = useState<string | null>('kilometers');
    const start_date = new Date().toISOString().slice(0, 10);
    // start_date.
    console.log(start_date);

    const [data] = useFetchAsteroids({ start_date }, { enabled: Boolean(start_date) });
    const rawData = data?.pages[0].near_earth_objects

    const [asteroids, setAsteroids] = useState<[string, Asteroid[]][]>([]);

    useEffect(() => {
        if (rawData) {
            setAsteroids(Object.entries(rawData).sort((a, b) => {
                const dateA = new Date(a[0].replace(/(\d{4}) (\d{2}) (\d{2})/, '$1-$2-$3'));
                const dateB = new Date(b[0].replace(/(\d{4}) (\d{2}) (\d{2})/, '$1-$2-$3'));

                if (dateA < dateB) return -1;
                if (dateA > dateB) return 1;
                return 0;
            }))
        }
    }, [rawData])

    console.log(rawData);

    return (
        <div className='py-6 relative'>
            <Image src={Earth} alt={'earth-png'} className='fixed top-0 py-6' style={{ right: '17rem' }} />
            <div className='pl-10'>
                <h1 className='text-2xl font-bold'>Ближайшие подлеты астероидов</h1>
                <div className='flex'>
                    <Anchor component="button" type="button" color='white' size='sm' >
                        в километрах
                    </Anchor>
                    <span className='px-1'>|</span>
                    <Anchor component="button" type="button" color='white' size='sm' >
                        в лунных орбитах
                    </Anchor>
                </div>

                <div className='py-2'>
                    {
                        asteroids?.map(item =>
                        (
                            item[1].map(elem => (
                                <AsteroidItem date={item[0]} key={elem.id} asteroid={elem} />
                            ))
                        )
                        )
                    }
                </div>
                {/* <Tabs value={activeTab} onTabChange={setActiveTab} color='white'>
                    <Tabs.List>
                        <Tabs.Tab value="kilometers" color='white'>в километрах</Tabs.Tab>
                        <Tabs.Tab value="moonOrbits" color='white'>в лунных орбитах</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="kilometers">First panel</Tabs.Panel>
                    <Tabs.Panel value="moonOrbits">Second panel</Tabs.Panel>
                </Tabs> */}
            </div>
        </div>
    )
}

export default AsteroidsList