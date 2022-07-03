import { configureStore } from '@reduxjs/toolkit';

import PopupSliceReducer from '~/Layout/Popup/PopupSlice';

export const store = configureStore({
    reducer: {
        popupSlice: PopupSliceReducer,
    },
});
