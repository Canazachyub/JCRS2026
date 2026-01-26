import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FileText,
  Download,
  ArrowLeft,
  FlaskConical,
  Stethoscope,
  BookOpen,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { BASES_CIENTIFICAS, CRONOGRAMA_CASOS_CLINICOS } from '../utils/constants'

const basesData = {
  trabajos: {
    title: 'Trabajos de Investigación',
    icon: FileText,
    description: 'Bases para la presentación de trabajos de investigación originales',
    downloadUrl: BASES_CIENTIFICAS.trabajo.url,
    requirements: [
      'Ser estudiante de pregrado de Medicina Humana (incluyendo internado)',
      'El trabajo debe ser original e inédito',
      'Máximo 4 trabajos por autor en total (TI, PI y CC combinados)',
      'Seguir formato IMRaD',
      'Certificado de curso de ética del autor corresponsal y expositor',
    ],
    deadlines: [
      { label: 'Recepción de documentación', date: '19/01/26 - 11/02/26' },
      { label: 'Prórroga (5% descuento)', date: '12/02/26 - 15/02/26' },
      { label: 'Envío de observaciones', date: '22/02/26 - 23/02/26' },
      { label: 'Carta de aceptación', date: '28/02/26 - 01/03/26' },
    ],
  },
  protocolos: {
    title: 'Protocolos de Investigación',
    icon: FlaskConical,
    description: 'Bases para la presentación de protocolos de investigación',
    downloadUrl: BASES_CIENTIFICAS.protocolo.url,
    requirements: [
      'Ser estudiante de pregrado de Medicina Humana (incluyendo internado)',
      'Protocolo aprobado por comité de ética institucional',
      'Máximo 4 trabajos por autor en total (TI, PI y CC combinados)',
      'No haber iniciado recolección de datos',
      'Certificado de curso de ética del autor corresponsal y expositor',
    ],
    deadlines: [
      { label: 'Recepción de documentación', date: '19/01/26 - 11/02/26' },
      { label: 'Prórroga (5% descuento)', date: '12/02/26 - 15/02/26' },
      { label: 'Envío de observaciones', date: '22/02/26 - 23/02/26' },
      { label: 'Carta de aceptación', date: '28/02/26 - 01/03/26' },
    ],
  },
  'casos-clinicos': {
    title: 'Casos Clínicos',
    icon: Stethoscope,
    description: 'Bases para la presentación de casos clínicos',
    downloadUrl: BASES_CIENTIFICAS.casosClinicos.url,
    requirements: [
      'Ser estudiante de pregrado de Medicina Humana (incluyendo internado)',
      'Contar con consentimiento informado del paciente (obligatorio en Fase II)',
      'Anonimización total del paciente',
      'Máximo 4 trabajos por autor en total (TI, PI y CC combinados)',
      'Certificado de curso de ética del autor corresponsal y expositor',
      'Seguir guías CARE (Case Report Guidelines)',
    ],
    deadlines: [
      { label: 'FASE I - Recepción documentación', date: '19/01/26 - 11/02/26' },
      { label: 'FASE I - Prórroga (5% descuento)', date: '12/02/26 - 15/02/26' },
      { label: 'FASE II - Recepción diapositivas', date: '02/03/26 - 04/03/26' },
      { label: 'FASE II - Exposición clasificatoria', date: '06/03/26 - 07/03/26' },
      { label: 'FASE FINAL - Exposición oral (TOP 5)', date: '08/03/26' },
    ],
  },
  atlas: {
    title: 'Atlas Científico',
    icon: BookOpen,
    description: 'Bases para el concurso de Atlas Científico',
    downloadUrl: BASES_CIENTIFICAS.atlas.url,
    requirements: [
      'Ser estudiante de pregrado de Medicina Humana',
      'Imágenes de alta calidad y relevancia científica',
      'Descripción detallada del contenido visual',
      'Material original o con permisos correspondientes',
    ],
    deadlines: [
      { label: 'Recepción de documentación', date: '19/01/26 - 11/02/26' },
      { label: 'Presentación Atlas', date: '08/03/26' },
    ],
  },
}

const categories = [
  { id: 'trabajos', label: 'Trabajos de Investigación', icon: FileText },
  { id: 'protocolos', label: 'Protocolos', icon: FlaskConical },
  { id: 'casos-clinicos', label: 'Casos Clínicos', icon: Stethoscope },
  { id: 'atlas', label: 'Atlas Científico', icon: BookOpen },
]

const Bases = () => {
  const { categoria } = useParams()
  const navigate = useNavigate()
  const bases = categoria ? basesData[categoria] : null

  if (!bases) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Navbar />

        <main className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
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
                Bases del Concurso
              </h1>
              <p className="text-text-secondary">
                Selecciona una categoría para ver las bases completas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    onClick={() => navigate(`/bases/${cat.id}`)}
                    className="cursor-pointer text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary-red/20 flex items-center justify-center mx-auto mb-4">
                      <cat.icon className="w-8 h-8 text-primary-red" />
                    </div>
                    <h3 className="text-white font-semibold">{cat.label}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  const Icon = bases.icon

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <Button
              variant="ghost"
              icon={ArrowLeft}
              onClick={() => navigate('/bases')}
              className="mb-4"
            >
              Volver a categorías
            </Button>

            <div className="w-20 h-20 rounded-full bg-primary-red/20 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-10 h-10 text-primary-red" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {bases.title}
            </h1>
            <p className="text-text-secondary">{bases.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requisitos */}
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-white mb-4">Requisitos</h3>
              <ul className="space-y-3">
                {bases.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* Fechas */}
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-white mb-4">Fechas Importantes</h3>
              <div className="space-y-4">
                {bases.deadlines.map((deadline, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-lg bg-bg-secondary"
                  >
                    <p className="text-text-secondary text-sm">{deadline.label}</p>
                    <p className="text-white font-semibold">{deadline.date}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href={bases.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" icon={ExternalLink}>
                Ver Bases Completas (Google Drive)
              </Button>
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Bases
