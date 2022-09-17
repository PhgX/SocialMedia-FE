import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    friendStatus : "idle",
    friend :[],

 }

 export const getFriend = createAsyncThunk(
    "friend/getFriend",
    async(id) => {
        const {data} = await axios.get("http://localhost:4000/auth/fiend" + id);
        return data
    }
 )

 export const friendSlice = createSlice({
    name : "friend",
    initialState,
    reducers :{},
    extraReducers : {
        [getFriend.pending] : (state,action) => {
            state.friendStatus = "loading";
        },
        [getFriend.fulfilled] : (state,action) => {
            state.friendStatus = "success";
            state.friend = action.payload.response.friend
        },
        [getFriend.rejected] : (state,action) => {
            state.friendStatus = "failed"
        }
    }
 })

 export default friendSlice.reducer;