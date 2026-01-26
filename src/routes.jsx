import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Inscripcion from './pages/Inscripcion'
import Programa from './pages/Programa'
import Bases from './pages/Bases'
import Concurso from './pages/Concurso'
import Contacto from './pages/Contacto'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscripcion" element={<Inscripcion />} />
      <Route path="/inscripcion/:tipo" element={<Inscripcion />} />
      <Route path="/programa" element={<Programa />} />
      <Route path="/bases" element={<Bases />} />
      <Route path="/bases/:categoria" element={<Bases />} />
      <Route path="/concurso" element={<Concurso />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes
