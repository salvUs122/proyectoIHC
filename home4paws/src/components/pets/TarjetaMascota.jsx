import { Link } from 'react-router-dom';
import styles from './TarjetaMascota.module.css';

export default function TarjetaMascota({ mascota }) {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.imagenPlaceholder}>🐾</div>
      <div className={styles.info}>
        <h3 className={styles.nombre}>{mascota.nombre}</h3>
        <p className={styles.detalle}>
          {mascota.especie} - {mascota.tamano} - {mascota.estado}
        </p>
        <Link to={`/adopciones/${mascota.id}`} className={styles.boton}>
          VER FICHA
        </Link>
      </div>
    </div>
  );
}