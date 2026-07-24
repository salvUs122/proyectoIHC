import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio/Inicio'
import Home from './pages/Inicio/Home'
import IniciarSesion from './pages/Autenticacion/IniciarSesion'
import Registrarse from './pages/Autenticacion/Registrarse'
import Bienvenida from './pages/Autenticacion/Bienvenida'
import ListaAdopciones from './pages/Adopciones/ListaAdopciones'
import FichaMascota from './pages/Adopciones/FichaMascota'
import FormularioSolicitud from './pages/Adopciones/FormularioSolicitud'
import SolicitudEnviada from './pages/Adopciones/SolicitudEnviada'
import DatosPersonales from './pages/Cuenta/DatosPersonales'
import HistorialSolicitudes from './pages/Cuenta/HistorialSolicitudes'
import DetalleSolicitud from './pages/Cuenta/DetalleSolicitud'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adopciones" element={<ListaAdopciones />} />
        <Route path="/adopciones/:idMascota" element={<FichaMascota />} />
        <Route path="/adopciones/:idMascota/solicitud" element={<FormularioSolicitud />} />
        <Route path="/adopciones/:idMascota/enviada" element={<SolicitudEnviada />} />
        <Route path="/cuenta" element={<DatosPersonales />} />
        <Route path="/cuenta/historial" element={<HistorialSolicitudes />} />
        <Route path="/cuenta/historial/:idSolicitud" element={<DetalleSolicitud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App