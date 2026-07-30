import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PestanasCuenta from '../../components/common/PestanasCuenta';
import { useApp } from '../../context/AppContext';
import styles from './DatosPersonales.module.css';

export default function DatosPersonales() {
  const navigate = useNavigate();
  const { usuarioActual, setUsuarioActual, actualizarUsuarioActual } = useApp();
  const inputFotoRef = useRef(null);

  const usuario = usuarioActual || { nombre: 'Invitado', telefono: '', correo: '', foto: null, infoExtra: '' };
  const [infoExtra, setInfoExtra] = useState(usuario.infoExtra || '');

  const cerrarSesion = () => {
    setUsuarioActual(null);
    navigate('/');
  };

  const manejarSeleccionFoto = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;
    const url = URL.createObjectURL(archivo);
    actualizarUsuarioActual({ foto: url });
  };

  const guardarInfoExtra = () => {
    actualizarUsuarioActual({ infoExtra });
  };

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <h1 className={styles.titulo}>Cuenta</h1>
      <PestanasCuenta />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/')} />

        <div className={styles.card}>
          <div className={styles.columnaFoto}>
            {usuario.foto ? (
              <img src={usuario.foto} alt={usuario.nombre} className={styles.fotoPerfil} />
            ) : (
              <div className={styles.fotoPlaceholder}>✕</div>
            )}
            <button
              className={styles.botonFoto}
              onClick={() => inputFotoRef.current.click()}
            >
              + agregar foto de perfil
            </button>
            <input
              ref={inputFotoRef}
              type="file"
              accept="image/*"
              hidden
              onChange={manejarSeleccionFoto}
            />
          </div>

          <div className={styles.columnaDatos}>
            <h2 className={styles.nombre}>{usuario.nombre}</h2>
            <p className={styles.dato}>{usuario.telefono}</p>
            <p className={styles.dato}>{usuario.correo}</p>

            <textarea
              className={styles.infoExtra}
              placeholder="+ agregar infomacion...."
              value={infoExtra}
              onChange={(e) => setInfoExtra(e.target.value)}
              onBlur={guardarInfoExtra}
            />

            <button className={styles.botonCerrarSesion} onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}