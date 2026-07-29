import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import styles from './BarraNavegacion.module.css';
import logo from '../../assets/logo.png';

export default function BarraNavegacion({ hayNotificaciones = true }) {
  const { usuarioActual } = useApp();

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Home4Paws" className={styles.logo} />

      {usuarioActual ? (
        <div className={styles.iconos}>
          <Link to="/notificaciones" className={styles.iconoCampana}>
            🔔
            {hayNotificaciones && <span className={styles.puntoRojo}></span>}
          </Link>
          <Link to="/cuenta" className={styles.iconoPerfil}>
            👤
          </Link>
        </div>
      ) : (
        <Link to="/identificate" className={styles.botonIdentificate}>
          Identifícate
        </Link>
      )}
    </nav>
  );
}