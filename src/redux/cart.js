import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.items.push(product);
            state.total += product.Price;
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const product = state.items.find(item => item.ID === productId);
            if (product) {
                state.items = state.items.filter(item => item.ID !== productId);
                state.total -= product.Price;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;
