import { NavLink } from 'react-router-dom';
import styles from './PestanasCuenta.module.css';

export default function PestanasCuenta() {
  return (
    <div className={styles.pestanas}>
      <NavLink
        to="/cuenta"
        end
        className={({ isActive }) =>
          isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
        }
      >
        Datos personales
      </NavLink>
      <NavLink
        to="/cuenta/historial"
        className={({ isActive }) =>
          isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
        }
      >
        Historial de solicitudes
      </NavLink>
    </div>
  );
}