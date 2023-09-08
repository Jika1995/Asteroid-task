import AsteroidsList from "@/components/AsteroidsList";
import Header from "@/components/Header";
import HomeCart from "@/components/HomeCart";
import { Container, Group, Loader, Select, Text } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import Earth from '../../public/Earth.png'

export default function Home() {

    return (
        <div className=" bg-black text-white relative h-full">
            <Image src={Earth} alt={'earth-png'} className='fixed top-0 my-10 md:left-0 md:my-24' style={{ right: '20.5rem' }} />
            <Header />
            <Container p='md'>
                <AsteroidsList />
            </Container>
            <HomeCart />
        </div>
    )
}