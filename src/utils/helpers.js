import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date, formatStr = 'dd/MM/yyyy') => {
  if (!date) return ''
  const parsedDate = typeof date === 'string' ? parseISO(date) : date
  return format(parsedDate, formatStr, { locale: es })
}

export const formatCurrency = (amount, currency = 'PEN') => {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const capitalizeFirst = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export const generateId = () => {
  return Math.random().toString(36).substring(2, 15)
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
