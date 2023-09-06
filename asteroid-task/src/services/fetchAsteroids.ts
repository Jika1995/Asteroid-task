import { baseAxios } from "@/utils/baseAxios";
import { Asteroid, NearEarthObject } from "@/utils/types";
import { useQuery } from '@tanstack/react-query';

export type AsteroidResponse = {
    links: {
        next: string;
        previous: string;
        self: string
    },
    element_count: number,
    near_earth_objects:
    NearEarthObject
}

export const fetchAsteroids = async () => {
    const { data } = await baseAxios.get<AsteroidResponse>('');
    return data
}

export const useFetchAsteroids = () => {

    const query = useQuery({
        queryFn: fetchAsteroids,
        queryKey: ["asteroids"],
        initialData: {}
    })

    return [query.data, query] as const
}