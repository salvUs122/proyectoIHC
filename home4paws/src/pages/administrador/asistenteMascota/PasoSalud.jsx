import styles from './PasosFormulario.module.css';

const opcionesComportamiento = ['Amigable', 'Con niños', 'Con otros animales', 'Tímido', 'Enérgico', 'Tranquilo'];

export default function PasoSalud({ datos, actualizarDatos, onSiguiente, onAtras }) {
  const alternarComportamiento = (opcion) => {
    const yaSeleccionado = datos.comportamiento.includes(opcion);
    const nuevaLista = yaSeleccionado
      ? datos.comportamiento.filter((c) => c !== opcion)
      : [...datos.comportamiento, opcion];
    actualizarDatos({ comportamiento: nuevaLista });
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.subtitulo}>Ficha de salud</h2>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={datos.vacunas}
          onChange={(e) => actualizarDatos({ vacunas: e.target.checked })}
        />
        Vacunas al día
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={datos.esterilizado}
          onChange={(e) => actualizarDatos({ esterilizado: e.target.checked })}
        />
        Esterilizado
      </label>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={datos.desparasitado}
          onChange={(e) => actualizarDatos({ desparasitado: e.target.checked })}
        />
        Desparasitado
      </label>

      <label className={styles.etiqueta}>Otros tratamientos</label>
      <input
        type="text"
        className={styles.input}
        value={datos.otrosTratamientos}
        onChange={(e) => actualizarDatos({ otrosTratamientos: e.target.value })}
        placeholder="Ej: tiene contra la rabia"
      />

      <h2 className={styles.subtitulo}>Comportamiento</h2>
      <div className={styles.etiquetasSeleccionables}>
        {opcionesComportamiento.map((opcion) => (
          <button
            type="button"
            key={opcion}
            className={`${styles.etiquetaBoton} ${
              datos.comportamiento.includes(opcion) ? styles.etiquetaSeleccionada : ''
            }`}
            onClick={() => alternarComportamiento(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>

      <label className={styles.etiqueta}>Notas adicionales (opcional)</label>
      <textarea
        className={styles.textarea}
        value={datos.notas}
        onChange={(e) => actualizarDatos({ notas: e.target.value })}
      />

      <div className={styles.botones}>
        <button className={styles.botonAtras} onClick={onAtras}>
          Atras
        </button>
        <button className={styles.botonSiguiente} onClick={onSiguiente}>
          Siguiente
        </button>
      </div>
    </div>
  );
}