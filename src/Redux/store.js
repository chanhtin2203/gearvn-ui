import { configureStore } from '@reduxjs/toolkit';

import PopupSliceReducer from '~/Components/Popup/PopupSlice';

export const store = configureStore({
    reducer: {
        popupSlice: PopupSliceReducer,
    },
});
