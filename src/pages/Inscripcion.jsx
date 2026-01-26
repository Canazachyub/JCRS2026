import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Users, Search, ArrowLeft, CheckCircle } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import FormIndividual from '../components/inscripcion/FormIndividual'
import FormCorporativo from '../components/inscripcion/FormCorporativo'
import PaymentInfo from '../components/inscripcion/PaymentInfo'

const tabs = [
  { id: 'individual', label: 'Individual', icon: User },
  { id: 'corporativo', label: 'Corporativo', icon: Users },
  { id: 'consultar', label: 'Consultar', icon: Search },
]

const Inscripcion = () => {
  const { tipo } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(tipo || 'individual')
  const [successData, setSuccessData] = useState(null)

  const handleSuccess = (data) => {
    setSuccessData(data)
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSuccessData(null)
    navigate(`/inscripcion/${tabId}`)
  }

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
              Inscripcion
            </h1>
            <p className="text-text-secondary">
              XXIX Jornada Cientifica Regional Sur - Arequipa 2026
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-2 mb-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-red text-white'
                    : 'bg-bg-card text-text-secondary hover:text-white hover:bg-bg-card/80'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card hover={false}>
              {successData ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Inscripcion Exitosa
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Tu codigo de inscripcion es:
                  </p>
                  <p className="text-2xl font-mono font-bold text-primary-red mb-6">
                    {successData.codigo}
                  </p>
                  <p className="text-text-muted text-sm mb-6">
                    Hemos enviado los detalles a tu correo electronico
                  </p>
                  <Button onClick={() => setSuccessData(null)}>
                    Nueva Inscripcion
                  </Button>
                </motion.div>
              ) : (
                <>
                  {activeTab === 'individual' && (
                    <FormIndividual onSuccess={handleSuccess} />
                  )}
                  {activeTab === 'corporativo' && (
                    <FormCorporativo onSuccess={handleSuccess} />
                  )}
                  {activeTab === 'consultar' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white">
                        Consultar Inscripcion
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                          Ingresa tu DNI
                        </label>
                        <input
                          type="text"
                          placeholder="12345678"
                          maxLength={8}
                          className="input-field"
                        />
                      </div>
                      <Button className="w-full" icon={Search}>
                        Buscar
                      </Button>
                    </div>
                  )}
                </>
              )}
            </Card>

            {/* Payment Info */}
            <Card hover={false}>
              <PaymentInfo />
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Inscripcion
