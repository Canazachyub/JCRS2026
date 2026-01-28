import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { EVENT_CONFIG, LINKS } from '../../utils/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-bold text-lg">JCRS AQP 2026</h3>
              <p className="text-text-muted text-sm">SOCIMEP</p>
            </div>
            <p className="text-text-secondary text-sm">
              {EVENT_CONFIG.slogan}
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/inscripcion" className="text-text-secondary hover:text-primary-green transition-colors">
                  Inscripcion
                </Link>
              </li>
              <li>
                <Link to="/programa" className="text-text-secondary hover:text-primary-green transition-colors">
                  Programa
                </Link>
              </li>
              <li>
                <Link to="/bases" className="text-text-secondary hover:text-primary-green transition-colors">
                  Bases
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-text-secondary hover:text-primary-green transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-secondary">
                <Mail className="w-4 h-4 text-primary-green" />
                <a href={`mailto:${LINKS.contacto.email}`} className="hover:text-primary-green transition-colors">
                  {LINKS.contacto.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <Phone className="w-4 h-4 text-primary-green" />
                <a href={`tel:${LINKS.contacto.telefono1}`} className="hover:text-primary-green transition-colors">
                  {LINKS.contacto.telefono1}
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <Phone className="w-4 h-4 text-primary-green" />
                <a href={`tel:${LINKS.contacto.telefono2}`} className="hover:text-primary-green transition-colors">
                  {LINKS.contacto.telefono2}
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4 text-primary-green" />
                <span>{EVENT_CONFIG.location.city}, {EVENT_CONFIG.location.country}</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-white font-semibold mb-4">Siguenos</h4>
            <div className="flex gap-3">
              <a
                href={LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-text-secondary hover:bg-primary-green hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={LINKS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-text-secondary hover:bg-secondary-green hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            {currentYear} JCRS Arequipa. Todos los derechos reservados.
          </p>
          <p className="text-text-muted text-sm">
            Desarrollado con amor para SOCIMEP
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
