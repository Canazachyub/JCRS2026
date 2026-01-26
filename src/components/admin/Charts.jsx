import { motion } from 'framer-motion'

const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="p-6 rounded-xl bg-bg-card border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">{item.label}</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
            <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-primary-red to-secondary-blue rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const PieChart = ({ data, title }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const colors = ['#DC2626', '#1E40AF', '#F59E0B', '#10B981', '#8B5CF6']

  return (
    <div className="p-6 rounded-xl bg-bg-card border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>

      <div className="flex items-center gap-6">
        {/* Simple circular representation */}
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            {data.reduce(
              (acc, item, index) => {
                const percentage = (item.value / total) * 100
                const dashArray = `${percentage} ${100 - percentage}`
                const element = (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={colors[index % colors.length]}
                    strokeWidth="20"
                    strokeDasharray={dashArray}
                    strokeDashoffset={-acc.offset}
                    className="transition-all duration-500"
                  />
                )
                acc.elements.push(element)
                acc.offset += percentage
                return acc
              },
              { elements: [], offset: 0 }
            ).elements}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{total}</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              <span className="text-sm text-text-secondary">{item.label}</span>
              <span className="text-sm text-white font-medium">({item.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { BarChart, PieChart }
