import { useFetchAsteroids } from '@/services/fetchAsteroids';
import { Asteroid } from '@/utils/types';
import { Anchor, Loader, Tabs } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import AsteroidItem from './AsteroidItem';

const AsteroidsList = () => {
    // const [activeTab, setActiveTab] = useState<string | null>('kilometers');
    const start_date = new Date().toISOString().slice(0, 10);

    const [data, { isLoading }] = useFetchAsteroids({ start_date }, { enabled: Boolean(start_date) });
    const rawData = data?.pages[0].near_earth_objects

    const [asteroids, setAsteroids] = useState<[string, Asteroid[]][]>([]);
    const [isLunar, setIsLunar] = useState<boolean>(true)

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
        <div className=''>
            <div className='pl-12 md:px-72'>
                <h1 className='text-2xl font-bold'>Ближайшие подлеты астероидов</h1>
                <div className='flex'>
                    <Anchor component="button" type="button" color='white' size='sm' onClick={() => setIsLunar(false)} className={!isLunar ? 'underline' : ''}>
                        в километрах
                    </Anchor>
                    <span className='px-1'>|</span>
                    <Anchor component="button" type="button" color='white' size='sm' onClick={() => setIsLunar(true)} className={isLunar ? 'underline' : ''}>
                        в лунных орбитах
                    </Anchor>
                </div>

                <div className='py-2'>
                    {
                        isLoading ?? <Loader />
                    }
                    {
                        asteroids?.map(item =>
                        (
                            item[1].map(elem => (
                                <AsteroidItem date={item[0]} key={elem.id} asteroid={elem} isLunar={isLunar} />
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