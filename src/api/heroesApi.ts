import axios from 'axios';

export const heroesApi = axios.create({
    baseURL: 'https://superheroapi.com'
})
