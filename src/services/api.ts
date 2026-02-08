import axios from 'axios'
import { cryptoJsDecrypt } from '../utils/crypto'

export const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
})

api.interceptors.request.use(config => {
  const token = cryptoJsDecrypt<string>(localStorage.getItem('token'))

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})