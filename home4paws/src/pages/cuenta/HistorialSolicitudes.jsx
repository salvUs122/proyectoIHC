import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PestanasCuenta from '../../components/common/PestanasCuenta';
import { useApp } from '../../context/AppContext';
import styles from './HistorialSolicitudes.module.css';

const claseEstado = {
  Pendiente: 'estadoRevision',
  Aceptada: 'estadoAceptada',
  Rechazada: 'estadoRechazada',
};

export default function HistorialSolicitudes() {
  const navigate = useNavigate();
  const { usuarioActual, solicitudesDelUsuario, buscarMascota } = useApp();

  const solicitudes = usuarioActual ? solicitudesDelUsuario(usuarioActual.correo) : [];

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <h1 className={styles.titulo}>Cuenta</h1>
      <PestanasCuenta />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/')} />

        {solicitudes.length === 0 && (
          <p className={styles.sinSolicitudes}>Aún no has enviado ninguna solicitud.</p>
        )}

        <div className={styles.lista}>
          {solicitudes.map((s) => {
            const mascota = buscarMascota(s.idMascota);
            return (
              <div key={s.id} className={styles.tarjeta}>
                {mascota?.fotos?.[0] ? (
                  <img src={mascota.fotos[0]} alt={s.mascota} className={styles.fotoImg} />
                ) : (
                  <div className={styles.fotoPlaceholder}>✕</div>
                )}
                <div className={styles.info}>
                  <h3 className={styles.nombre}>
                    {s.mascota} · {s.raza}
                  </h3>
                  <p className={styles.fecha}>Solicitud #{s.id}</p>
                </div>
                <span className={`${styles.estado} ${styles[claseEstado[s.estado]]}`}>
                  {s.estado}
                </span>
                <button
                  className={styles.botonDetalle}
                  onClick={() => navigate(`/cuenta/historial/${s.id}`)}
                >
                  Ver Detalle
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}