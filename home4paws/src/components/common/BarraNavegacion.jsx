import { Link } from 'react-router-dom';
import styles from './BarraNavegacion.module.css';
import logo from '../../assets/logo.png';

export default function BarraNavegacion({ hayNotificaciones = true }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <img src={logo} alt="Home4Paws" className={styles.logo} />
      </Link>

      <div className={styles.iconos}>
        <Link to="/notificaciones" className={styles.iconoCampana}>
          🔔
          {hayNotificaciones && <span className={styles.puntoRojo}></span>}
        </Link>
        <Link to="/cuenta" className={styles.iconoPerfil}>
          👤
        </Link>
      </div>
    </nav>
  );
}