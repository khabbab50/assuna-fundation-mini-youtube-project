import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videoAPI";

export const featchVideos = createAsyncThunk('videos/featchVideos', async()=>{
    const videos = await getVideos();
    return videos
})

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder
        .addCase(featchVideos.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(featchVideos.fulfilled, (state, action)=>{
            state.videos = action.payload;
            state.isLoading = false;
        })
        .addCase(featchVideos.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default videoSlice.reducer