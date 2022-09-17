import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import friendSlice from "./slices/friendSlice";



export const store = configureStore({
    reducer: {
        auth: authSlice,
        friend : friendSlice

    }
})