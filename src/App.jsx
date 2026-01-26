import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import AppRoutes from './routes'

const basename = import.meta.env.BASE_URL || '/'

function App() {
  return (
    <ThemeProvider>
      <Router basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
