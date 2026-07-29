import { useParams, useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import { useApp } from '../../context/AppContext';
import styles from './FichaMascota.module.css';

export default function FichaMascota() {
  const { idMascota } = useParams();
  const navigate = useNavigate();
  const { buscarMascota, usuarioActual } = useApp();

  const mascota = buscarMascota(idMascota);

  if (!mascota) {
    return (
      <div className={styles.contenedor}>
        <BarraNavegacion />
        <p className={styles.noEncontrada}>Mascota no encontrada.</p>
      </div>
    );
  }

  const sinFichaSalud =
    !mascota.vacunas && !mascota.esterilizado && !mascota.desparasitado && !mascota.otrosTratamientos;

  const manejarSolicitar = () => {
    if (!usuarioActual) {
      navigate('/identificate');
      return;
    }
    navigate(`/adopciones/${mascota.id}/solicitud`);
  };

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/adopciones')} />

        <div className={styles.tarjetaPrincipal}>
          <div className={styles.columnaImagen}>
            <div className={styles.imagenPlaceholder}>🐾</div>
            <div className={styles.puntos}>
              <span className={styles.puntoActivo}></span>
              <span className={styles.punto}></span>
              <span className={styles.punto}></span>
              <span className={styles.punto}></span>
            </div>

            <div className={styles.estadoMobile}>
              <p className={styles.estadoTitulo}>ESTADO</p>
              <p>○ {mascota.estado}</p>
            </div>
          </div>

          <div className={styles.columnaInfo}>
            <div className={styles.encabezadoInfo}>
              <h1 className={styles.nombre}>{mascota.nombre}</h1>
              <span className={styles.estadoDesktop}>○ {mascota.estado}</span>
            </div>
            <p className={styles.raza}>
              {mascota.raza} · {mascota.edad} · {mascota.tamano}
            </p>
            <p className={styles.zona}>📍 {mascota.zona}</p>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Ficha de Salud</p>
              <div className={styles.listaCheck}>
                {mascota.vacunas && <label>☑ Vacunas Al Dia</label>}
                {mascota.esterilizado && <label>☑ Esterilizado</label>}
                {mascota.desparasitado && <label>☑ Desparasitado</label>}
                {mascota.otrosTratamientos && <label>☑ {mascota.otrosTratamientos}</label>}
                {sinFichaSalud && <p className={styles.sinDatos}>Sin datos registrados</p>}
              </div>
            </div>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Comportamiento</p>
              <div className={styles.etiquetas}>
                {mascota.comportamiento && mascota.comportamiento.length > 0 ? (
                  mascota.comportamiento.map((c) => (
                    <span key={c} className={styles.etiqueta}>
                      {c}
                    </span>
                  ))
                ) : (
                  <p className={styles.sinDatos}>Sin datos registrados</p>
                )}
              </div>
            </div>

            {mascota.notas && (
              <div className={styles.recuadro}>
                <p className={styles.recuadroTitulo}>Notas adicionales</p>
                <p>{mascota.notas}</p>
              </div>
            )}

            <button className={styles.botonSolicitar} onClick={manejarSolicitar}>
              SOLICITAR ADOPCION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}