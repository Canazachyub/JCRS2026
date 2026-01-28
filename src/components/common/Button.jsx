import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { classNames } from '../../utils/helpers'

const variants = {
  primary: 'bg-primary-green hover:bg-primary-light text-white shadow-lg shadow-primary-green/50 hover:shadow-xl hover:shadow-primary-green/60 border border-white/20',
  secondary: 'bg-secondary-green hover:bg-secondary-dark text-white shadow-md',
  outline: 'border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white',
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
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green/50',
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
