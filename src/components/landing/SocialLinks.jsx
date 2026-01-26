import { motion } from 'framer-motion'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import { LINKS } from '../../utils/constants'

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: LINKS.social.instagram,
    color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
    username: '@jcrs_aqp2026',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: LINKS.social.facebook,
    color: 'hover:bg-blue-600',
    username: 'XXIX JCRS - AREQUIPA 2026',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    url: LINKS.social.whatsappChannel,
    color: 'hover:bg-green-500',
    username: 'Canal JCRS 2026',
  },
]

const SocialLinks = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Siguenos</h2>
        <p className="text-text-secondary">Mantente al dia con las novedades</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-bg-card border border-white/10 transition-all duration-300 ${social.color} hover:border-transparent hover:text-white`}
          >
            <social.icon className="w-5 h-5" />
            <div className="text-left">
              <p className="font-medium">{social.name}</p>
              <p className="text-xs text-text-muted">{social.username}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default SocialLinks
