import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '991884e1431b21661b4723ca4f451235',
        language: 'en-US'
    }
})

export default movieDB