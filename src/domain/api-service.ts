import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'http://localhost:5000'
})

export const getAuthorizationHeader = () => {
  const token = localStorage.getItem(tokenKey)
  return {
    Authorization: `Bearer ${token}`
  }
}

export const tokenKey = 'access_token'
