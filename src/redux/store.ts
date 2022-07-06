import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import threadsReducer from './threadsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        threads: threadsReducer
    }
});

// eslint-disable-next-line
export type TRootState = ReturnType<typeof store.getState>;
export default store;
