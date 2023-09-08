import { useQuery } from '@tanstack/react-query';
import { baseAxios } from '@/utils/baseAxios';
import { type Asteroid } from '@/utils/types';

export type FetchAsteroidByIdArg = {
    id: string
}

export const fetchAsteroidById = async (arg: FetchAsteroidByIdArg) => {
    const { data } = await baseAxios.get<Asteroid>(`/neo/${arg.id}`);
    return data;
}

export const useFetchAsteroidById = (arg: FetchAsteroidByIdArg, options: { enabled?: boolean } = {}) => {
    const query = useQuery({
        queryFn: () => fetchAsteroidById(arg),
        queryKey: ['asteroids', arg],
        ...options,
    });

    return [query.data, query] as const
}