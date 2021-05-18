import axios from "axios";

const api = axios.create({
    baseURL: "https://randomuser.me",
    timeout: 5000,
    headers: {
        "Content-Type": "aplication/json",
    }
});

export default api;