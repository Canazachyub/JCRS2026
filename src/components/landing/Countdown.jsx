import { motion } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'

const CountdownUnit = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring' }}
    className="flex flex-col items-center"
  >
    <div className="relative">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bg-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <div className="absolute -bottom-1 -right-1 w-full h-full rounded-2xl bg-primary-blue/20 -z-10" />
    </div>
    <span className="mt-3 text-text-secondary text-sm uppercase tracking-wider">
      {label}
    </span>
  </motion.div>
)

const Countdown = ({ targetDate }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate)

  if (isExpired) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-8"
      >
        <p className="text-2xl font-bold text-primary-green animate-pulse">
          El evento ha comenzado
        </p>
      </motion.div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      <CountdownUnit value={days} label="Dias" delay={0.4} />
      <span className="text-2xl text-primary-blue font-bold mt-[-20px]">:</span>
      <CountdownUnit value={hours} label="Horas" delay={0.5} />
      <span className="text-2xl text-primary-green font-bold mt-[-20px]">:</span>
      <CountdownUnit value={minutes} label="Min" delay={0.6} />
      <span className="text-2xl text-primary-blue font-bold mt-[-20px]">:</span>
      <CountdownUnit value={seconds} label="Seg" delay={0.7} />
    </div>
  )
}

export default Countdown
