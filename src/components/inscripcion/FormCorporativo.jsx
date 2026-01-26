import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Users, Mail, Building2, Send } from 'lucide-react'
import Button from '../common/Button'
import { inscripcionService } from '../../services/inscripcion'
import { PRECIOS } from '../../utils/constants'

const FormCorporativo = ({ onSuccess }) => {
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
      const result = await inscripcionService.registrarCorporativo(data)
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
      {/* Datos de la SOCEM */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary-red" />
          Datos de la SOCEM
        </h3>

        <div>
          <label className={labelClass}>Nombre de la SOCEM *</label>
          <input
            {...register('socem', { required: 'Este campo es requerido' })}
            className={inputClass}
            placeholder="SOCIEM-UNSA"
          />
          {errors.socem && <p className={errorClass}>{errors.socem.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Representante *</label>
            <input
              {...register('representante', { required: 'Este campo es requerido' })}
              className={inputClass}
              placeholder="Nombre del representante"
            />
            {errors.representante && <p className={errorClass}>{errors.representante.message}</p>}
          </div>

          <div>
            <label className={labelClass}>Email de contacto *</label>
            <input
              {...register('email_contacto', {
                required: 'Este campo es requerido',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email invalido' },
              })}
              type="email"
              className={inputClass}
              placeholder="socem@universidad.edu.pe"
            />
            {errors.email_contacto && <p className={errorClass}>{errors.email_contacto.message}</p>}
          </div>
        </div>
      </div>

      {/* Cantidad de Participantes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Users className="w-5 h-5 text-primary-red" />
          Cantidad de Participantes
        </h3>

        <div>
          <label className={labelClass}>Numero de participantes *</label>
          <input
            {...register('cantidad_participantes', {
              required: 'Este campo es requerido',
              min: { value: 5, message: 'Minimo 5 participantes' },
            })}
            type="number"
            className={inputClass}
            placeholder="15"
            min={5}
          />
          {errors.cantidad_participantes && (
            <p className={errorClass}>{errors.cantidad_participantes.message}</p>
          )}
        </div>
      </div>

      {/* Tipo de Paquete */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Selecciona tu Paquete</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(PRECIOS.corporativo).map(([key, value]) => (
            <label
              key={key}
              className="flex flex-col items-center p-6 rounded-xl bg-bg-card border border-white/10 cursor-pointer hover:border-primary-red/50 transition-colors text-center"
            >
              <input
                {...register('tipo_paquete', { required: 'Seleccione un paquete' })}
                type="radio"
                value={key}
                className="w-4 h-4 text-primary-red mb-3"
              />
              <p className="text-white font-semibold mb-1">{value.nombre}</p>
              <p className="text-primary-red font-bold text-2xl">S/ {value.precio}</p>
              <p className="text-text-muted text-sm mt-1">por SOCEM</p>
            </label>
          ))}
        </div>
        {errors.tipo_paquete && <p className={errorClass}>{errors.tipo_paquete.message}</p>}
      </div>

      {/* Notas adicionales */}
      <div>
        <label className={labelClass}>Notas adicionales</label>
        <textarea
          {...register('notas')}
          className={`${inputClass} min-h-[100px]`}
          placeholder="Informacion adicional que desee compartir..."
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Info */}
      <div className="p-4 rounded-xl bg-secondary-blue/10 border border-secondary-blue/30">
        <p className="text-secondary-blue text-sm">
          Despues de enviar el formulario, te contactaremos para coordinar la lista de participantes
          y los detalles del pago.
        </p>
      </div>

      {/* Submit */}
      <Button type="submit" isLoading={isSubmitting} icon={Send} className="w-full">
        Solicitar Inscripcion Corporativa
      </Button>
    </motion.form>
  )
}

export default FormCorporativo
