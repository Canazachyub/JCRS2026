import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.error || error.message || 'Error de conexion'
    return Promise.reject(new Error(message))
  }
)

export const apiService = {
  get: (action, params = {}) => {
    return api.get('', { params: { action, ...params } })
  },

  post: (action, data) => {
    return api.post('', { action, ...data })
  },
}

export default api
