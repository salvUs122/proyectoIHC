import { useRef } from 'react';
import styles from './PasosFormulario.module.css';

export default function PasoFotos({ datos, actualizarDatos, onSiguiente, onAtras }) {
  const inputRef = useRef(null);

  const manejarSeleccion = (e) => {
    const archivos = Array.from(e.target.files).slice(0, 5 - datos.fotos.length);
    const nuevasFotos = archivos.map((archivo) => URL.createObjectURL(archivo));
    actualizarDatos({ fotos: [...datos.fotos, ...nuevasFotos] });
  };

  const quitarFoto = (index) => {
    actualizarDatos({ fotos: datos.fotos.filter((_, i) => i !== index) });
  };

  return (
    <div className={styles.card}>
      <p className={styles.textoAyuda}>Sube hasta 5 fotos de la mascota</p>

      <div className={styles.zonaFotos}>
        {datos.fotos.map((foto, i) => (
          <div key={i} className={styles.miniatura}>
            <img src={foto} alt={`Foto ${i + 1}`} />
            <button
              type="button"
              className={styles.botonQuitar}
              onClick={() => quitarFoto(i)}
            >
              ✕
            </button>
            {i === 0 && <span className={styles.etiquetaPortada}>Portada</span>}
          </div>
        ))}

        {datos.fotos.length < 5 && (
          <button
            type="button"
            className={styles.botonAgregarFoto}
            onClick={() => inputRef.current.click()}
          >
            ＋
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={manejarSeleccion}
      />

      <p className={styles.textoAyudaChico}>
        Toca "＋" para subir tus imágenes · La primera será la portada
      </p>

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