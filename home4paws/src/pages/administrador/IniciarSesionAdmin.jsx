import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './IniciarSesionAdmin.module.css';
import logo from '../../assets/logo.png';

export default function IniciarSesionAdmin() {
  const navigate = useNavigate();
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

    // Login simulado por ahora, luego se conecta con backend
    navigate('/admin/panel');
  };

  return (
    <div className={styles.contenedor}>
      <p className={styles.migaja}>Iniciar sesión Administrador</p>

      <div className={styles.card}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />

        <form onSubmit={manejarSubmit} className={styles.formulario}>
          <label className={styles.etiqueta} htmlFor="correo">
            CUENTA ADMINISTRADOR
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
      </div>
    </div>
  );
}