import axios from 'axios'

export const tokenKey = 'access_token'

export const getAuthorizationHeader = () => {
  const token = localStorage.getItem(tokenKey)
  return {
    Authorization: `Bearer ${token}`
  }
}

export const ApiService = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

