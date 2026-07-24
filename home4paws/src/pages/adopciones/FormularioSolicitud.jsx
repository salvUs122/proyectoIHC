import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import { mascotas } from '../../data/mascotas';
import styles from './FormularioSolicitud.module.css';

export default function FormularioSolicitud() {
  const { idMascota } = useParams();
  const navigate = useNavigate();
  const mascota = mascotas.find((m) => m.id === Number(idMascota));

  const [tipoVivienda, setTipoVivienda] = useState('');
  const [otrosAnimales, setOtrosAnimales] = useState('');
  const [quienCuidara, setQuienCuidara] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [motivo, setMotivo] = useState('');
  const [error, setError] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (
      !tipoVivienda.trim() ||
      !otrosAnimales.trim() ||
      !quienCuidara.trim() ||
      !experiencia.trim() ||
      !motivo.trim()
    ) {
      setError('Todos los campos son obligatorios');
      return;
    }

    navigate(`/adopciones/${idMascota}/enviada`);
  };

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate(`/adopciones/${idMascota}`)} />

        <div className={styles.card}>
          <h1 className={styles.titulo}>Cuéntanos sobre ti</h1>

          <form onSubmit={manejarSubmit} className={styles.formulario}>
            <label className={styles.etiqueta} htmlFor="vivienda">
              Tipo de vivienda
            </label>
            <input
              id="vivienda"
              type="text"
              className={styles.input}
              value={tipoVivienda}
              onChange={(e) => setTipoVivienda(e.target.value)}
            />

            <div className={styles.filaDoble}>
              <div className={styles.campo}>
                <label className={styles.etiqueta} htmlFor="otrosAnimales">
                  ¿Tienes otros animales?
                </label>
                <input
                  id="otrosAnimales"
                  type="text"
                  className={styles.input}
                  value={otrosAnimales}
                  onChange={(e) => setOtrosAnimales(e.target.value)}
                />
              </div>
              <div className={styles.campo}>
                <label className={styles.etiqueta} htmlFor="quienCuidara">
                  ¿Quién cuidará al animal?
                </label>
                <input
                  id="quienCuidara"
                  type="text"
                  className={styles.input}
                  value={quienCuidara}
                  onChange={(e) => setQuienCuidara(e.target.value)}
                />
              </div>
            </div>

            <label className={styles.etiqueta} htmlFor="experiencia">
              Experiencia previa con mascotas
            </label>
            <textarea
              id="experiencia"
              className={styles.textarea}
              value={experiencia}
              onChange={(e) => setExperiencia(e.target.value)}
            />

            <label className={styles.etiqueta} htmlFor="motivo">
              Motivo de la adopción
            </label>
            <textarea
              id="motivo"
              className={styles.textarea}
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            />

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.botones}>
              <button
                type="button"
                className={styles.botonAtras}
                onClick={() => navigate(`/adopciones/${idMascota}`)}
              >
                Atras
              </button>
              <button type="submit" className={styles.botonEnviar}>
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}