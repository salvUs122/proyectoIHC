import styles from './BotonVolver.module.css';

export default function BotonVolver({ onClick }) {
  return (
    <button className={styles.boton} onClick={onClick}>
      ← Volver
    </button>
  );
}