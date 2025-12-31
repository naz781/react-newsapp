// import axios from "axios";

// const api = axios.create({
//     baseURL: 'https://gnews.io/api/v4',
//     // baseURL: 'https://newsapi.org/v2',
//     timeout: 5000,
// })
// export default api;
import axios from 'axios';

const api = axios.create({
    // IMPORTANT: Set this to '/' or leave it out. 
    // This tells axios to look for the /api folder on YOUR website.
    baseURL: '/',
});

export default api;