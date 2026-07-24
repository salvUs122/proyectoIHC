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
import Notificaciones from './pages/Notificaciones/Notificaciones'
import Chat from './pages/Chat/Chat'
import Donaciones from './pages/Donaciones/Donaciones'
import GuiaPrimerizos from './pages/GuiaPrimerizos/GuiaPrimerizos'
import IniciarSesionAdmin from './pages/Administrador/IniciarSesionAdmin'
import PanelAdministracion from './pages/Administrador/PanelAdministracion'
import GestionarPublicados from './pages/Administrador/GestionarPublicados'
import RevisarSolicitudes from './pages/Administrador/RevisarSolicitudes'
import RevisarSolicitudDetalle from './pages/Administrador/RevisarSolicitudDetalle'

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
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/guia-primerizos" element={<GuiaPrimerizos />} />
        <Route path="/admin" element={<IniciarSesionAdmin />} />
        <Route path="/admin/panel" element={<PanelAdministracion />} />
        <Route path="/admin/publicados" element={<GestionarPublicados />} />
        <Route path="/admin/solicitudes" element={<RevisarSolicitudes />} />
        <Route path="/admin/solicitudes/:idSolicitud" element={<RevisarSolicitudDetalle />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App