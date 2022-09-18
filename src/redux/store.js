import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import followSlice from "./slices/followSlice";
import postSlice from "./slices/postSlice";
import friendSlice from './slices/friendSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        follow: followSlice,
        friend : friendSlice
    },
});