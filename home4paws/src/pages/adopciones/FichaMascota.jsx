import { useParams, useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import { mascotas } from '../../data/mascotas';
import styles from './FichaMascota.module.css';

export default function FichaMascota() {
  const { idMascota } = useParams();
  const navigate = useNavigate();

  const mascota = mascotas.find((m) => m.id === Number(idMascota));

  if (!mascota) {
    return (
      <div className={styles.contenedor}>
        <BarraNavegacion />
        <p className={styles.noEncontrada}>Mascota no encontrada.</p>
      </div>
    );
  }

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
            <p className={styles.raza}>Raza - Edad - Sexo</p>
            <p className={styles.zona}>📍 Zona o ubicacion</p>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Ficha de Salud</p>
              <div className={styles.listaCheck}>
                <label>☑ Vacunas Al Dia</label>
                <label>☑ Esterilizado</label>
                <label>☑ Desparasitado</label>
                <label>☑ Otros</label>
              </div>
            </div>

            <div className={styles.recuadro}>
              <p className={styles.recuadroTitulo}>Comportamiento</p>
              <div className={styles.etiquetas}>
                <span className={styles.etiqueta}>Amigable</span>
                <span className={styles.etiqueta}>Con niños</span>
              </div>
            </div>

            <button
              className={styles.botonSolicitar}
              onClick={() => navigate(`/adopciones/${mascota.id}/solicitud`)}
            >
              SOLICITAR ADOPCION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}