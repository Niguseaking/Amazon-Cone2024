import axios from "axios";
const axiosInstance = axios.create({
    // baseURL:"http://127.0.0.1:5001/clone2024-a9417/us-central1/api",
    baseURL: "https://console.firebase.google.com/project/clone2024-a9417/functions",
})

export {axiosInstance};