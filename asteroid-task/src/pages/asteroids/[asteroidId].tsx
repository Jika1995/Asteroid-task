import AsteroidDetails from '@/components/AsteroidDetails';
import Header from '@/components/Header';
import { Asteroid } from '@/utils/types';
import { Container } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react'

const AsteroidPage = () => {

    const router = useRouter();
    const id = router.query.asteroidId?.toString() ?? '';

    return (
        <div
            className="bg-cover bg-fixed bg-center text-white min-h-screen"
            style={{
                backgroundImage: `url(https://w7.pngwing.com/pngs/702/238/png-transparent-starry-sky-during-nighttime-atmosphere-sky-space-astronomy-night-space-pic-miscellaneous-texture-food.png
        )`,
            }}>
            <Header />
            <Container p='md'>
                <AsteroidDetails id={id} />
            </Container>
        </div>
    )
}

export default AsteroidPage