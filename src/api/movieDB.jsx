import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APP_KEY,
        language: 'en-US'
    }
})

export default movieDB