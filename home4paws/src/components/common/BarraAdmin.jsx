import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import styles from './BarraAdmin.module.css';
import logo from '../../assets/logo.png';

export default function BarraAdmin() {
  const navigate = useNavigate();
  const { setAdminActual } = useApp();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarSesion = () => {
    setAdminActual(null);
    navigate('/');
  };

  return (
    <div className={styles.contenedor}>
      <nav className={styles.navbar}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />

        <div className={styles.perfilContenedor}>
          <button
            className={styles.perfil}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú de perfil"
          >
            👤
          </button>

          {menuAbierto && (
            <div className={styles.menuDesplegable}>
              <button className={styles.opcionMenu} onClick={cerrarSesion}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
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