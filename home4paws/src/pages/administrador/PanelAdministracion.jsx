import BarraAdmin from '../../components/common/BarraAdmin';
import styles from './PanelAdministracion.module.css';

export default function PanelAdministracion() {
  // Datos de prueba, luego vendrán del backend
  const estadisticas = {
    animalesPublicados: 8,
    solicitudesPendientes: 4,
    adopcionesConcretadas: 12,
  };

  return (
    <div className={styles.contenedor}>
      <BarraAdmin />

      <div className={styles.cuerpo}>
        <div className={styles.tarjetas}>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{estadisticas.animalesPublicados}</span>
            <p className={styles.etiqueta}>Animales publicados</p>
          </div>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{estadisticas.solicitudesPendientes}</span>
            <p className={styles.etiqueta}>Solicitudes pendientes</p>
          </div>
          <div className={styles.tarjeta}>
            <span className={styles.numero}>{estadisticas.adopcionesConcretadas}</span>
            <p className={styles.etiqueta}>Adopciones concretadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}