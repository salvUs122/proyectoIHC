import { useState } from 'react';
import styles from './PasosFormulario.module.css';

export default function PasoDatosBasicos({ datos, actualizarDatos, onSiguiente, onCancelar }) {
  const [error, setError] = useState('');

  const manejarSiguiente = () => {
    if (
      !datos.nombre.trim() ||
      !datos.especie ||
      !datos.raza.trim() ||
      !datos.edad.trim() ||
      !datos.tamano.trim() ||
      !datos.zona.trim()
    ) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError('');
    onSiguiente();
  };

  return (
    <div className={styles.card}>
      <label className={styles.etiqueta}>Nombre de la mascota</label>
      <input
        type="text"
        className={styles.input}
        value={datos.nombre}
        onChange={(e) => actualizarDatos({ nombre: e.target.value })}
      />

      <label className={styles.etiqueta}>Especie</label>
      <select
        className={styles.input}
        value={datos.especie}
        onChange={(e) => actualizarDatos({ especie: e.target.value })}
      >
        <option value="">Seleccionar...</option>
        <option value="Perro">Perro</option>
        <option value="Gato">Gato</option>
        <option value="Otro">Otro</option>
      </select>

      <label className={styles.etiqueta}>Raza</label>
      <input
        type="text"
        className={styles.input}
        value={datos.raza}
        onChange={(e) => actualizarDatos({ raza: e.target.value })}
      />

      <label className={styles.etiqueta}>Edad aproximada</label>
      <input
        type="text"
        className={styles.input}
        value={datos.edad}
        onChange={(e) => actualizarDatos({ edad: e.target.value })}
      />

      <label className={styles.etiqueta}>Tamaño</label>
      <select
        className={styles.input}
        value={datos.tamano}
        onChange={(e) => actualizarDatos({ tamano: e.target.value })}
      >
        <option value="">Seleccionar...</option>
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>

      <label className={styles.etiqueta}>Zona / barrio</label>
      <input
        type="text"
        className={styles.input}
        value={datos.zona}
        onChange={(e) => actualizarDatos({ zona: e.target.value })}
      />

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.botones}>
        <button className={styles.botonAtras} onClick={onCancelar}>
          Atras
        </button>
        <button className={styles.botonSiguiente} onClick={manejarSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
}