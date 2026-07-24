import { useState } from 'react';
import styles from './FiltrosMascota.module.css';

export default function FiltrosMascota() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={styles.contenedor}>
      <button
        className={styles.botonToggle}
        onClick={() => setAbierto(!abierto)}
      >
        🔽 FILTROS
      </button>

      <div className={`${styles.panel} ${abierto ? styles.panelAbierto : ''}`}>
        <h2 className={styles.tituloDesktop}>FILTROS</h2>

        <div className={styles.grupo}>
          <p className={styles.grupoTitulo}>ESPECIE</p>
          <label><input type="checkbox" /> Perro</label>
          <label><input type="checkbox" /> Gato</label>
          <label><input type="checkbox" /> Otro</label>
        </div>

        <div className={styles.grupo}>
          <p className={styles.grupoTitulo}>TAMAÑO</p>
          <label><input type="checkbox" /> Pequeño</label>
          <label><input type="checkbox" /> Mediano</label>
          <label><input type="checkbox" /> Grande</label>
        </div>

        <div className={styles.grupo}>
          <p className={styles.grupoTitulo}>ESTADO</p>
          <label><input type="checkbox" /> Disponible</label>
          <label><input type="checkbox" /> Proceso</label>
        </div>

        <button className={styles.botonAplicar}>APLICAR</button>
      </div>
    </div>
  );
}