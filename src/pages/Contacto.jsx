import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, ArrowLeft, MessageCircle } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { LINKS, EVENT_CONFIG } from '../utils/constants'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: LINKS.contacto.email,
    href: `mailto:${LINKS.contacto.email}`,
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: LINKS.contacto.telefono,
    href: `tel:${LINKS.contacto.telefono}`,
  },
  {
    icon: MapPin,
    label: 'Ubicacion',
    value: `${EVENT_CONFIG.location.city}, ${EVENT_CONFIG.location.country}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Comunidad JCRS',
    href: LINKS.social.whatsapp,
    external: true,
  },
]

const Contacto = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulacion de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' })
    alert('Mensaje enviado correctamente')
  }

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

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Contacto
            </h1>
            <p className="text-text-secondary">
              Tienes alguna pregunta? Estamos aqui para ayudarte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-white mb-4">Informacion de Contacto</h2>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.external ? '_blank' : undefined}
                      rel={info.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/10 hover:border-primary-red/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-red/20 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-primary-red/20 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-red" />
                      </div>
                      <div>
                        <p className="text-text-muted text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="p-4 rounded-xl bg-secondary-blue/10 border border-secondary-blue/30 mt-6"
              >
                <p className="text-secondary-blue text-sm">
                  Horario de atencion: Lunes a Viernes de 9:00 AM a 6:00 PM
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card hover={false}>
                <h2 className="text-xl font-bold text-white mb-6">Envianos un mensaje</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Motivo de tu mensaje"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-field min-h-[120px]"
                      placeholder="Escribe tu mensaje aqui..."
                    />
                  </div>

                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    icon={Send}
                    className="w-full"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contacto
