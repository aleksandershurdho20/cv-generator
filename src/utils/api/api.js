import axios from "axios";
import { interceptorRequest } from "config/interceptors";
const BASE_URL = "http://localhost:8000/api/";


export const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true
});


api.interceptors.request.use(interceptorRequest)
