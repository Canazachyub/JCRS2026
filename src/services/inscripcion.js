import { apiService } from './api'

export const inscripcionService = {
  registrarIndividual: async (data) => {
    return apiService.post('inscripcion/individual', data)
  },

  registrarCorporativo: async (data) => {
    return apiService.post('inscripcion/corporativo', data)
  },

  consultarPorDni: async (dni) => {
    return apiService.get('inscripcion/consultar', { dni })
  },

  verificarPago: async (data) => {
    return apiService.post('pagos/verificar', data)
  },

  obtenerEstadisticas: async () => {
    return apiService.get('estadisticas')
  },
}

export default inscripcionService
