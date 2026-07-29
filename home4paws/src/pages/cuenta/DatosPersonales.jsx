import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PestanasCuenta from '../../components/common/PestanasCuenta';
import { useApp } from '../../context/AppContext';
import styles from './DatosPersonales.module.css';

export default function DatosPersonales() {
  const navigate = useNavigate();
  const { usuarioActual, setUsuarioActual } = useApp();
  const [infoExtra, setInfoExtra] = useState('');

  const usuario = usuarioActual || { nombre: 'Invitado', telefono: '', correo: '' };

  const cerrarSesion = () => {
    setUsuarioActual(null);
    navigate('/');
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
            <div className={styles.fotoPlaceholder}>✕</div>
            <button className={styles.botonFoto}>+ agregar foto de perfil</button>
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