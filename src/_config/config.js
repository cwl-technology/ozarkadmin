import axios from "axios";

const api = axios.create({
    baseURL: "https://ozarkbackend-production-4da6.up.railway.app/api"
})

export default api;