import { motion } from 'framer-motion'
import { Users, CreditCard, TrendingUp, Clock } from 'lucide-react'
import Card from '../common/Card'

const StatCard = ({ icon: Icon, label, value, change, color = 'primary-red' }) => (
  <Card className="relative overflow-hidden">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-text-secondary text-sm">{label}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
        {change && (
          <p className={`text-sm mt-2 ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change > 0 ? '+' : ''}{change}% desde ayer
          </p>
        )}
      </div>
      <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center`}>
        <Icon className={`w-6 h-6 text-${color}`} />
      </div>
    </div>
  </Card>
)

const Dashboard = ({ stats }) => {
  const defaultStats = {
    totalInscritos: 0,
    pagosVerificados: 0,
    pagosPendientes: 0,
    recaudacion: 0,
  }

  const data = stats || defaultStats

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <p className="text-text-secondary">Resumen de inscripciones y pagos</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Users}
          label="Total Inscritos"
          value={data.totalInscritos}
          change={12}
          color="primary-red"
        />
        <StatCard
          icon={CreditCard}
          label="Pagos Verificados"
          value={data.pagosVerificados}
          change={8}
          color="accent-green"
        />
        <StatCard
          icon={Clock}
          label="Pagos Pendientes"
          value={data.pagosPendientes}
          change={-5}
          color="accent-gold"
        />
        <StatCard
          icon={TrendingUp}
          label="Recaudacion Total"
          value={`S/ ${data.recaudacion.toLocaleString()}`}
          color="secondary-blue"
        />
      </div>
    </div>
  )
}

export default Dashboard
