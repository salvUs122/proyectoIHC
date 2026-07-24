import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import { notificaciones } from '../../data/notificaciones';
import styles from './Notificaciones.module.css';

export default function Notificaciones() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>Notificaciones</h1>
      </div>

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/home')} />

        <div className={styles.lista}>
          {notificaciones.map((n) => (
            <div key={n.id} className={styles.item}>
              {!n.leida && <span className={styles.puntoNoLeida}></span>}
              <div className={styles.avatar}></div>
              <div className={styles.info}>
                <h3 className={styles.itemTitulo}>{n.titulo}</h3>
                <p className={styles.itemMensaje}>{n.mensaje}</p>
              </div>
              <button
                className={styles.botonChat}
                onClick={() => navigate('/chat')}
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