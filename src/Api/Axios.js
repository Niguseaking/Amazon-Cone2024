import axios from "axios";
const axiosInstance = axios.create({
    // to access in local 
    // baseURL:"http://127.0.0.1:5001/clone2024-a9417/us-central1/api",
    //  deployed version of firebase functions
    // baseURL: "https://console.firebase.google.com/project/clone2024-a9417/functions",
    //deployed version of  amazon to access using render.com
    baseURL: "https://amazon-api-backdeploy2024.onrender.com/",
})

export {axiosInstance};