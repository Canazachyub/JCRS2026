import { motion } from 'framer-motion'
import { classNames } from '../../utils/helpers'

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={classNames(
        'relative bg-bg-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:border-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/10',
        gradient && 'bg-gradient-card',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const CardHeader = ({ children, className = '' }) => (
  <div className={classNames('mb-4', className)}>{children}</div>
)

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={classNames('text-xl font-bold text-white', className)}>
    {children}
  </h3>
)

export const CardDescription = ({ children, className = '' }) => (
  <p className={classNames('text-text-secondary mt-1', className)}>
    {children}
  </p>
)

export const CardContent = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

export const CardFooter = ({ children, className = '' }) => (
  <div className={classNames('mt-4 pt-4 border-t border-white/10', className)}>
    {children}
  </div>
)

export default Card
