import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search/searchSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videoSlice";

export const store = configureStore({
    reducer:{
        videos: videosSlice,
        video: videoSlice,
        search: searchSlice
    }
})