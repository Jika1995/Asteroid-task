import axios from "axios";
import { API_URL } from "./constants";

export const baseAxios = axios.create({
    baseURL: API_URL,
});

baseAxios.interceptors.request.use((config) => {
    const params = config.params ?? {};
    params.api_key = 'AcqHWCUjlMU2qJIW3ch3nPheCmzfai4M7ZnDZvNW';
    return { ...config, params };
}, function (error) {
    return Promise.reject(error);
})