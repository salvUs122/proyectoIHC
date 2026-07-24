import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import styles from './Chat.module.css';

const mensajesIniciales = [
  { id: 1, texto: 'Hola, gracias por tu interés en Firulais 🐶', propio: false },
  { id: 2, texto: 'Hola! Me encantaría saber más sobre él', propio: true },
  { id: 3, texto: 'Claro, ¿cuándo podrías visitarnos?', propio: false },
];

export default function Chat() {
  const navigate = useNavigate();
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [texto, setTexto] = useState('');

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;

    setMensajes([...mensajes, { id: Date.now(), texto, propio: true }]);
    setTexto('');
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.encabezado}>
        <h1 className={styles.tituloPagina}>Chat</h1>
      </div>

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate(-1)} />

        <div className={styles.ventanaChat}>
          <div className={styles.cabecera}>
            <div className={styles.avatar}></div>
            <div>
              <h2 className={styles.nombreRefugio}>REFUGIO - HOME4PAWS</h2>
              <p className={styles.enLinea}>
                <span className={styles.puntoVerde}></span> en linea
              </p>
            </div>
          </div>

          <div className={styles.mensajes}>
            {mensajes.map((m) => (
              <div
                key={m.id}
                className={`${styles.burbuja} ${
                  m.propio ? styles.burbujaPropia : styles.burbujaOtro
                }`}
              >
                {m.texto}
              </div>
            ))}
          </div>

          <form className={styles.formulario} onSubmit={enviarMensaje}>
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