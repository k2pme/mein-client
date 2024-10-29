import axios from "axios";



const api = axios.create({
    
    baseURL : process.env.MANGADEX_URL,
    headers : {

        Authorization : `Bearer ${process.env.MANGADEX_API_KEY}`,
        'Content-Type': 'application/json',
    }
})


export default api;