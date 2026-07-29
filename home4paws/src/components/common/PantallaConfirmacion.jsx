import styles from './PantallaConfirmacion.module.css';

export default function PantallaConfirmacion({ tipo = 'exito', titulo, textoBoton, onBoton }) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <div className={styles.circulo}>
          <span className={styles.icono}>{tipo === 'exito' ? '✓' : '✕'}</span>
        </div>
        <h1 className={styles.titulo}>{titulo}</h1>
        <button className={styles.boton} onClick={onBoton}>
          {textoBoton}
        </button>
      </div>
    </div>
  );
}