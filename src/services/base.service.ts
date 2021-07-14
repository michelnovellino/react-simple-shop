import axios from "axios";
const url = 'https://fakestoreapi.com';

const instance = axios.create({
    baseURL: url,
    headers: {
        'content-type': 'application/json',
    },
});

export default instance;