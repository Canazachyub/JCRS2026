import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { classNames } from '../../utils/helpers'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Inscripcion', path: '/inscripcion' },
  { name: 'Programa', path: '/programa' },
  { name: 'Bases', path: '/bases' },
  { name: 'Contacto', path: '/contacto' },
]

// Logos de organizadores
const LOGOS = [
  { src: '/JCRS2026/logos/JCRS 2026.png', alt: 'JCRS 2026', name: 'JCRS' },
  { src: '/JCRS2026/logos/LOGO SOCIMEP.png', alt: 'SOCIMEP', name: 'SOCIMEP' },
  { src: '/JCRS2026/logos/UCSM 2026 - ESCUDO BLANCO.png', alt: 'UCSM 2026', name: 'UCSM' },
  { src: '/JCRS2026/logos/LOGO CRS.png', alt: 'CRS', name: 'CRS' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLogo, setCurrentLogo] = useState(0)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  // Logo carousel auto-rotation for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % LOGOS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      {/* Logo Strip - Desktop */}
      <div className="hidden md:block bg-gradient-to-r from-primary-green/90 via-primary-dark/85 to-primary-green/90 backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-10 py-3">
            {LOGOS.map((logo, index) => (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center h-14 px-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain filter brightness-110 hover:brightness-125 hover:scale-110 transition-all duration-300 drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Mobile Carousel / Desktop Text */}
            <Link to="/" className="flex items-center gap-3">
              {/* Mobile: Rotating Logo */}
              <div className="md:hidden relative w-10 h-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentLogo}
                    src={LOGOS[currentLogo].src}
                    alt={LOGOS[currentLogo].alt}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 object-contain"
                  />
                </AnimatePresence>
              </div>
              <span className="text-white font-bold text-lg">
                JCRS AQP 2026
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={classNames(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'bg-primary-green/20 text-primary-green'
                      : 'text-text-secondary hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-t border-white/10"
          >
            {/* Mobile Logo Strip */}
            <div className="flex items-center justify-center gap-4 py-3 border-b border-white/10 bg-gradient-to-r from-primary-green/90 via-primary-dark/85 to-primary-green/90">
              {LOGOS.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center h-10 px-1"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-9 w-auto object-contain filter brightness-110 drop-shadow-md"
                  />
                </div>
              ))}
            </div>

            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    'block px-4 py-3 rounded-lg font-medium transition-all duration-300',
                    location.pathname === link.path
                      ? 'bg-primary-green/20 text-primary-green'
                      : 'text-text-secondary hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
