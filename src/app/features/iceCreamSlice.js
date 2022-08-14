import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfIceCream: 15,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        order: (state) => {
            state.numberOfIceCream -= 1;
        },

        restock: (state, actions) => {
            state.numberOfIceCream += actions.payload;
        },
    },
    extraReducers: {
        "cake/ordered": (state) => {
            state.numberOfIceCream--;
        },
    },
});

export default iceCreamSlice.reducer;
export const { order, restock } = iceCreamSlice.actions;
