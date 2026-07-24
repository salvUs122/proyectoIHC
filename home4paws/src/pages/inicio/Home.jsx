import { Link } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import PiePagina from '../../components/common/PiePagina';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.contenido}>
        <h1 className={styles.titulo}>Home4Paws</h1>
        <p className={styles.subtitulo}>
          salva una vida y encuentra un amigo para siempre
        </p>

        <div className={styles.grid}>
          <div className={`${styles.tarjeta} ${styles.tarjetaAdoptar}`}>
            <div className={styles.imagenPlaceholder}>🐶</div>
            <Link to="/adopciones" className={styles.botonOscuro}>
              QUIERO ADOPTAR
            </Link>
          </div>

          <div className={styles.columnaDerecha}>
            <div className={styles.tarjeta}>
              <div className={styles.imagenPlaceholderChica}>🐕🐈</div>
              <Link to="/donaciones" className={styles.botonOscuro}>
                Donaciones
              </Link>
            </div>

            <div className={styles.tarjeta}>
              <div className={styles.imagenPlaceholderChica}>🧑‍🦱🐶</div>
              <Link to="/guia-primerizos" className={styles.botonOscuro}>
                ¿Adoptante Primerizo?
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PiePagina />
    </div>
  );
}