import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'

const Programa = () => {
  const navigate = useNavigate()

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

          {/* Por Confirmar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-16"
          >
            <div className="w-24 h-24 rounded-full bg-primary-green/20 flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-primary-green" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Por Confirmar
            </h2>

            <p className="text-text-secondary text-center max-w-md mb-8">
              El programa detallado del evento será publicado próximamente.
              Mantente atento a nuestras redes sociales para conocer las actualizaciones.
            </p>

            <div className="flex items-center gap-2 text-primary-green">
              <Clock className="w-5 h-5" />
              <span className="font-medium">6, 7 y 8 de Marzo de 2026</span>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 rounded-xl bg-bg-card border border-primary-green/20"
          >
            <p className="text-text-secondary text-center">
              El programa oficial será publicado próximamente. Te notificaremos cuando esté disponible.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Programa
