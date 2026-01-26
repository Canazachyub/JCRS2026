export const validators = {
  required: (value) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return 'Este campo es requerido'
    }
    return null
  },

  email: (value) => {
    if (!value) return null
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return 'Ingrese un email válido'
    }
    return null
  },

  dni: (value) => {
    if (!value) return null
    if (!/^\d{8}$/.test(value)) {
      return 'El DNI debe tener 8 dígitos'
    }
    return null
  },

  telefono: (value) => {
    if (!value) return null
    if (!/^\d{9}$/.test(value.replace(/\s/g, ''))) {
      return 'El teléfono debe tener 9 dígitos'
    }
    return null
  },

  minLength: (min) => (value) => {
    if (!value) return null
    if (value.length < min) {
      return `Debe tener al menos ${min} caracteres`
    }
    return null
  },

  maxLength: (max) => (value) => {
    if (!value) return null
    if (value.length > max) {
      return `No debe exceder ${max} caracteres`
    }
    return null
  },

  pattern: (regex, message) => (value) => {
    if (!value) return null
    if (!regex.test(value)) {
      return message || 'Formato inválido'
    }
    return null
  },
}

export const validateForm = (data, rules) => {
  const errors = {}

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field]
    const value = data[field]

    for (const rule of fieldRules) {
      const error = rule(value)
      if (error) {
        errors[field] = error
        break
      }
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
