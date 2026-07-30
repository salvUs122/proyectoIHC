import { useState } from 'react';
import styles from './FiltrosMascota.module.css';

export default function FiltrosMascota({ onAplicar }) {
  const [abierto, setAbierto] = useState(false);
  const [especies, setEspecies] = useState([]);
  const [tamanos, setTamanos] = useState([]);
  const [estados, setEstados] = useState([]);

  const alternar = (valor, lista, setLista) => {
    if (lista.includes(valor)) {
      setLista(lista.filter((v) => v !== valor));
    } else {
      setLista([...lista, valor]);
    }
  };

  const aplicarFiltros = () => {
    onAplicar({ especies, tamanos, estados });
    setAbierto(false);
  };

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
          <label>
            <input
              type="checkbox"
              checked={especies.includes('Perro')}
              onChange={() => alternar('Perro', especies, setEspecies)}
            />{' '}
            Perro
          </label>
          <label>
            <input
              type="checkbox"
              checked={especies.includes('Gato')}
              onChange={() => alternar('Gato', especies, setEspecies)}
            />{' '}
            Gato
          </label>
          <label>
            <input
              type="checkbox"
              checked={especies.includes('Otro')}
              onChange={() => alternar('Otro', especies, setEspecies)}
            />{' '}
            Otro
          </label>
        </div>

        <div className={styles.grupo}>
          <p className={styles.grupoTitulo}>TAMAÑO</p>
          <label>
            <input
              type="checkbox"
              checked={tamanos.includes('Pequeño')}
              onChange={() => alternar('Pequeño', tamanos, setTamanos)}
            />{' '}
            Pequeño
          </label>
          <label>
            <input
              type="checkbox"
              checked={tamanos.includes('Mediano')}
              onChange={() => alternar('Mediano', tamanos, setTamanos)}
            />{' '}
            Mediano
          </label>
          <label>
            <input
              type="checkbox"
              checked={tamanos.includes('Grande')}
              onChange={() => alternar('Grande', tamanos, setTamanos)}
            />{' '}
            Grande
          </label>
        </div>

        <div className={styles.grupo}>
          <p className={styles.grupoTitulo}>ESTADO</p>
          <label>
            <input
              type="checkbox"
              checked={estados.includes('Disponible')}
              onChange={() => alternar('Disponible', estados, setEstados)}
            />{' '}
            Disponible
          </label>
          <label>
            <input
              type="checkbox"
              checked={estados.includes('En revision')}
              onChange={() => alternar('En revision', estados, setEstados)}
            />{' '}
            En revision
          </label>
        </div>

        <button className={styles.botonAplicar} onClick={aplicarFiltros}>
          APLICAR
        </button>
      </div>
    </div>
  );
}