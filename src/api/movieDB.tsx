import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f6e6f92b39fb4362c2e5e221dcdd1c55',
        language: 'es-ES'
    }
})

export default movieDB