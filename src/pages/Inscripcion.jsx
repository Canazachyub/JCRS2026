import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle, Phone, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import {
  INSCRIPCION_URL,
  PASOS_INSCRIPCION,
  PREINSCRIPCION,
  INSCRIPCION_REGULAR,
  LINKS,
  IMAGES,
} from '../utils/constants'

const Inscripcion = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${IMAGES.paisajeMisti}')`,
          }}
        />
        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-green/90 via-primary-green/70 to-bg-primary/95" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
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
              className="mb-4 text-white hover:bg-white/20"
            >
              Volver al inicio
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Inscripción
            </h1>
            <p className="text-white/90 drop-shadow">
              XXIX Jornada Científica Regional Sur - Arequipa 2026
            </p>
          </motion.div>

          {/* Main Button - INSCRIBIRME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <a
              href={INSCRIPCION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-green hover:bg-primary-light text-white font-bold text-xl py-5 px-12 rounded-2xl transition-all duration-300 shadow-lg shadow-primary-green/50 hover:shadow-xl hover:shadow-primary-green/60 hover:scale-105 border-2 border-white/30"
            >
              <ExternalLink className="w-6 h-6" />
              INSCRIBIRME
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pb-16 px-4 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          {/* Pasos para inscribirse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 -mt-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-primary-green rounded-full" />
              Pasos para Inscribirme
            </h2>

            <div className="space-y-4">
              {PASOS_INSCRIPCION.map((paso, index) => (
                <motion.div
                  key={paso.numero}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex gap-4 p-4 rounded-xl bg-bg-card/90 backdrop-blur-sm border border-white/10 hover:border-primary-green/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-white font-bold">
                    {paso.numero}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{paso.titulo}</h3>
                    <p className="text-text-secondary text-sm">{paso.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tablas de Precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Preinscripciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card hover={false} className="h-full">
                <h3 className="text-xl font-bold text-primary-green mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  PREINSCRIPCIONES
                </h3>
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <table className="w-full text-sm">
                    <thead className="bg-primary-green/20">
                      <tr>
                        <th className="text-left p-3 text-primary-green font-semibold">Tipo</th>
                        <th className="text-left p-3 text-primary-green font-semibold">Fecha</th>
                        <th className="text-right p-3 text-primary-green font-semibold">Costo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PREINSCRIPCION.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-white">{item.tipo}</td>
                          <td className="p-3 text-text-secondary text-xs">{item.fecha}</td>
                          <td className="p-3 text-accent-gold font-bold text-right">S/ {item.precio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            {/* Inscripciones Regulares */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card hover={false} className="h-full">
                <h3 className="text-xl font-bold text-primary-blue mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  INSCRIPCIONES
                </h3>
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <table className="w-full text-sm">
                    <thead className="bg-primary-blue/20">
                      <tr>
                        <th className="text-left p-3 text-primary-blue font-semibold">Tipo</th>
                        <th className="text-left p-3 text-primary-blue font-semibold">Fecha Regular</th>
                        <th className="text-right p-3 text-primary-blue font-semibold">Costo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {INSCRIPCION_REGULAR.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-white">{item.tipo}</td>
                          <td className="p-3 text-text-secondary text-xs">{item.fecha}</td>
                          <td className="p-3 text-accent-gold font-bold text-right">S/ {item.precio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contacto / Dudas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Card hover={false} className="inline-block">
              <div className="flex items-center gap-3 text-text-secondary">
                <AlertCircle className="w-5 h-5 text-accent-gold" />
                <span>Dudas o consultas a</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3">
                <a
                  href={`tel:${LINKS.contacto.telefono1.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-primary-green hover:text-primary-light transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {LINKS.contacto.telefono1}
                </a>
                <span className="hidden sm:inline text-text-muted">o</span>
                <a
                  href={`tel:${LINKS.contacto.telefono2.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-primary-green hover:text-primary-light transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  {LINKS.contacto.telefono2}
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Inscripcion
