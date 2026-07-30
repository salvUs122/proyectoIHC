import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarraAdmin from '../../components/common/BarraAdmin';
import ModalConfirmacion from '../../components/common/ModalConfirmacion';
import { useApp } from '../../context/AppContext';
import styles from './GestionarPublicados.module.css';

const claseEstado = {
  Disponible: 'estadoDisponible',
  'En revision': 'estadoRevision',
  'No disponible': 'estadoNoDisponible',
};

export default function GestionarPublicados() {
  const navigate = useNavigate();
  const { mascotas, eliminarMascota } = useApp();
  const [idAEliminar, setIdAEliminar] = useState(null);

  const confirmarEliminar = () => {
    eliminarMascota(idAEliminar);
    setIdAEliminar(null);
  };

  return (
    <div className={styles.contenedor}>
      <BarraAdmin />

      <div className={styles.cuerpo}>
        <button
          className={styles.botonPublicar}
          onClick={() => navigate('/admin/publicados/nueva')}
        >
          + Publicar nueva mascota
        </button>

        <div className={styles.lista}>
          {mascotas.map((m) => (
            <div key={m.id} className={styles.tarjeta}>
              {m.fotos?.[0] ? (
                <img src={m.fotos[0]} alt={m.nombre} className={styles.fotoImg} />
              ) : (
                <div className={styles.fotoPlaceholder}>✕</div>
              )}
              <div className={styles.info}>
                <h3 className={styles.nombre}>
                  {m.nombre} · {m.raza}
                </h3>
                <p className={styles.detalle}>{m.especie} - {m.tamano}</p>
                <span className={`${styles.badgeEstado} ${styles[claseEstado[m.estado]]}`}>
                  {m.estado}
                </span>
              </div>
              <div className={styles.botones}>
                <button
                  className={styles.botonEditar}
                  onClick={() => navigate(`/admin/publicados/${m.id}/editar`)}
                >
                  Editar
                </button>
                <button
                  className={styles.botonEliminar}
                  onClick={() => setIdAEliminar(m.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {idAEliminar && (
        <ModalConfirmacion
          titulo="¿Estas seguro que quieres eliminar la publicacion de la mascota? Esto implica que la publicacion sera eliminada del catalogo de mascotas permanentemente"
          onCancelar={() => setIdAEliminar(null)}
          onConfirmar={confirmarEliminar}
        />
      )}
    </div>
  );
}