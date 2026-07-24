import styles from './PiePagina.module.css';

export default function PiePagina({ mostrarRedes = true }) {
  return (
    <footer className={styles.footer}>
      {mostrarRedes && (
        <div className={styles.redes}>
          <a href="#" className={styles.iconoRed} aria-label="Facebook">f</a>
          <a href="#" className={styles.iconoRed} aria-label="Instagram">📷</a>
          <a href="#" className={styles.iconoRed} aria-label="X">✕</a>
        </div>
      )}
      <p className={styles.texto}>© 2026 Home4Paws. Todos los derechos reservados.</p>
    </footer>
  );
}