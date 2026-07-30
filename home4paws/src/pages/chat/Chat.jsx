import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import { useApp } from '../../context/AppContext';
import logo from '../../assets/logo.png';
import styles from './Chat.module.css';

export default function Chat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { adminActual, obtenerMensajes, enviarMensaje, buscarSolicitud } = useApp();
  const [texto, setTexto] = useState('');

  const idSolicitud = searchParams.get('solicitud');
  const solicitud = idSolicitud ? buscarSolicitud(idSolicitud) : null;
  const idConversacion = idSolicitud ? `solicitud-${idSolicitud}` : null;

  const mensajes = idConversacion ? obtenerMensajes(idConversacion) : [];

  const nombreContacto = adminActual
    ? solicitud?.solicitanteNombre || 'Usuario'
    : 'REFUGIO - HOME4PAWS';

  const avatarContacto = adminActual ? solicitud?.solicitanteFoto : logo;

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim() || !idConversacion) return;
    const autor = adminActual ? 'admin' : 'usuario';
    enviarMensaje(idConversacion, texto, autor);
    setTexto('');
  };

  if (!idConversacion) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.encabezado}>
          <h1 className={styles.tituloPagina}>Chat</h1>
        </div>
        <div className={styles.cuerpo}>
          <BotonVolver onClick={() => navigate(-1)} />
          <p className={styles.sinConversacion}>
            No hay una conversación seleccionada. Entra desde una solicitud o notificación.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contenedor}>
      <div className={styles.encabezado}>
        <h1 className={styles.tituloPagina}>Chat</h1>
      </div>

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate(-1)} />

        <div className={styles.ventanaChat}>
          <div className={styles.cabecera}>
            {avatarContacto ? (
              <img src={avatarContacto} alt={nombreContacto} className={styles.avatarImg} />
            ) : (
              <div className={styles.avatar}></div>
            )}
            <div>
              <h2 className={styles.nombreRefugio}>{nombreContacto}</h2>
              <p className={styles.enLinea}>
                <span className={styles.puntoVerde}></span> en linea
              </p>
            </div>
          </div>

          <div className={styles.mensajes}>
            {mensajes.length === 0 && (
              <p className={styles.sinMensajes}>
                Aún no hay mensajes. Escribe algo para comenzar.
              </p>
            )}
            {mensajes.map((m) => {
              const esPropio = adminActual ? m.autor === 'admin' : m.autor === 'usuario';
              return (
                <div
                  key={m.id}
                  className={`${styles.burbuja} ${
                    esPropio ? styles.burbujaPropia : styles.burbujaOtro
                  }`}
                >
                  {m.texto}
                </div>
              );
            })}
          </div>

          <form className={styles.formulario} onSubmit={manejarEnvio}>
            <input
              type="text"
              className={styles.input}
              placeholder="Hola como..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
            <button type="submit" className={styles.botonEnviar} aria-label="Enviar">
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}