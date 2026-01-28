import { motion } from 'framer-motion'

const Sponsors = () => {
  return (
    <section className="py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Auspiciadores y Colaboradores
        </h2>
        <p className="text-text-secondary mb-8">
          Proximamente...
        </p>

        {/* CTA for sponsors */}
        <p className="text-text-muted">
          ¿Deseas ser auspiciador?{' '}
          <a href="/contacto" className="text-primary-green hover:underline">
            Contáctanos
          </a>
        </p>
      </motion.div>
    </section>
  )
}

export default Sponsors
