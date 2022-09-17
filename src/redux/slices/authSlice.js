import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: "idle",
    isLoggedIn: false,
    user: {}
}

const URL = "http://localhost:4000";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData) => {
        const {data} = await axios.post(`${URL}/auth/login`,userData);
        return data;
    }
);

export const getProfile = createAsyncThunk(
    "auth/getProfile", 
    async (id) => {
        const { data } = await axios.get(`${URL}/api/profile/` + id);
        return data;
    }
);
  

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [loginUser.fulfilled]: (state, action) => {
            const token = action.payload.token;
            localStorage.setItem("token",token)
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.user.id = action.payload.id;
            state.status = 'success';
            state.isLoggedIn = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.status = 'failed'
            state.isLoggedIn = false
        }
    }
});

export default authSlice.reducer;
export const {setAuth} = authSlice.actions;
