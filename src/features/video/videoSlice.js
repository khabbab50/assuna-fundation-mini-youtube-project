import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "../video/videoAPI";

export const featchVideo = createAsyncThunk('videos/featchVideo', async(id)=>{
    const video = await getVideo(id);
    return video
})

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        video: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder
        .addCase(featchVideo.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(featchVideo.fulfilled, (state, action)=>{
            state.video = action.payload;
            state.isLoading = false;
        })
        .addCase(featchVideo.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default videoSlice.reducer