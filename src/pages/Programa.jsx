import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'

const schedule = [
  {
    date: '06 de Marzo',
    day: 'Viernes',
    events: [
      { time: '08:00 - 09:00', title: 'Registro y Acreditación', location: 'Hall Principal', type: 'registro' },
      { time: '09:00 - 10:00', title: 'Ceremonia de Inauguración', location: 'Auditorio Principal', type: 'ceremonia' },
      { time: '10:00 - 12:00', title: 'Conferencia Magistral de Apertura', location: 'Auditorio Principal', type: 'conferencia' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 16:00', title: 'Exposición Oral Clasificatoria - Casos Clínicos (TOP 25)', location: 'Auditorio Principal', type: 'presentacion' },
      { time: '14:00 - 16:00', title: 'Presentación de Trabajos de Investigación', location: 'Auditorio A', type: 'presentacion' },
    ],
  },
  {
    date: '07 de Marzo',
    day: 'Sábado',
    events: [
      { time: '09:00 - 12:00', title: 'Exposición Oral Clasificatoria - Casos Clínicos (Continuación)', location: 'Auditorio Principal', type: 'presentacion' },
      { time: '09:00 - 12:00', title: 'Presentación de Protocolos de Investigación', location: 'Auditorio A', type: 'presentacion' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 16:00', title: 'Talleres y Simposios', location: 'Aulas', type: 'taller' },
      { time: '20:00 - 24:00', title: 'Noche Cultural', location: 'Por confirmar', type: 'social' },
    ],
  },
  {
    date: '08 de Marzo',
    day: 'Domingo',
    events: [
      { time: '08:45', title: 'Fecha límite envío presentación final (opcional)', location: 'Virtual', type: 'registro' },
      { time: '09:00 - 12:00', title: 'Exposición Oral Final - Casos Clínicos (TOP 5)', location: 'Auditorio Principal', type: 'presentacion' },
      { time: '09:00 - 12:00', title: 'Presentación Atlas Científico', location: 'Auditorio B', type: 'presentacion' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 16:00', title: 'Asamblea Regional SOCIMEP', location: 'Auditorio Principal', type: 'asamblea' },
      { time: '16:00 - 17:30', title: 'Premiación', location: 'Auditorio Principal', type: 'ceremonia' },
      { time: '17:30 - 18:30', title: 'Ceremonia de Clausura', location: 'Auditorio Principal', type: 'ceremonia' },
    ],
  },
  {
    date: '09 de Marzo',
    day: 'Lunes',
    events: [
      { time: '09:00 - 12:00', title: 'Simposio: Enfermedades Crónicas', location: 'Auditorio Principal', type: 'simposio' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 17:00', title: 'Talleres de Investigación', location: 'Aulas', type: 'taller' },
    ],
  },
  {
    date: '10 de Marzo',
    day: 'Martes',
    events: [
      { time: '09:00 - 12:00', title: 'Simposio: Enfermedades Infecciosas', location: 'Auditorio Principal', type: 'simposio' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 17:00', title: 'Mesa Redonda: Salud Pública y APS', location: 'Auditorio A', type: 'conferencia' },
    ],
  },
  {
    date: '11 de Marzo',
    day: 'Miércoles',
    events: [
      { time: '09:00 - 12:00', title: 'Simposio: Oncología y Manejo Integral', location: 'Auditorio Principal', type: 'simposio' },
      { time: '12:00 - 14:00', title: 'Almuerzo', location: 'Comedor', type: 'break' },
      { time: '14:00 - 16:00', title: 'Conferencia de Clausura', location: 'Auditorio Principal', type: 'conferencia' },
      { time: '16:00 - 17:00', title: 'Entrega de Certificados', location: 'Hall Principal', type: 'ceremonia' },
    ],
  },
]

const typeColors = {
  registro: 'border-l-accent-gold',
  ceremonia: 'border-l-primary-red',
  conferencia: 'border-l-secondary-blue',
  taller: 'border-l-accent-purple',
  presentacion: 'border-l-accent-green',
  break: 'border-l-text-muted',
  social: 'border-l-pink-500',
  simposio: 'border-l-cyan-500',
  asamblea: 'border-l-orange-500',
}

const Programa = () => {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Button
              variant="ghost"
              icon={ArrowLeft}
              onClick={() => navigate('/')}
              className="mb-4"
            >
              Volver al inicio
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Programa del Evento
            </h1>
            <p className="text-text-secondary">
              Cronograma de actividades - JCRS Arequipa 2026
            </p>
          </motion.div>

          {/* Day Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-4 py-3 rounded-xl transition-all ${
                  selectedDay === index
                    ? 'bg-primary-red text-white'
                    : 'bg-bg-card text-text-secondary hover:text-white'
                }`}
              >
                <p className="font-semibold">{day.day}</p>
                <p className="text-sm opacity-80">{day.date}</p>
              </button>
            ))}
          </motion.div>

          {/* Schedule */}
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {schedule[selectedDay].events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl bg-bg-card border border-white/10 border-l-4 ${typeColors[event.type]}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-text-secondary min-w-[120px]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{event.title}</h3>
                    <div className="flex items-center gap-2 text-text-muted text-sm mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 rounded-xl bg-bg-card/50 border border-white/10"
          >
            <p className="text-text-muted text-sm text-center">
              El programa puede estar sujeto a cambios. Te notificaremos cualquier actualizacion.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Programa
