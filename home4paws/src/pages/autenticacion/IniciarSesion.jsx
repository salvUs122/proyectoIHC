import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import styles from './IniciarSesion.module.css';
import logo from '../../assets/logo.png';

export default function IniciarSesion() {
  const navigate = useNavigate();
  const { iniciarSesionUsuario } = useApp();

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [error, setError] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!correo.trim() || !contrasena.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const encontrado = iniciarSesionUsuario(correo, contrasena);
    if (!encontrado) {
      setError('Correo o contraseña incorrectos');
      return;
    }

    navigate('/');
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.card}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />

        <form onSubmit={manejarSubmit} className={styles.formulario}>
          <label className={styles.etiqueta} htmlFor="correo">
            CORREO ELECTRONICO
          </label>
          <input
            id="correo"
            type="email"
            className={styles.input}
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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
          />

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={mostrarContrasena}
              onChange={(e) => setMostrarContrasena(e.target.checked)}
            />
            MOSTRAR CONTRASEÑA
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.botonPrincipal}>
            INICIAR SESION
          </button>
        </form>

        <div className={styles.separador}>
          <span></span>
          <p>0</p>
          <span></span>
        </div>

        <Link to="/registrarse" className={styles.botonSecundario}>
          NO TIENES CUENTA ?
        </Link>
      </div>
    </div>
  );
}