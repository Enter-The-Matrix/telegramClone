import { configureStore } from '@reduxjs/toolkit';
import appDrawerSlice from './slice/appDrawerSlice';

export const reduxStore = configureStore({
    reducer: {
        appDrawer: appDrawerSlice
    },
});

