import { configureStore } from "@reduxjs/toolkit";
import { cartSlices } from "./slices/cart.slice";

export const store = configureStore({
    reducer: {
        cart: cartSlices.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
