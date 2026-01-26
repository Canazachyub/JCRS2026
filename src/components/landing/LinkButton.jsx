import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { classNames } from '../../utils/helpers'

const LinkButton = ({
  to,
  href,
  icon: Icon,
  title,
  description,
  variant = 'default',
  isExternal = false,
  delay = 0,
}) => {
  const variants = {
    default: 'border-white/10 hover:border-primary-red/50 hover:bg-primary-red/5',
    primary: 'border-primary-red/30 bg-primary-red/10 hover:bg-primary-red/20',
    secondary: 'border-secondary-blue/30 bg-secondary-blue/10 hover:bg-secondary-blue/20',
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ x: 5 }}
      className={classNames(
        'group flex items-center gap-4 p-4 rounded-xl border backdrop-blur-sm transition-all duration-300',
        variants[variant]
      )}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-red/20 transition-colors">
        <Icon className="w-6 h-6 text-primary-red" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-semibold group-hover:text-primary-red transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-text-secondary text-sm truncate">{description}</p>
        )}
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0">
        {isExternal ? (
          <ExternalLink className="w-5 h-5 text-text-muted group-hover:text-primary-red transition-colors" />
        ) : (
          <ChevronRight className="w-5 h-5 text-text-muted group-hover:text-primary-red group-hover:translate-x-1 transition-all" />
        )}
      </div>
    </motion.div>
  )

  if (isExternal && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link to={to || '/'}>{content}</Link>
}

export default LinkButton
