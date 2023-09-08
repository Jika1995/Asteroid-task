import { Asteroid } from '@/utils/types';
import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export type CartItem = Asteroid

export const cartItemAdapter = createEntityAdapter<CartItem>({
    selectId: (item) => item.id,
    sortComparer: (a, b) => a.id.localeCompare(b.id),
});

export const cartSlices = createSlice({
    name: 'cartSlice',
    initialState: cartItemAdapter.getInitialState(),
    reducers: {
        addToCart: (state, { payload }: PayloadAction<CartItem>) => {

            const id = cartItemAdapter.selectId(payload);
            // console.log(id);

            if (id) {
                if (state.ids.includes(id)) {
                    cartItemAdapter.removeOne(state, id);
                    return
                }
            }

            cartItemAdapter.addOne(state, {
                ...payload
            })

            console.log(state.ids);

        },

        clearCart: cartItemAdapter.removeAll,

    }
})

export const {
    actions: {
        addToCart,
        clearCart,
    },
} = cartSlices;