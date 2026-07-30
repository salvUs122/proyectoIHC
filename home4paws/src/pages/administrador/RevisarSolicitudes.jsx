import { useNavigate } from 'react-router-dom';
import BarraAdmin from '../../components/common/BarraAdmin';
import { useApp } from '../../context/AppContext';
import styles from './RevisarSolicitudes.module.css';

const claseEstado = {
  Pendiente: 'estadoPendiente',
  Aceptada: 'estadoAceptada',
  Rechazada: 'estadoRechazada',
};

export default function RevisarSolicitudes() {
  const navigate = useNavigate();
  const { solicitudes } = useApp();

  return (
    <div className={styles.contenedor}>
      <BarraAdmin />

      <div className={styles.cuerpo}>
        {solicitudes.length === 0 && (
          <p className={styles.sinSolicitudes}>Aún no hay solicitudes.</p>
        )}

        <div className={styles.lista}>
          {solicitudes.map((s) => (
            <div key={s.id} className={styles.tarjeta}>
              {s.estado === 'Pendiente' && <span className={styles.puntoNueva}></span>}
              {s.solicitanteFoto ? (
                <img src={s.solicitanteFoto} alt={s.solicitanteNombre} className={styles.avatarImg} />
              ) : (
                <div className={styles.avatar}></div>
              )}
              <div className={styles.info}>
                <h3 className={styles.solicitante}>{s.solicitanteNombre}</h3>
                <p className={styles.mascota}>
                  {s.mascota} · {s.raza}
                </p>
              </div>
              <span className={`${styles.estado} ${styles[claseEstado[s.estado]]}`}>
                {s.estado}
              </span>
              <button
                className={styles.botonRevisar}
                onClick={() => navigate(`/admin/solicitudes/${s.id}`)}
              >
                Revisar Solicitud
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}