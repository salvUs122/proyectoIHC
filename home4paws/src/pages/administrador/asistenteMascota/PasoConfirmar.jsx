import styles from './PasosFormulario.module.css';

export default function PasoConfirmar({ datos, onAtras, onPublicar, esEdicion }) {
  return (
    <div className={styles.card}>
      <p className={styles.textoAyuda}>
        Revisa que todo esté correcto antes de publicar. Puedes volver a cualquier paso para editarlo.
      </p>

      <div className={styles.resumen}>
        {datos.fotos[0] && (
          <img src={datos.fotos[0]} alt={datos.nombre} className={styles.resumenImagen} />
        )}

        <h2 className={styles.resumenNombre}>{datos.nombre}</h2>
        <p className={styles.resumenLinea}>
          {datos.raza} · {datos.edad} · {datos.tamano}
        </p>

        <p className={styles.resumenCampo}>
          <strong>Zona / barrio:</strong> {datos.zona}
        </p>

        <p className={styles.resumenCampo}>
          <strong>Ficha de salud:</strong>{' '}
          {[
            datos.vacunas && 'Vacunas al día',
            datos.esterilizado && 'Esterilizado',
            datos.desparasitado && 'Desparasitado',
          ]
            .filter(Boolean)
            .join(', ') || 'No especificado'}
        </p>

        <p className={styles.resumenCampo}>
          <strong>Comportamiento:</strong>{' '}
          {datos.comportamiento.join(', ') || 'No especificado'}
        </p>

        <p className={styles.resumenCampo}>
          <strong>Fotos:</strong> {datos.fotos.length} foto(s) cargada(s)
        </p>
      </div>

      <div className={styles.botones}>
        <button className={styles.botonAtras} onClick={onAtras}>
          Atras
        </button>
        <button className={styles.botonSiguiente} onClick={onPublicar}>
          {esEdicion ? 'Confirmar' : 'Publicar animal'}
        </button>
      </div>
    </div>
  );
}