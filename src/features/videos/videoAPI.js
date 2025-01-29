import axios from "../../Utils/axios";

export const getVideos = async()=>{
    const response = await axios.get('/videos');
    return response.data;
}