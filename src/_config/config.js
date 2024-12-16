import axios from "axios";

const api = axios.create({
    // baseURL: "https://ozarkbackend-production-4da6.up.railway.app/api"
    baseURL: "http://localhost:5000/api"
})

export default api;