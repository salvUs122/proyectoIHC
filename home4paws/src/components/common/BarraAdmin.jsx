import { NavLink } from 'react-router-dom';
import styles from './BarraAdmin.module.css';
import logo from '../../assets/logo.png';

export default function BarraAdmin() {
  return (
    <div className={styles.contenedor}>
      <nav className={styles.navbar}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />
        <div className={styles.perfil}></div>
      </nav>

      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>Panel de Administración</h1>
      </div>

      <div className={styles.pestanas}>
        <NavLink
          to="/admin/panel"
          end
          className={({ isActive }) =>
            isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/admin/publicados"
          className={({ isActive }) =>
            isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
          }
        >
          Gestionar publicados
        </NavLink>
        <NavLink
          to="/admin/solicitudes"
          className={({ isActive }) =>
            isActive ? `${styles.pestana} ${styles.activa}` : styles.pestana
          }
        >
          Revisar Solicitudes
        </NavLink>
      </div>
    </div>
  );
}