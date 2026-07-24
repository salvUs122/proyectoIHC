import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PestanasCuenta from '../../components/common/PestanasCuenta';
import { solicitudes } from '../../data/solicitudes';
import styles from './HistorialSolicitudes.module.css';

const claseEstado = {
  'En revision': 'estadoRevision',
  'Aceptada': 'estadoAceptada',
  'Rechazada': 'estadoRechazada',
};

export default function HistorialSolicitudes() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <h1 className={styles.titulo}>Cuenta</h1>
      <PestanasCuenta />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/home')} />

        <div className={styles.lista}>
          {solicitudes.map((s) => (
            <div key={s.id} className={styles.tarjeta}>
              <div className={styles.fotoPlaceholder}>✕</div>
              <div className={styles.info}>
                <h3 className={styles.nombre}>
                  {s.mascota} · {s.raza}
                </h3>
                <p className={styles.fecha}>Enviada el {s.fecha}</p>
              </div>
              <span className={`${styles.estado} ${styles[claseEstado[s.estado]]}`}>
                {s.estado}
              </span>
              <button
                className={styles.botonDetalle}
                onClick={() => navigate(`/cuenta/historial/${s.id}`)}
              >
                Ver Detalle
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}