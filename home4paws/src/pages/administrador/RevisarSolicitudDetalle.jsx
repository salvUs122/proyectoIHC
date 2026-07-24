import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import { solicitudesAdmin } from '../../data/solicitudesAdmin';
import styles from './RevisarSolicitudDetalle.module.css';

export default function RevisarSolicitudDetalle() {
  const { idSolicitud } = useParams();
  const navigate = useNavigate();
  const solicitud = solicitudesAdmin.find((s) => s.id === Number(idSolicitud));
  const [resultado, setResultado] = useState(null);

  if (!solicitud) {
    return <p className={styles.noEncontrada}>Solicitud no encontrada.</p>;
  }

  const manejarDecision = (decision) => {
    setResultado(decision);
  };

  if (resultado) {
    return (
      <div className={styles.resultadoContenedor}>
        <div className={styles.resultadoContenido}>
          <div className={styles.circuloResultado}>
            <span className={styles.iconoResultado}>
              {resultado === 'aceptada' ? '✓' : '✕'}
            </span>
          </div>
          <h1 className={styles.resultadoTitulo}>
            {resultado === 'aceptada' ? '¡Solicitud Aceptada!' : '¡Solicitud Rechazada!'}
          </h1>
          <button
            className={styles.botonVerSolicitudes}
            onClick={() => navigate('/admin/solicitudes')}
          >
            VER MIS SOLICITUDES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/admin/solicitudes')} />

        <div className={styles.card}>
          <div className={styles.columnaImagen}>
            <div className={styles.imagenPlaceholder}>🐾</div>
            <h2 className={styles.nombreMascota}>{solicitud.mascota}</h2>
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
                <span className={styles.etiqueta}>Energetico</span>
              </div>
            </div>
          </div>

          <div className={styles.columnaSolicitante}>
            <h3 className={styles.tituloSolicitante}>
              {solicitud.solicitante}
              <span className={styles.subEtiqueta}> (Solicitante)</span>
            </h3>
            <p className={styles.dato}>{solicitud.telefono}</p>
            <p className={styles.dato}>{solicitud.correo}</p>
            <p className={styles.mensaje}>{solicitud.mensaje}</p>

            <div className={styles.botones}>
              <button
                className={styles.botonAceptar}
                onClick={() => manejarDecision('aceptada')}
              >
                Aceptar
              </button>
              <button
                className={styles.botonRechazar}
                onClick={() => manejarDecision('rechazada')}
              >
                Rechazar
              </button>
              <button
                className={styles.botonChatear}
                onClick={() => navigate('/chat')}
              >
                Chatear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}