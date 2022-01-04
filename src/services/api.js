import axios from 'axios'

const api = axios.create({
    baseURL: "https://cronometro-codeso-2-calires.herokuapp.com"
})

export default api