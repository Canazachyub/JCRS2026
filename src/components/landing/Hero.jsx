import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'
import Countdown from './Countdown'
import Button from '../common/Button'
import { EVENT_CONFIG } from '../../utils/constants'

// Imágenes de Arequipa para el carrusel
const CAROUSEL_IMAGES = [
  {
    url: 'https://media.vogue.mx/photos/5e5c5b1f25623100081c437c/master/w_1600%2Cc_limit/Arequipa--paisaje.jpg',
    alt: 'Paisaje de Arequipa con el Misti',
  },
  {
    url: 'https://www.tierrasvivas.com/img/arequipa-altitude-06-1575.jpg',
    alt: 'Vista panorámica de Arequipa',
  },
  {
    url: 'https://content.r9cdn.net/rimg/dimg/0f/31/c78307fb-city-10174-1732d430b8c.jpg?width=1366&height=768&xhint=2500&yhint=1740&crop=true',
    alt: 'Ciudad de Arequipa',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Catedral_Arequipa%2C_Peru.jpg',
    alt: 'Catedral de Arequipa',
  },
]

// Organizadores
const ORGANIZADORES = [
  'La Sociedad Científica Médico Estudiantil Peruana (SOCIMEP)',
  'Facultad de Medicina Humana de la Universidad Católica de Santa María',
  'Centro de Investigación y Estudios Médicos (CIEM)',
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
    }, 5000) // Cambiar cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  const scrollToLinks = () => {
    document.getElementById('links')?.scrollIntoView({ behavior: 'smooth' })
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Carrusel de Imágenes de Fondo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${CAROUSEL_IMAGES[currentImage].url}')`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-black/50 to-bg-primary/90" />

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? 'bg-primary-green w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-primary-blue/50 transition-all"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-primary-blue/50 transition-all"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-blue/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-primary-green/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Organiza Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block text-xs uppercase tracking-wider text-primary-blue font-semibold mb-2">
              Organiza
            </span>
            <div className="flex flex-col gap-1">
              {ORGANIZADORES.map((org, index) => (
                <p key={index} className="text-white/80 text-xs sm:text-sm">
                  {org}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">
            TEMÁTICA DE LA XXIX JORNADA
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-lg">
            CIENTÍFICA REGIONAL SUR 2026
          </h2>

          {/* Slogan/Temática - Destacado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
              "{EVENT_CONFIG.slogan}"
            </p>
          </motion.div>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-white/90 bg-primary-blue/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-primary-blue/30">
              <Calendar className="w-4 h-4 text-primary-blue" />
              <span>{EVENT_CONFIG.dates.formatted}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-primary-green/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-primary-green/30">
              <MapPin className="w-4 h-4 text-primary-green" />
              <span>{EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}</span>
            </div>
          </div>

          {/* Countdown */}
          <Countdown targetDate={EVENT_CONFIG.dates.start} />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Button
              onClick={scrollToLinks}
              size="lg"
              icon={ArrowDown}
              iconPosition="right"
            >
              Ver Bases Científicas
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  )
}

export default Hero
