import { useNavigate } from 'react-router-dom';
import styles from './SolicitudEnviada.module.css';

export default function SolicitudEnviada() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <div className={styles.circuloCheck}>
          <span className={styles.check}>✓</span>
        </div>

        <h1 className={styles.titulo}>¡Tu solicitud fue enviada!</h1>
        <p className={styles.texto}>
          El dador recibirá tu solicitud y te responderá por el chat interno.
          Te notificaremos cuando cambie el estado.
        </p>

        <div className={styles.botones}>
          <button
            className={styles.botonSecundario}
            onClick={() => navigate('/cuenta/historial')}
          >
            VER MIS SOLICITUDES
          </button>
          <button
            className={styles.botonPrincipal}
            onClick={() => navigate('/adopciones')}
          >
            SEGUIR EXPLORANDO
          </button>
        </div>
      </div>
    </div>
  );
}