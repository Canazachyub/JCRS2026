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
  FORMULARIOS_PROTOCOLO,
  FORMULARIOS_TRABAJO,
  FORMULARIOS_CASO_CLINICO,
  FORMULARIOS_ATLAS,
  FORMULARIOS_EXTRAS,
  CRONOGRAMA_PROTOCOLO,
  CRONOGRAMA_TRABAJO,
  CRONOGRAMA_CASO_CLINICO,
  CRONOGRAMA_ATLAS,
  CALENDARIO_GENERAL,
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
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
        <Icon className="w-7 h-7 text-gray-700" />
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
        <section id="links" className="py-16 px-4 bg-bg-secondary">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Te presentamos las <span className="text-primary-green">Bases</span> <span className="text-primary-blue">Científicas</span>
              </h2>
              <p className="text-text-secondary">
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
                <span className="w-1 h-6 bg-primary-blue rounded-full" />
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/10 hover:border-primary-blue/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm group-hover:text-primary-blue transition-colors">
                        {doc.nombre}
                      </h4>
                      <p className="text-text-muted text-xs truncate">{doc.descripcion}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-primary-blue transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CALENDARIO GENERAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-blue rounded-full" />
                Calendario General - Fechas Clave
              </h2>
              <div className="bg-bg-card rounded-xl border border-accent-blue/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-accent-blue/20">
                      <tr>
                        <th className="text-left p-4 text-accent-blue font-semibold">Fecha</th>
                        <th className="text-left p-4 text-accent-blue font-semibold">Evento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CALENDARIO_GENERAL.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 text-accent-gold font-medium whitespace-nowrap">{item.fecha}</td>
                          <td className="p-4 text-white">{item.evento}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* CRONOGRAMA Y FORMULARIOS POR CATEGORÍA */}

            {/* 1. PROTOCOLO DE INVESTIGACIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-green rounded-full" />
                  <FlaskConical className="w-5 h-5 text-accent-green" />
                  {CRONOGRAMA_PROTOCOLO.nombre}
                </h2>
                <a href={CRONOGRAMA_PROTOCOLO.basesUrl} target="_blank" rel="noopener noreferrer" className="text-accent-green text-sm hover:underline flex items-center gap-1">
                  Ver Bases <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cronograma */}
              <div className="bg-bg-card rounded-xl border border-accent-green/20 overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-accent-green/10">
                      <tr>
                        <th className="text-left p-3 text-accent-green font-semibold">Fecha</th>
                        <th className="text-left p-3 text-accent-green font-semibold">Actividad</th>
                        <th className="text-left p-3 text-accent-green font-semibold">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CRONOGRAMA_PROTOCOLO.actividades.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-text-muted whitespace-nowrap">{item.fecha}</td>
                          <td className="p-3 text-white">{item.actividad}</td>
                          <td className="p-3 text-accent-gold text-xs">{item.nota}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formularios Protocolo */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(FORMULARIOS_PROTOCOLO).map(([fase, forms]) => (
                  Object.values(forms).map((form, idx) => (
                    <motion.a
                      key={`protocolo-${fase}-${idx}`}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-lg bg-accent-green/10 border border-accent-green/30 hover:border-accent-green/60 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <ClipboardList className="w-5 h-5 text-accent-green" />
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-accent-green transition-colors">{form.nombre}</h4>
                          <p className="text-text-muted text-xs">{form.descripcion}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))
                ))}
              </div>
            </motion.div>

            {/* 2. TRABAJO DE INVESTIGACIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-secondary-blue rounded-full" />
                  <FileText className="w-5 h-5 text-secondary-blue" />
                  {CRONOGRAMA_TRABAJO.nombre}
                </h2>
                <a href={CRONOGRAMA_TRABAJO.basesUrl} target="_blank" rel="noopener noreferrer" className="text-secondary-blue text-sm hover:underline flex items-center gap-1">
                  Ver Bases <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cronograma */}
              <div className="bg-bg-card rounded-xl border border-secondary-blue/20 overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary-blue/10">
                      <tr>
                        <th className="text-left p-3 text-secondary-blue font-semibold">Fecha</th>
                        <th className="text-left p-3 text-secondary-blue font-semibold">Actividad</th>
                        <th className="text-left p-3 text-secondary-blue font-semibold">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CRONOGRAMA_TRABAJO.actividades.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-text-muted whitespace-nowrap">{item.fecha}</td>
                          <td className="p-3 text-white">{item.actividad}</td>
                          <td className="p-3 text-accent-gold text-xs">{item.nota}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formularios Trabajo */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(FORMULARIOS_TRABAJO).map(([fase, forms]) => (
                  Object.values(forms).map((form, idx) => (
                    <motion.a
                      key={`trabajo-${fase}-${idx}`}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-lg bg-secondary-blue/10 border border-secondary-blue/30 hover:border-secondary-blue/60 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <ClipboardList className="w-5 h-5 text-secondary-blue" />
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-secondary-blue transition-colors">{form.nombre}</h4>
                          <p className="text-text-muted text-xs">{form.descripcion}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))
                ))}
              </div>
            </motion.div>

            {/* 3. CASO CLÍNICO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary-green rounded-full" />
                  <Stethoscope className="w-5 h-5 text-primary-green" />
                  {CRONOGRAMA_CASO_CLINICO.nombre}
                </h2>
                <a href={CRONOGRAMA_CASO_CLINICO.basesUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green text-sm hover:underline flex items-center gap-1">
                  Ver Bases <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cronograma */}
              <div className="bg-bg-card rounded-xl border border-primary-green/20 overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-primary-green/10">
                      <tr>
                        <th className="text-left p-3 text-primary-green font-semibold">Fecha</th>
                        <th className="text-left p-3 text-primary-green font-semibold">Actividad</th>
                        <th className="text-left p-3 text-primary-green font-semibold">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CRONOGRAMA_CASO_CLINICO.actividades.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-text-muted whitespace-nowrap">{item.fecha}</td>
                          <td className="p-3 text-white">{item.actividad}</td>
                          <td className="p-3 text-accent-gold text-xs">{item.nota}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formularios Caso Clínico */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(FORMULARIOS_CASO_CLINICO).map(([fase, forms]) => (
                  Object.values(forms).map((form, idx) => (
                    <motion.a
                      key={`caso-${fase}-${idx}`}
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-lg bg-primary-green/10 border border-primary-green/30 hover:border-primary-green/60 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <ClipboardList className="w-5 h-5 text-primary-green" />
                        <div>
                          <h4 className="text-white text-sm font-medium group-hover:text-primary-green transition-colors">{form.nombre}</h4>
                          <p className="text-text-muted text-xs">{form.descripcion}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))
                ))}
              </div>
            </motion.div>

            {/* 4. ATLAS CIENTÍFICO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent-purple rounded-full" />
                  <BookOpen className="w-5 h-5 text-accent-purple" />
                  {CRONOGRAMA_ATLAS.nombre}
                </h2>
                <a href={CRONOGRAMA_ATLAS.basesUrl} target="_blank" rel="noopener noreferrer" className="text-accent-purple text-sm hover:underline flex items-center gap-1">
                  Ver Bases <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cronograma */}
              <div className="bg-bg-card rounded-xl border border-accent-purple/20 overflow-hidden mb-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-accent-purple/10">
                      <tr>
                        <th className="text-left p-3 text-accent-purple font-semibold">Fecha</th>
                        <th className="text-left p-3 text-accent-purple font-semibold">Actividad</th>
                        <th className="text-left p-3 text-accent-purple font-semibold">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CRONOGRAMA_ATLAS.actividades.map((item, index) => (
                        <tr key={index} className="border-t border-white/5 hover:bg-white/5">
                          <td className="p-3 text-text-muted whitespace-nowrap">{item.fecha}</td>
                          <td className="p-3 text-white">{item.actividad}</td>
                          <td className="p-3 text-accent-gold text-xs">{item.nota}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Formulario Atlas */}
              <motion.a
                href={FORMULARIOS_ATLAS.inscripcion.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="block p-4 rounded-lg bg-accent-purple/10 border border-accent-purple/30 hover:border-accent-purple/60 transition-all group max-w-md"
              >
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-5 h-5 text-accent-purple" />
                  <div>
                    <h4 className="text-white text-sm font-medium group-hover:text-accent-purple transition-colors">{FORMULARIOS_ATLAS.inscripcion.nombre}</h4>
                    <p className="text-text-muted text-xs">{FORMULARIOS_ATLAS.inscripcion.descripcion}</p>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* MEME CIENTÍFICO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent-gold rounded-full" />
                <Smile className="w-5 h-5 text-accent-gold" />
                Meme Científico
              </h2>

              <motion.a
                href={FORMULARIOS_EXTRAS.meme.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="block p-6 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 hover:border-accent-gold/60 transition-all text-center group max-w-md"
              >
                <div className="w-14 h-14 rounded-full bg-accent-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Smile className="w-7 h-7 text-accent-gold" />
                </div>
                <h4 className="text-white font-semibold group-hover:text-accent-gold transition-colors">
                  Inscríbete al Concurso
                </h4>
                <p className="text-text-muted text-sm mt-1">{FORMULARIOS_EXTRAS.meme.descripcion}</p>
              </motion.a>
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
