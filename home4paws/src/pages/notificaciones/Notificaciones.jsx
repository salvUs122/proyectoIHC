import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import { useApp } from '../../context/AppContext';
import logo from '../../assets/logo.png';
import styles from './Notificaciones.module.css';

export default function Notificaciones() {
  const navigate = useNavigate();
  const { usuarioActual, notificacionesDelUsuario, marcarNotificacionLeida } = useApp();

  const notificaciones = usuarioActual
    ? notificacionesDelUsuario(usuarioActual.correo)
    : [];

  const abrirNotificacion = (notificacion) => {
    marcarNotificacionLeida(notificacion.id);
    navigate(`/chat?solicitud=${notificacion.idSolicitud}`);
  };

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>Notificaciones</h1>
      </div>

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/')} />

        {notificaciones.length === 0 && (
          <p className={styles.sinNotificaciones}>No tienes notificaciones aún.</p>
        )}

        <div className={styles.lista}>
          {notificaciones.map((n) => (
            <div key={n.id} className={styles.item}>
              {!n.leida && <span className={styles.puntoNoLeida}></span>}
              <img src={logo} alt="Refugio" className={styles.avatar} />
              <div className={styles.info}>
                <h3 className={styles.itemTitulo}>{n.titulo}</h3>
                <p className={styles.itemMensaje}>{n.mensaje}</p>
              </div>
              <button
                className={styles.botonChat}
                onClick={() => abrirNotificacion(n)}
                aria-label="Abrir chat"
              >
                💬
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}