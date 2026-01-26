import { useState, useCallback } from 'react'
import api from '../services/api'

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(async (apiFunc, ...args) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await apiFunc(...args)
      return result
    } catch (err) {
      setError(err.message || 'Error en la solicitud')
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { isLoading, error, execute, clearError }
}

export default useApi
