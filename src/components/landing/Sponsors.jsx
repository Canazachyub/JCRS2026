import { motion } from 'framer-motion'

const sponsors = [
  { name: 'SOCIMEP', tier: 'principal', logo: '/sponsors/socimep.png' },
  { name: 'UNSA', tier: 'gold', logo: '/sponsors/unsa.png' },
  { name: 'UCSM', tier: 'gold', logo: '/sponsors/ucsm.png' },
]

const Sponsors = () => {
  return (
    <section className="py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Auspiciadores y Colaboradores
        </h2>
        <p className="text-text-secondary">
          Gracias a quienes hacen posible este evento
        </p>
      </motion.div>

      {/* Principal Sponsor */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-br from-primary-red/10 to-secondary-blue/10 border border-white/10"
        >
          <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">SOCIMEP</span>
          </div>
        </motion.div>
      </div>

      {/* Other Sponsors */}
      <div className="flex flex-wrap justify-center gap-6">
        {sponsors.slice(1).map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl bg-bg-card/50 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-sm font-medium text-text-secondary">
                {sponsor.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA for sponsors */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 text-text-muted"
      >
        Deseas ser auspiciador?{' '}
        <a href="/contacto" className="text-primary-red hover:underline">
          Contactanos
        </a>
      </motion.p>
    </section>
  )
}

export default Sponsors
