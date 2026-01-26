import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Trophy, Medal, Award, ArrowLeft } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'
import Card from '../components/common/Card'

const premios = [
  {
    categoria: 'Trabajos de Investigacion',
    lugares: [
      { puesto: '1er Lugar', premio: 'S/ 1,500 + Certificado + Trofeo', icon: Trophy, color: 'text-yellow-400' },
      { puesto: '2do Lugar', premio: 'S/ 1,000 + Certificado + Medalla', icon: Medal, color: 'text-gray-300' },
      { puesto: '3er Lugar', premio: 'S/ 500 + Certificado + Medalla', icon: Award, color: 'text-orange-400' },
    ],
  },
  {
    categoria: 'Protocolos de Investigacion',
    lugares: [
      { puesto: '1er Lugar', premio: 'S/ 1,000 + Certificado + Trofeo', icon: Trophy, color: 'text-yellow-400' },
      { puesto: '2do Lugar', premio: 'S/ 700 + Certificado + Medalla', icon: Medal, color: 'text-gray-300' },
      { puesto: '3er Lugar', premio: 'S/ 400 + Certificado + Medalla', icon: Award, color: 'text-orange-400' },
    ],
  },
  {
    categoria: 'Casos Clinicos',
    lugares: [
      { puesto: '1er Lugar', premio: 'S/ 800 + Certificado + Trofeo', icon: Trophy, color: 'text-yellow-400' },
      { puesto: '2do Lugar', premio: 'S/ 500 + Certificado + Medalla', icon: Medal, color: 'text-gray-300' },
      { puesto: '3er Lugar', premio: 'S/ 300 + Certificado + Medalla', icon: Award, color: 'text-orange-400' },
    ],
  },
]

const Concurso = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Button
              variant="ghost"
              icon={ArrowLeft}
              onClick={() => navigate('/')}
              className="mb-4"
            >
              Volver al inicio
            </Button>

            <div className="w-20 h-20 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-accent-gold" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Premios y Reconocimientos
            </h1>
            <p className="text-text-secondary">
              Conoce los premios para los mejores trabajos
            </p>
          </motion.div>

          <div className="space-y-8">
            {premios.map((categoria, catIndex) => (
              <motion.div
                key={categoria.categoria}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary-red rounded-full" />
                  {categoria.categoria}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {categoria.lugares.map((lugar, index) => (
                    <Card key={index} className="text-center">
                      <lugar.icon className={`w-12 h-12 mx-auto mb-3 ${lugar.color}`} />
                      <h3 className="text-white font-bold text-lg mb-2">{lugar.puesto}</h3>
                      <p className="text-text-secondary text-sm">{lugar.premio}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 rounded-xl bg-gradient-to-r from-primary-red/10 to-secondary-blue/10 border border-white/10 text-center"
          >
            <h3 className="text-white font-semibold mb-2">Menciones Honrosas</h3>
            <p className="text-text-secondary">
              Ademas, se otorgaran menciones honrosas y certificados de participacion a todos los trabajos presentados.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Concurso
