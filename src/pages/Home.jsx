import { motion } from 'framer-motion'
import {
  FileText,
  Users,
  Search,
  Calendar,
  FileDown,
  BookOpen,
  FlaskConical,
  Stethoscope,
  ExternalLink,
  Smile,
  ClipboardList,
  Microscope,
} from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Hero from '../components/landing/Hero'
import LinkButton from '../components/landing/LinkButton'
import SocialLinks from '../components/landing/SocialLinks'
import Sponsors from '../components/landing/Sponsors'
import {
  BASES_CIENTIFICAS,
  DOCUMENTACION,
  FORMULARIOS_FASE1,
  FORMULARIOS_EXTRAS,
  FORMULARIOS_CASOS_CLINICOS,
  EVENT_CONFIG,
} from '../utils/constants'

// Imágenes de Arequipa para las tarjetas
const CARD_IMAGES = [
  'https://media.vogue.mx/photos/5e5c5b1f25623100081c437c/master/w_1600%2Cc_limit/Arequipa--paisaje.jpg',
  'https://www.tierrasvivas.com/img/arequipa-altitude-06-1575.jpg',
  'https://content.r9cdn.net/rimg/dimg/0f/31/c78307fb-city-10174-1732d430b8c.jpg?width=1366&height=768&xhint=2500&yhint=1740&crop=true',
  'https://upload.wikimedia.org/wikipedia/commons/5/5f/Catedral_Arequipa%2C_Peru.jpg',
]

// Componente de tarjeta con imagen de fondo
const BaseCard = ({ title, url, icon: Icon, imageIndex = 0 }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="relative block rounded-2xl overflow-hidden group"
  >
    {/* Background Image - Arequipa */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{
        backgroundImage: `url('${CARD_IMAGES[imageIndex % CARD_IMAGES.length]}')`,
      }}
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />

    {/* Content */}
    <div className="relative p-6 min-h-[200px] flex flex-col items-center justify-center text-center">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center mb-4 shadow-lg">
        <Icon className="w-7 h-7 text-primary-red" />
      </div>

      {/* Title Badge */}
      <div className="bg-white rounded-lg px-6 py-2 shadow-lg">
        <h3 className="text-gray-900 font-bold text-sm md:text-base uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-white font-semibold mt-4 text-sm tracking-wider">
        BASES CIENTÍFICAS
      </p>

      {/* External Link Icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>
    </div>
  </motion.a>
)

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Bases Científicas Section */}
        <section id="links" className="py-16 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-red mb-2">
                Te presentamos las Bases Científicas
              </h2>
              <p className="text-gray-400">
                Aquí encontrarás toda la información, según tu modalidad
              </p>
            </motion.div>

            {/* Bases Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <BaseCard
                title="Protocolo de Investigación"
                url={BASES_CIENTIFICAS.protocolo.url}
                icon={FlaskConical}
                imageIndex={0}
              />
              <BaseCard
                title="Trabajo de Investigación"
                url={BASES_CIENTIFICAS.trabajo.url}
                icon={FileText}
                imageIndex={1}
              />
              <BaseCard
                title="Casos Clínicos"
                url={BASES_CIENTIFICAS.casosClinicos.url}
                icon={Stethoscope}
                imageIndex={2}
              />
              <BaseCard
                title="Atlas Científico"
                url={BASES_CIENTIFICAS.atlas.url}
                icon={BookOpen}
                imageIndex={3}
              />
            </div>

            {/* Documentación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-red rounded-full" />
                Documentación para el Concurso Científico
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.values(DOCUMENTACION).map((doc, index) => (
                  <motion.a
                    key={doc.nombre}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/10 hover:border-primary-red/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-blue/20 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-secondary-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-primary-red transition-colors">
                        {doc.nombre}
                      </h4>
                      <p className="text-text-muted text-xs truncate">{doc.descripcion}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary-red transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Formularios FASE 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-green rounded-full" />
                Formulario de Inscripción [FASE I]
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.values(FORMULARIOS_FASE1).map((form, index) => {
                  const icons = { Stethoscope, FlaskConical, FileText }
                  const Icon = icons[form.icon] || FileText
                  return (
                    <motion.a
                      key={form.nombre}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-green/5 border border-accent-green/30 hover:border-accent-green/60 transition-all text-center group"
                    >
                      <div className="w-14 h-14 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-7 h-7 text-accent-green" />
                      </div>
                      <span className="inline-block px-2 py-0.5 bg-accent-green/20 rounded text-accent-green text-xs font-medium mb-2">
                        {form.fase}
                      </span>
                      <h4 className="text-white font-semibold text-sm group-hover:text-accent-green transition-colors">
                        {form.nombre}
                      </h4>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Formularios Casos Clínicos - Todas las Fases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-red rounded-full" />
                Formularios Casos Clínicos - Todas las Fases
              </h2>

              {/* Fase I */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-accent-green mb-3">FASE I - Documentación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.fase1.documentacion.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-accent-green/30 hover:border-accent-green/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-accent-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-accent-green transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.fase1.documentacion.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">Hasta: {FORMULARIOS_CASOS_CLINICOS.fase1.documentacion.fechaLimite}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-green transition-colors" />
                  </motion.a>
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.fase1.correcciones.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-accent-green/30 hover:border-accent-green/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-accent-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-accent-green transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.fase1.correcciones.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">Hasta: {FORMULARIOS_CASOS_CLINICOS.fase1.correcciones.fechaLimite}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-green transition-colors" />
                  </motion.a>
                </div>
              </div>

              {/* Fase II */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-blue mb-3">FASE II - Exposición Clasificatoria (TOP 25)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.fase2.diapositivas.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-secondary-blue/30 hover:border-secondary-blue/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-blue/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-secondary-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-secondary-blue transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.fase2.diapositivas.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">Hasta: {FORMULARIOS_CASOS_CLINICOS.fase2.diapositivas.fechaLimite}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-secondary-blue transition-colors" />
                  </motion.a>
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.fase2.cambioExpositor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-secondary-blue/30 hover:border-secondary-blue/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-blue/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-secondary-blue transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.fase2.cambioExpositor.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">{FORMULARIOS_CASOS_CLINICOS.fase2.cambioExpositor.descripcion}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-secondary-blue transition-colors" />
                  </motion.a>
                </div>
              </div>

              {/* Fase Final */}
              <div>
                <h3 className="text-lg font-semibold text-accent-gold mb-3">FASE FINAL - Exposición Oral (TOP 5)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.faseFinal.presentacionFinal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-accent-gold/30 hover:border-accent-gold/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/20 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-accent-gold transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.faseFinal.presentacionFinal.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">Hasta: {FORMULARIOS_CASOS_CLINICOS.faseFinal.presentacionFinal.fechaLimite}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors" />
                  </motion.a>
                  <motion.a
                    href={FORMULARIOS_CASOS_CLINICOS.faseFinal.cambioExpositor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-accent-gold/30 hover:border-accent-gold/60 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-accent-gold transition-colors">
                        {FORMULARIOS_CASOS_CLINICOS.faseFinal.cambioExpositor.nombre}
                      </h4>
                      <p className="text-text-muted text-xs">{FORMULARIOS_CASOS_CLINICOS.faseFinal.cambioExpositor.descripcion}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Formularios Extras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-purple rounded-full" />
                Inscríbete para Meme Científico y Atlas Científico
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a
                  href={FORMULARIOS_EXTRAS.atlas.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-purple/5 border border-accent-purple/30 hover:border-accent-purple/60 transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-purple/20 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-7 h-7 text-accent-purple" />
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-accent-purple transition-colors">
                    Atlas de Ciencia en Arequipa
                  </h4>
                  <p className="text-text-muted text-sm mt-1">{FORMULARIOS_EXTRAS.atlas.descripcion}</p>
                </motion.a>

                <motion.a
                  href={FORMULARIOS_EXTRAS.meme.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 hover:border-accent-gold/60 transition-all text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-3">
                    <Smile className="w-7 h-7 text-accent-gold" />
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-accent-gold transition-colors">
                    Meme Científico
                  </h4>
                  <p className="text-text-muted text-sm mt-1">{FORMULARIOS_EXTRAS.meme.descripcion}</p>
                </motion.a>
              </div>
            </motion.div>

            {/* Recursos Adicionales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-blue rounded-full" />
                Recursos
              </h2>

              <div className="space-y-3">
                <LinkButton
                  to="/programa"
                  icon={Calendar}
                  title="Programa del Evento"
                  description="Cronograma completo del evento"
                />
                <LinkButton
                  to="/contacto"
                  icon={Users}
                  title="Contacto"
                  description="¿Tienes dudas? Contáctanos"
                />
              </div>
            </motion.div>

            {/* Social Links */}
            <SocialLinks />

            {/* Sponsors */}
            <Sponsors />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
