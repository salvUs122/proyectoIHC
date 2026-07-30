import BarraAdmin from '../../components/common/BarraAdmin';
import { useApp } from '../../context/AppContext';
import styles from './PanelAdministracion.module.css';

export default function PanelAdministracion() {
  const { mascotas, solicitudes } = useApp();

  const animalesPublicados = mascotas.length;
  const solicitudesPendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length;
  const adopcionesConcretadas = solicitudes.filter((s) => s.estado === 'Aceptada').length;

  return (
    <div className={styles.contenedor}>
      <BarraAdmin />

      <div className={styles.cuerpo}>
        <div className={styles.tarjetas}>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{animalesPublicados}</span>
            <p className={styles.etiqueta}>Animales publicados</p>
          </div>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{solicitudesPendientes}</span>
            <p className={styles.etiqueta}>Solicitudes pendientes</p>
          </div>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{adopcionesConcretadas}</span>
            <p className={styles.etiqueta}>Adopciones concretadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}