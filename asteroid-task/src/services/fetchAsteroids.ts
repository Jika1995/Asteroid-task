import { baseAxios } from "@/utils/baseAxios";
import { Asteroid, NearEarthObject } from "@/utils/types";
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from "axios";

export type AsteroidResponse = {
    links: {
        next: string;
        previous: string;
        self: string
    },
    element_count: number,
    near_earth_objects:
    Record<string, Asteroid[]>
}

export type AsteroidFilters = {
    end_date?: string;
    start_date?: string;
}

export type FetchAsteroidsArg = {
    filters: AsteroidFilters;
}

export const fetchAsteroids = async (arg: FetchAsteroidsArg) => {
    const { data } = await baseAxios.get<AsteroidResponse>('/feed', { params: arg.filters });
    return data
}

export const fetchAsteroidsByLink = async (link: string) => {
    const { data } = await axios.get<AsteroidResponse>(link);
    return data;
}

export const useFetchAsteroids = (
    filters: Omit<AsteroidFilters, 'start_date' | 'end_date'>,
    options: { enabled?: boolean } = {}
) => {
    const query = useInfiniteQuery({
        queryFn: ({ pageParam }) => pageParam ? fetchAsteroidsByLink(pageParam) : fetchAsteroids({ filters }),
        queryKey: ['asteroids', filters],
        getNextPageParam: (lastPage) => lastPage.links.next,
        ...options
    });

    return [query.data, query] as const
}