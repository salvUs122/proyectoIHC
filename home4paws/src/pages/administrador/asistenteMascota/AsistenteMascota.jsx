import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PasoDatosBasicos from './PasoDatosBasicos';
import PasoSalud from './PasoSalud';
import PasoFotos from './PasoFotos';
import PasoConfirmar from './PasoConfirmar';
import { useApp } from '../../../context/AppContext';
import styles from './AsistenteMascota.module.css';

const datosVacios = {
  nombre: '',
  raza: '',
  edad: '',
  tamano: '',
  zona: '',
  vacunas: false,
  esterilizado: false,
  desparasitado: false,
  otrosTratamientos: '',
  comportamiento: [],
  notas: '',
  fotos: [],
};

export default function AsistenteMascota() {
  const { idMascota } = useParams();
  const navigate = useNavigate();
  const esEdicion = Boolean(idMascota);
  const { buscarMascota, agregarMascota, editarMascota } = useApp();

  const [pasoActual, setPasoActual] = useState(1);
  const [datos, setDatos] = useState(datosVacios);

  useEffect(() => {
    if (esEdicion) {
      const mascotaExistente = buscarMascota(idMascota);
      if (mascotaExistente) {
        setDatos({ ...datosVacios, ...mascotaExistente });
      }
    }
  }, [idMascota, esEdicion]);

  const actualizarDatos = (nuevosDatos) => {
    setDatos({ ...datos, ...nuevosDatos });
  };

  const irSiguiente = () => setPasoActual((p) => Math.min(p + 1, 4));
  const irAtras = () => setPasoActual((p) => Math.max(p - 1, 1));

  const publicar = () => {
    if (esEdicion) {
      editarMascota(idMascota, datos);
      navigate('/admin/publicados/editada');
    } else {
      agregarMascota(datos);
      navigate('/admin/publicados/publicada');
    }
  };

  const pasos = [
    { numero: 1, nombre: 'Datos del animal' },
    { numero: 2, nombre: 'Salud y Comportamiento' },
    { numero: 3, nombre: 'Fotos' },
    { numero: 4, nombre: 'Confirmar' },
  ];

  return (
    <div className={styles.contenedor}>
      <div className={styles.indicadorPasos}>
        {pasos.map((p) => (
          <div
            key={p.numero}
            className={`${styles.paso} ${
              pasoActual === p.numero ? styles.pasoActivo : ''
            }`}
          >
            <span className={styles.pasoNumero}>{p.numero}</span>
            <span className={styles.pasoNombre}>{p.nombre}</span>
          </div>
        ))}
      </div>

      <div className={styles.contenidoPaso}>
        {pasoActual === 1 && (
          <PasoDatosBasicos datos={datos} actualizarDatos={actualizarDatos} onSiguiente={irSiguiente} />
        )}
        {pasoActual === 2 && (
          <PasoSalud datos={datos} actualizarDatos={actualizarDatos} onSiguiente={irSiguiente} onAtras={irAtras} />
        )}
        {pasoActual === 3 && (
          <PasoFotos datos={datos} actualizarDatos={actualizarDatos} onSiguiente={irSiguiente} onAtras={irAtras} />
        )}
        {pasoActual === 4 && (
          <PasoConfirmar datos={datos} onAtras={irAtras} onPublicar={publicar} esEdicion={esEdicion} />
        )}
      </div>
    </div>
  );
}