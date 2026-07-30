import { useParams, useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import { useApp } from '../../context/AppContext';
import styles from './DetalleSolicitud.module.css';

export default function DetalleSolicitud() {
  const { idSolicitud } = useParams();
  const navigate = useNavigate();
  const { buscarSolicitud, buscarMascota } = useApp();

  const solicitud = buscarSolicitud(idSolicitud);
  const mascota = solicitud ? buscarMascota(solicitud.idMascota) : null;

  if (!solicitud) {
    return <p className={styles.noEncontrada}>Solicitud no encontrada.</p>;
  }

  return (
    <div className={styles.contenedor}>
      <p className={styles.migaja}>
        Mi cuenta &gt; Historial &gt; <span>{solicitud.mascota}</span>
      </p>

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/cuenta/historial')} />

        <div className={styles.card}>
          <div className={styles.columnaImagen}>
            {mascota?.fotos?.[0] ? (
              <img src={mascota.fotos[0]} alt={solicitud.mascota} className={styles.imagenReal} />
            ) : (
              <div className={styles.imagenPlaceholder}>🐾</div>
            )}
          </div>

          <div className={styles.columnaInfo}>
            <h1 className={styles.titulo}>
              {solicitud.mascota} · {solicitud.raza}
            </h1>
            <span className={styles.etiquetaEstado}>{solicitud.estado}</span>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Estado de la solicitud</p>
              <p className={styles.paso}>✅ Enviada</p>
              {solicitud.estado !== 'Pendiente' ? (
                <p className={styles.paso}>
                  {solicitud.estado === 'Aceptada' ? '✅' : '❌'} {solicitud.estado}
                </p>
              ) : (
                <p className={styles.paso}>⏳ En espera de respuesta</p>
              )}
            </div>

            <div className={styles.botones}>
              <button
                className={styles.botonSecundario}
                onClick={() => navigate(`/chat?solicitud=${solicitud.id}`)}
              >
                Abrir chat con el refugio
              </button>
              <button
                className={styles.botonSecundario}
                onClick={() => navigate(`/adopciones/${solicitud.idMascota}`)}
              >
                Ver detalle de la mascota
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}