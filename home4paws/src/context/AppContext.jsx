import { createContext, useContext, useState } from 'react';
import fotoCachuchin from '../assets/fotoCachuchin.jpg';
import fotoGimione from '../assets/fotoGimione.jpg';
import fotoPerlita from '../assets/fotoPerlita.jpg';
import fotoFirulais from '../assets/fotoFirulais.jpg';

const AppContext = createContext(null);

const mascotasBase = [
  {
    id: 1, nombre: 'Cachuchin', raza: 'Mestizo', edad: '1 año', tamano: 'Mediano',
    zona: 'Zona Sur, Cochabamba', estado: 'Disponible',
    vacunas: true, esterilizado: true, desparasitado: true, otrosTratamientos: '',
    comportamiento: ['Amigable', 'Con niños'], notas: '', fotos: [fotoCachuchin],
  },
  {
    id: 2, nombre: 'Gimione', raza: 'Mestizo', edad: '8 meses', tamano: 'Pequeño',
    zona: 'Centro, Cochabamba', estado: 'Disponible',
    vacunas: true, esterilizado: false, desparasitado: true, otrosTratamientos: '',
    comportamiento: ['Tímido', 'Tranquilo'], notas: '', fotos: [fotoGimione],
  },
  {
    id: 3, nombre: 'Perlita', raza: 'Mestizo', edad: '2 años', tamano: 'Pequeño',
    zona: 'Queru Queru, Cochabamba', estado: 'Disponible',
    vacunas: true, esterilizado: true, desparasitado: true, otrosTratamientos: '',
    comportamiento: ['Amigable'], notas: '', fotos: [fotoPerlita],
  },
  {
    id: 4, nombre: 'Firulais', raza: 'Mestizo', edad: '2 años', tamano: 'Mediano',
    zona: 'Zona Sur, Cochabamba', estado: 'Disponible',
    vacunas: true, esterilizado: true, desparasitado: false, otrosTratamientos: '',
    comportamiento: ['Amigable', 'Enérgico'], notas: 'Es muy cariñoso y tranquilo', fotos: [fotoFirulais],
  },
];

const usuariosBase = [
  { id: 1, nombre: 'Brandon Cuevas Cuba', telefono: '+591 76476507', correo: 'brandon@gmail.com', contrasena: '123456', foto: null, infoExtra: '' },
  { id: 2, nombre: 'Ana Torrez', telefono: '+591 70011122', correo: 'ana@correo.com', contrasena: '123456', foto: null, infoExtra: '' },
  { id: 3, nombre: 'Luis Mamani', telefono: '+591 70099887', correo: 'luis@correo.com', contrasena: '123456', foto: null, infoExtra: '' },
];

const adminsBase = [
  { id: 1, correo: 'admin@home4paws.com', contrasena: 'admin123' },
];

export function AppProvider({ children }) {
  const [usuarioActual, setUsuarioActualState] = useState(null);
  const [adminActual, setAdminActual] = useState(null);

  const [usuarios, setUsuarios] = useState(usuariosBase);
  const [admins] = useState(adminsBase);
  const [mascotas, setMascotas] = useState(mascotasBase);
  const [solicitudes, setSolicitudes] = useState([]); // vacío por defecto, se llenan al usar la app
  const [conversaciones, setConversaciones] = useState({});
  const [notificaciones, setNotificaciones] = useState([]);

  // ----- USUARIOS -----
  const setUsuarioActual = (u) => setUsuarioActualState(u);

  const registrarUsuario = (datos) => {
    const nuevoId = usuarios.length ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;
    const nuevo = { id: nuevoId, foto: null, infoExtra: '', ...datos };
    setUsuarios((prev) => [...prev, nuevo]);
    setUsuarioActualState(nuevo);
    return nuevo;
  };

  const iniciarSesionUsuario = (correo, contrasena) => {
    const encontrado = usuarios.find((u) => u.correo === correo && u.contrasena === contrasena);
    if (encontrado) setUsuarioActualState(encontrado);
    return encontrado || null;
  };

  const actualizarUsuarioActual = (datosNuevos) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.id === usuarioActual.id ? { ...u, ...datosNuevos } : u))
    );
    setUsuarioActualState((prev) => ({ ...prev, ...datosNuevos }));
  };

  // ----- ADMIN -----
  const iniciarSesionAdmin = (correo, contrasena) => {
    const encontrado = admins.find((a) => a.correo === correo && a.contrasena === contrasena);
    if (encontrado) setAdminActual(encontrado);
    return encontrado || null;
  };

  // ----- MASCOTAS -----
  const agregarMascota = (datos) => {
    const nuevoId = mascotas.length ? Math.max(...mascotas.map((m) => m.id)) + 1 : 1;
    const nueva = { id: nuevoId, estado: 'Disponible', ...datos };
    setMascotas((prev) => [...prev, nueva]);
    return nueva;
  };

  const editarMascota = (id, datosNuevos) => {
    setMascotas((prev) =>
      prev.map((m) => (m.id === Number(id) ? { ...m, ...datosNuevos } : m))
    );
  };

  const eliminarMascota = (id) => {
    setMascotas((prev) => prev.filter((m) => m.id !== Number(id)));
  };

  const buscarMascota = (id) => mascotas.find((m) => m.id === Number(id));

  // Mascotas visibles para el usuario: nunca mostrar "No disponible"
  const mascotasVisibles = mascotas.filter((m) => m.estado !== 'No disponible');

  // ----- SOLICITUDES -----
  const agregarSolicitud = (datos) => {
    const nuevoId = solicitudes.length ? Math.max(...solicitudes.map((s) => s.id)) + 1 : 1;
    const nueva = { id: nuevoId, estado: 'Pendiente', ...datos };
    setSolicitudes((prev) => [...prev, nueva]);

    // La mascota pasa a "En revision" al recibir una solicitud
    editarMascota(datos.idMascota, { estado: 'En revision' });

    return nueva;
  };

  const actualizarEstadoSolicitud = (id, nuevoEstado) => {
    const solicitud = solicitudes.find((s) => s.id === Number(id));
    setSolicitudes((prev) =>
      prev.map((s) => (s.id === Number(id) ? { ...s, estado: nuevoEstado } : s))
    );

    if (solicitud) {
      if (nuevoEstado === 'Aceptada') {
        // La mascota se oculta del catálogo
        editarMascota(solicitud.idMascota, { estado: 'No disponible' });
        // Notificar al usuario
        agregarNotificacion(
          solicitud.solicitanteCorreo,
          `Respondieron tu solicitud de ${solicitud.mascota}`,
          `¡Buenas noticias! Tu solicitud para adoptar a ${solicitud.mascota} fue ACEPTADA. Contáctanos por el chat para coordinar la entrega.`
        );
      } else if (nuevoEstado === 'Rechazada') {
        // La mascota vuelve a estar disponible (si no tiene otras solicitudes pendientes)
        editarMascota(solicitud.idMascota, { estado: 'Disponible' });
        agregarNotificacion(
          solicitud.solicitanteCorreo,
          `Respondieron tu solicitud de ${solicitud.mascota}`,
          `Tu solicitud para adoptar a ${solicitud.mascota} fue rechazada. Puedes revisar otras mascotas disponibles.`
        );
      }
    }
  };

  const buscarSolicitud = (id) => solicitudes.find((s) => s.id === Number(id));

  const solicitudesDelUsuario = (correo) =>
    solicitudes.filter((s) => s.solicitanteCorreo === correo);

  // ----- NOTIFICACIONES -----
  const agregarNotificacion = (correoUsuario, titulo, mensaje) => {
    const nuevoId = Date.now();
    setNotificaciones((prev) => [
      ...prev,
      { id: nuevoId, correoUsuario, titulo, mensaje, leida: false },
    ]);
  };

  const notificacionesDelUsuario = (correo) =>
    notificaciones.filter((n) => n.correoUsuario === correo);

  const marcarNotificacionLeida = (id) => {
    setNotificaciones((prev) =>
      prev.map((n) => (n.id === Number(id) ? { ...n, leida: true } : n))
    );
  };

  // ----- CHAT (una conversación por solicitud) -----
  const obtenerMensajes = (idConversacion) => conversaciones[idConversacion] || [];

  const enviarMensaje = (idConversacion, texto, propio) => {
    const nuevoMensaje = { id: Date.now(), texto, propio };
    setConversaciones((prev) => ({
      ...prev,
      [idConversacion]: [...(prev[idConversacion] || []), nuevoMensaje],
    }));
  };

  const valor = {
    usuarioActual, setUsuarioActual, registrarUsuario, iniciarSesionUsuario, actualizarUsuarioActual,
    adminActual, setAdminActual, iniciarSesionAdmin,
    mascotas, mascotasVisibles, agregarMascota, editarMascota, eliminarMascota, buscarMascota,
    solicitudes, agregarSolicitud, actualizarEstadoSolicitud, buscarSolicitud, solicitudesDelUsuario,
    notificaciones, notificacionesDelUsuario, marcarNotificacionLeida,
    obtenerMensajes, enviarMensaje,
  };

  return <AppContext.Provider value={valor}>{children}</AppContext.Provider>;
}

export function useApp() {
  const contexto = useContext(AppContext);
  if (!contexto) throw new Error('useApp debe usarse dentro de un AppProvider');
  return contexto;
}