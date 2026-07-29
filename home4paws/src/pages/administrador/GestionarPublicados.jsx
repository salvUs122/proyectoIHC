import { useNavigate } from 'react-router-dom';
import BarraAdmin from '../../components/common/BarraAdmin';
import { useApp } from '../../context/AppContext';
import styles from './GestionarPublicados.module.css';

export default function GestionarPublicados() {
  const navigate = useNavigate();
  const { mascotas, eliminarMascota } = useApp();

  const manejarEliminar = (id) => {
    const confirmar = window.confirm('¿Seguro que quieres eliminar esta publicación?');
    if (!confirmar) return;
    eliminarMascota(id);
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
              <div className={styles.fotoPlaceholder}>✕</div>
              <div className={styles.info}>
                <h3 className={styles.nombre}>
                  {m.nombre} · {m.raza}
                </h3>
                <p className={styles.detalle}>{m.especie} - {m.tamano}</p>
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
                  onClick={() => manejarEliminar(m.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}