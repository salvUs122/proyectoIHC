import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Registrarse.module.css';
import logo from '../../assets/logo.png';

export default function Registrarse() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [error, setError] = useState('');

  const manejarSubmit = (e) => {
  e.preventDefault();
  setError('');

  // Validamos que ningún campo de texto esté vacío
  if (
    !nombre.trim() ||
    !telefono.trim() ||
    !correo.trim() ||
    !contrasena.trim() ||
    !confirmarContrasena.trim()
  ) {
    setError('Todos los campos son obligatorios');
    return;
  }

  if (contrasena.length < 6) {
    setError('La contraseña debe tener al menos 6 caracteres');
    return;
  }

  if (contrasena !== confirmarContrasena) {
    setError('Las contraseñas no coinciden');
    return;
  }

  if (!aceptaTerminos) {
    setError('Debes aceptar los términos y condiciones');
    return;
  }

  navigate('/bienvenida');
};
  return (
    <div className={styles.contenedor}>
      <div className={styles.card}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />

        <form onSubmit={manejarSubmit} className={styles.formulario} noValidate={false}>
          <label className={styles.etiqueta} htmlFor="nombre">
            NOMBRE Y APELLIDOS
          </label>
          <input
            id="nombre"
            type="text"
            className={styles.input}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label className={styles.etiqueta} htmlFor="telefono">
            TELEFONO
          </label>
          <input
            id="telefono"
            type="tel"
            className={styles.input}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <label className={styles.etiqueta} htmlFor="correo">
            CORREO ELECTRONICO
          </label>
          <input
            id="correo"
            type="email"
            className={styles.input}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label className={styles.etiqueta} htmlFor="contrasena">
            CONTRASEÑA
          </label>
          <input
            id="contrasena"
            type={mostrarContrasena ? 'text' : 'password'}
            className={styles.input}
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            minLength={6}
          />

          <label className={styles.etiqueta} htmlFor="confirmarContrasena">
            CONFIRMAR CONTRASEÑA
          </label>
          <input
            id="confirmarContrasena"
            type={mostrarContrasena ? 'text' : 'password'}
            className={styles.input}
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
            minLength={6}
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={mostrarContrasena}
              onChange={(e) => setMostrarContrasena(e.target.checked)}
            />
            MOSTRAR CONTRASEÑA
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
              required
            />
            ACEPTAR TERMINOS Y CONDICIONES
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.botonPrincipal}>
            CREAR CUENTA
          </button>
        </form>

        <div className={styles.separador}>
          <span></span>
          <p>0</p>
          <span></span>
        </div>

        <Link to="/iniciar-sesion" className={styles.botonSecundario}>
          YA TIENES CUENTA ?
        </Link>
      </div>
    </div>
  );
}