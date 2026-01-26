import { motion } from 'framer-motion'
import { CreditCard, Building2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const paymentMethods = [
  {
    bank: 'BCP',
    accountNumber: '123-456789-0-12',
    cci: '00212345678901234567',
    holder: 'SOCIMEP - JCRS AQP 2026',
    type: 'Cuenta Corriente',
  },
  {
    bank: 'Interbank',
    accountNumber: '987-654321-0-98',
    cci: '00398765432109876543',
    holder: 'SOCIMEP - JCRS AQP 2026',
    type: 'Cuenta de Ahorros',
  },
]

const PaymentInfo = () => {
  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">Informacion de Pago</h3>
        <p className="text-text-secondary">
          Realiza tu deposito o transferencia a cualquiera de estas cuentas
        </p>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-bg-card border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-red/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-red" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{method.bank}</h4>
                <p className="text-text-muted text-sm">{method.type}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary">
                <div>
                  <p className="text-text-muted text-xs">Numero de Cuenta</p>
                  <p className="text-white font-mono">{method.accountNumber}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(method.accountNumber, `account-${index}`)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copiedField === `account-${index}` ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-text-muted" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary">
                <div>
                  <p className="text-text-muted text-xs">CCI</p>
                  <p className="text-white font-mono text-sm">{method.cci}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(method.cci, `cci-${index}`)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copiedField === `cci-${index}` ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-text-muted" />
                  )}
                </button>
              </div>

              <div className="p-3 rounded-lg bg-bg-secondary">
                <p className="text-text-muted text-xs">Titular</p>
                <p className="text-white">{method.holder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30">
        <div className="flex items-start gap-3">
          <CreditCard className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-accent-gold font-medium mb-1">Importante</p>
            <ul className="text-text-secondary text-sm space-y-1">
              <li>Guarda tu voucher o captura de pantalla</li>
              <li>Envia el comprobante al correo o WhatsApp</li>
              <li>Indica tu DNI en el concepto del deposito</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PaymentInfo
