import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import { useApp } from '../../context/AppContext';
import styles from './RevisarSolicitudDetalle.module.css';

export default function RevisarSolicitudDetalle() {
  const { idSolicitud } = useParams();
  const navigate = useNavigate();
  const { buscarSolicitud, buscarMascota, actualizarEstadoSolicitud } = useApp();
  const solicitud = buscarSolicitud(idSolicitud);
  const mascota = solicitud ? buscarMascota(solicitud.idMascota) : null;
  const [resultado, setResultado] = useState(null);

  if (!solicitud) {
    return <p className={styles.noEncontrada}>Solicitud no encontrada.</p>;
  }

  const manejarDecision = (decision) => {
    actualizarEstadoSolicitud(idSolicitud, decision === 'aceptada' ? 'Aceptada' : 'Rechazada');
    setResultado(decision);
  };

  if (resultado) {
    return (
      <div className={styles.resultadoContenedor}>
        <div className={styles.resultadoContenido}>
          <div className={styles.circuloResultado}>
            <span className={styles.iconoResultado}>
              {resultado === 'aceptada' ? '✓' : '✕'}
            </span>
          </div>
          <h1 className={styles.resultadoTitulo}>
            {resultado === 'aceptada' ? '¡Solicitud Aceptada!' : '¡Solicitud Rechazada!'}
          </h1>
          <button
            className={styles.botonVerSolicitudes}
            onClick={() => navigate('/admin/solicitudes')}
          >
            VER SOLICITUDES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/admin/solicitudes')} />

        <div className={styles.marcoGrande}>
          <div className={styles.dosColumnas}>
            {/* ===== RECUADRO MASCOTA ===== */}
            <div className={styles.recuadroColumna}>
              {mascota?.fotos?.[0] ? (
                <img src={mascota.fotos[0]} alt={mascota.nombre} className={styles.imagenCuadrada} />
              ) : (
                <div className={styles.imagenPlaceholder}>🐾</div>
              )}

              <div className={styles.encabezadoNombre}>
                <h2 className={styles.nombreGrande}>{solicitud.mascota}</h2>
                <span className={styles.etiquetaEstado}>{mascota?.estado}</span>
              </div>
              <p className={styles.raza}>{mascota?.raza} - {mascota?.edad} - {mascota?.especie}</p>
              <p className={styles.zona}>📍 {mascota?.zona}</p>

              <div className={styles.recuadroInterno}>
                <p className={styles.recuadroTitulo}>Ficha de Salud</p>
                <div className={styles.listaCheck}>
                  {mascota?.vacunas && <label>☑ Vacunas Al Dia</label>}
                  {mascota?.esterilizado && <label>☑ Esterilizado</label>}
                  {mascota?.desparasitado && <label>☑ Desparasitado</label>}
                  {mascota?.otrosTratamientos && <label>☑ {mascota.otrosTratamientos}</label>}
                </div>
              </div>

              <div className={styles.recuadroInterno}>
                <p className={styles.recuadroTitulo}>Comportamiento</p>
                <div className={styles.etiquetas}>
                  {mascota?.comportamiento?.map((c) => (
                    <span key={c} className={styles.etiqueta}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== RECUADRO ADOPTANTE ===== */}
            <div className={styles.recuadroColumna}>
              {solicitud.solicitanteFoto ? (
                <img
                  src={solicitud.solicitanteFoto}
                  alt={solicitud.solicitanteNombre}
                  className={styles.imagenCuadrada}
                />
              ) : (
                <div className={styles.imagenPlaceholder}>✕</div>
              )}

              <h2 className={styles.nombreGrande}>{solicitud.solicitanteNombre}</h2>
              <p className={styles.dato}>{solicitud.solicitanteTelefono}</p>
              <p className={styles.dato}>{solicitud.solicitanteCorreo}</p>

              {solicitud.solicitanteInfoExtra ? (
                <div className={styles.mensajePerfil}>{solicitud.solicitanteInfoExtra}</div>
              ) : (
                <p className={styles.sinInfo}>Sin información adicional en el perfil</p>
              )}

              <div className={styles.recuadroInterno}>
                <p className={styles.recuadroTitulo}>Cuéntanos sobre ti</p>
                <p className={styles.campoDetalle}>
                  <strong>Tipo de vivienda:</strong> {solicitud.tipoVivienda}
                </p>
                <p className={styles.campoDetalle}>
                  <strong>¿Tiene otros animales?:</strong> {solicitud.otrosAnimales}
                </p>
                <p className={styles.campoDetalle}>
                  <strong>¿Quién cuidará al animal?:</strong> {solicitud.quienCuidara}
                </p>
                <p className={styles.campoDetalle}>
                  <strong>Experiencia previa:</strong> {solicitud.experiencia}
                </p>
                <p className={styles.campoDetalle}>
                  <strong>Motivo de la adopción:</strong> {solicitud.motivo}
                </p>
              </div>
            </div>
          </div>

          {solicitud.estado === 'Pendiente' ? (
            <div className={styles.botones}>
              <button
                className={styles.botonAceptar}
                onClick={() => manejarDecision('aceptada')}
              >
                Aceptar
              </button>
              <button
                className={styles.botonRechazar}
                onClick={() => manejarDecision('rechazada')}
              >
                Rechazar
              </button>
              <button className={styles.botonChatear} onClick={() => navigate(`/chat?solicitud=${solicitud.id}`)}>
                Mensajes
              </button>
            </div>
          ) : (
            <div className={styles.botones}>
              <span className={styles.estadoYaDecidido}>
                Esta solicitud ya fue {solicitud.estado.toLowerCase()}
              </span>
              <button className={styles.botonChatear} onClick={() => navigate(`/chat?solicitud=${solicitud.id}`)}>
                Mensajes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}