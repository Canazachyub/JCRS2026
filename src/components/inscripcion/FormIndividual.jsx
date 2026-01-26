import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { User, Mail, Phone, GraduationCap, Building2, Send } from 'lucide-react'
import Button from '../common/Button'
import { inscripcionService } from '../../services/inscripcion'
import { UNIVERSIDADES_SUR, CONCURSOS, PRECIOS } from '../../utils/constants'

const FormIndividual = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await inscripcionService.registrarIndividual(data)
      onSuccess?.(result)
      reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'input-field'
  const labelClass = 'block text-sm font-medium text-text-secondary mb-2'
  const errorClass = 'text-red-400 text-sm mt-1'

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Datos Personales */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <User className="w-5 h-5 text-primary-red" />
          Datos Personales
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Nombres *</label>
            <input
              {...register('nombres', { required: 'Este campo es requerido' })}
              className={inputClass}
              placeholder="Juan Carlos"
            />
            {errors.nombres && <p className={errorClass}>{errors.nombres.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Apellidos *</label>
            <input
              {...register('apellidos', { required: 'Este campo es requerido' })}
              className={inputClass}
              placeholder="Perez Garcia"
            />
            {errors.apellidos && <p className={errorClass}>{errors.apellidos.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>DNI *</label>
            <input
              {...register('dni', {
                required: 'Este campo es requerido',
                pattern: { value: /^\d{8}$/, message: 'DNI debe tener 8 digitos' },
              })}
              className={inputClass}
              placeholder="12345678"
              maxLength={8}
            />
            {errors.dni && <p className={errorClass}>{errors.dni.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Telefono *</label>
            <input
              {...register('telefono', {
                required: 'Este campo es requerido',
                pattern: { value: /^\d{9}$/, message: 'Telefono debe tener 9 digitos' },
              })}
              className={inputClass}
              placeholder="987654321"
              maxLength={9}
            />
            {errors.telefono && <p className={errorClass}>{errors.telefono.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass}>Email *</label>
          <input
            {...register('email', {
              required: 'Este campo es requerido',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalido' },
            })}
            type="email"
            className={inputClass}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Datos Academicos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary-red" />
          Datos Academicos
        </h3>

        <div>
          <label className={labelClass}>Universidad *</label>
          <select
            {...register('universidad', { required: 'Seleccione una universidad' })}
            className={inputClass}
          >
            <option value="">Seleccione...</option>
            {UNIVERSIDADES_SUR.map((uni) => (
              <option key={uni} value={uni}>{uni}</option>
            ))}
          </select>
          {errors.universidad && <p className={errorClass}>{errors.universidad.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Facultad</label>
            <input
              {...register('facultad')}
              className={inputClass}
              placeholder="Medicina Humana"
            />
          </div>

          <div>
            <label className={labelClass}>Ciclo/Ano</label>
            <input
              {...register('ciclo')}
              className={inputClass}
              placeholder="VIII"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>SOCEM (si aplica)</label>
          <input
            {...register('socem')}
            className={inputClass}
            placeholder="SOCIEM-UNSA"
          />
        </div>
      </div>

      {/* Tipo de Inscripcion */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary-red" />
          Tipo de Inscripcion
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(PRECIOS.individual).map(([key, value]) => (
            <label
              key={key}
              className="flex items-center gap-3 p-4 rounded-xl bg-bg-card border border-white/10 cursor-pointer hover:border-primary-red/50 transition-colors"
            >
              <input
                {...register('tipo_inscripcion', { required: 'Seleccione un tipo' })}
                type="radio"
                value={key}
                className="w-4 h-4 text-primary-red"
              />
              <div>
                <p className="text-white font-medium">{value.nombre}</p>
                <p className="text-primary-red font-bold">S/ {value.precio}</p>
              </div>
            </label>
          ))}
        </div>
        {errors.tipo_inscripcion && <p className={errorClass}>{errors.tipo_inscripcion.message}</p>}
      </div>

      {/* Concursos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Concursos (opcional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CONCURSOS.map((concurso) => (
            <label
              key={concurso.id}
              className="flex items-center gap-3 p-4 rounded-xl bg-bg-card border border-white/10 cursor-pointer hover:border-primary-red/50 transition-colors"
            >
              <input
                {...register('concursos')}
                type="checkbox"
                value={concurso.id}
                className="w-4 h-4 text-primary-red rounded"
              />
              <span className="text-white">{concurso.nombre}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Submit */}
      <Button type="submit" isLoading={isSubmitting} icon={Send} className="w-full">
        Enviar Inscripcion
      </Button>
    </motion.form>
  )
}

export default FormIndividual
