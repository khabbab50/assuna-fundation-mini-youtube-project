import axios from "axios";

const axiosInstace = axios.create({
        baseURL: 'http://localhost:9000/'
})

export default axiosInstace