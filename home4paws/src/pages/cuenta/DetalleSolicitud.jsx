import { useParams, useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import { solicitudes } from '../../data/solicitudes';
import styles from './DetalleSolicitud.module.css';

export default function DetalleSolicitud() {
  const { idSolicitud } = useParams();
  const navigate = useNavigate();

  const solicitud = solicitudes.find((s) => s.id === Number(idSolicitud));

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
            <div className={styles.imagenPlaceholder}>🐾</div>
          </div>

          <div className={styles.columnaInfo}>
            <h1 className={styles.titulo}>
              {solicitud.mascota} · {solicitud.raza}, {solicitud.edad}
            </h1>
            <span className={styles.etiquetaEstado}>{solicitud.estado}</span>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Estado de la solicitud</p>
              <p className={styles.paso}>✅ Enviada — {solicitud.fecha}</p>
              <p className={styles.paso}>
                ✅ Vista por el refugio — {solicitud.fechaVista}
              </p>
              <p className={styles.paso}>⏳ En espera de respuesta</p>
            </div>

            <div className={styles.botones}>
              <button
                className={styles.botonSecundario}
                onClick={() => navigate('/chat')}
              >
                Abrir chat con el refugio
              </button>
              <button
                className={styles.botonSecundario}
                onClick={() => navigate('/adopciones')}
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