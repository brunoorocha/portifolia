import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'http://localhost:5000'
})
