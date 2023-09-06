import { useFetchAsteroids } from '@/services/fetchAsteroids';
import { Anchor, Tabs } from '@mantine/core';
import Image from 'next/image'
import React, { useState } from 'react';
import Earth from '../../public/Earth.png'
import AsteroidItem from './AsteroidItem';

const AsteroidsList = () => {
    // const [activeTab, setActiveTab] = useState<string | null>('kilometers');
    const [asteroids] = useFetchAsteroids();

    console.log(asteroids);

    return (
        <div className='py-6 relative'>
            <Image src={Earth} alt={'earth-png'} className='absolute right-64 top-0 py-6' />
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
                        asteroids.map(item =>
                        (
                            <AsteroidItem item={item} key={item.id} />)
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