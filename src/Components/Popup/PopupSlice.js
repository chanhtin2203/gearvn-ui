import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
};

export const popupSlice = createSlice({
    name: 'popupSlice',
    initialState,
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        remove: (state) => {
            state.value = null;
        },
    },
});

export const { set, remove } = popupSlice.actions;

export default popupSlice.reducer
