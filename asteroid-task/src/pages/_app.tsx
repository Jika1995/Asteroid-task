import '../styles/global.css'
import type { AppProps } from 'next/app';
import { queryClient } from '@/utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { Provider } from "react-redux";
import { store } from '@/store/store';


export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <MantineProvider
                        withGlobalStyles
                        withNormalizeCSS
                        theme={{
                            /** Put your mantine theme override here */
                            colorScheme: 'light',
                        }}
                    >
                        <Component {...pageProps} />
                    </MantineProvider>
                </QueryClientProvider>
            </Provider>
        </>

    )
}
