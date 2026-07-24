import { useNavigate } from 'react-router-dom';
import styles from './Bienvenida.module.css';

export default function Bienvenida() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <p className={styles.migaja}>Crear Cuenta &gt; <span>¡Bienvenido!</span></p>

      <div className={styles.contenido}>
        <div className={styles.circuloCheck}>
          <span className={styles.check}>✓</span>
        </div>

        <h1 className={styles.titulo}>¡Tu cuenta fue creada con éxito!</h1>
        <p className={styles.texto}>
          Ya puedes explorar el catálogo de mascotas disponibles para adopción
          y enviar tu primera solicitud.
        </p>

        <button className={styles.boton} onClick={() => navigate('/home')}>
          Empezar
        </button>
      </div>
    </div>
  );
}