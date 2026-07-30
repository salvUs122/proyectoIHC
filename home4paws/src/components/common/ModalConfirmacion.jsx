import styles from './ModalConfirmacion.module.css';

export default function ModalConfirmacion({ titulo, onCancelar, onConfirmar, textoConfirmar = 'Eliminar' }) {
  return (
    <div className={styles.fondo}>
      <div className={styles.modal}>
        <p className={styles.texto}>{titulo}</p>
        <div className={styles.botones}>
          <button className={styles.botonCancelar} onClick={onCancelar}>
            Cancelar
          </button>
          <button className={styles.botonConfirmar} onClick={onConfirmar}>
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
}