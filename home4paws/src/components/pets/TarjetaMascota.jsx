import { Link } from 'react-router-dom';
import styles from './TarjetaMascota.module.css';

export default function TarjetaMascota({ mascota }) {
  return (
    <div className={styles.tarjeta}>
      {mascota.fotos && mascota.fotos[0] ? (
        <img src={mascota.fotos[0]} alt={mascota.nombre} className={styles.imagen} />
      ) : (
        <div className={styles.imagenPlaceholder}>🐾</div>
      )}
      <div className={styles.info}>
        <h3 className={styles.nombre}>{mascota.nombre}</h3>
        <p className={styles.detalle}>
          {mascota.especie || mascota.raza} - {mascota.tamano} - {mascota.estado}
        </p>
        <Link to={`/adopciones/${mascota.id}`} className={styles.boton}>
          VER FICHA
        </Link>
      </div>
    </div>
  );
}