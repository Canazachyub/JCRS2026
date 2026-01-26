import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { classNames } from '../../utils/helpers'

const variants = {
  primary: 'bg-primary-red hover:bg-primary-dark text-white shadow-lg shadow-primary-red/25 hover:shadow-primary-red/40',
  secondary: 'bg-secondary-blue hover:bg-secondary-dark text-white',
  outline: 'border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white',
  ghost: 'text-text-secondary hover:text-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const isDisabled = disabled || isLoading

  return (
    <motion.button
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      className={classNames(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-red/50',
        variants[variant],
        sizes[size],
        isDisabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
      )}
    </motion.button>
  )
}

export default Button
