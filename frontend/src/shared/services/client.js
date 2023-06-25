import axios from "axios";

const axiosInstance = axios.create();

const httpConfig = () => {
    return {
        baseURL: 'http://localhost:3000/api',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        withCredentials: false
    }
}

const client = {
    get: (url) => axiosInstance.get(url, httpConfig()),
}

export default client;