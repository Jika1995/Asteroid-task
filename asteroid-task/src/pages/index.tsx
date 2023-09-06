import AsteroidsList from "@/components/AsteroidsList";
import Header from "@/components/Header";
import HomeCart from "@/components/HomeCart";
import { Container, Group, Loader, Select, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Home() {

    return (
        <>
            <Container p='xl' className=" bg-black text-white">
                <Header />
                <AsteroidsList />
            </Container>
            <HomeCart />
        </>
    )
}