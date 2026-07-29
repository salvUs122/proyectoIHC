import { Link, useNavigate } from 'react-router-dom';
import BotonVolver from '../../components/common/BotonVolver';
import PiePagina from '../../components/common/PiePagina';
import logo from '../../assets/logo.png';
import styles from './Inicio.module.css';

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <div className={styles.encabezado}>
        <BotonVolver onClick={() => navigate('/')} />
      </div>

      <div className={styles.contenido}>
        <img src={logo} alt="Home4Paws" className={styles.logo} />
        <h1 className={styles.titulo}>Home4Paws</h1>
        <p className={styles.subtitulo}>
          salva una vida y encuentra un amigo para siempre
        </p>

        <div className={styles.botones}>
          <Link to="/iniciar-sesion" className={styles.botonPrimario}>
            iniciar sesion
          </Link>
          <Link to="/registrarse" className={styles.botonSecundario}>
            registrarse
          </Link>
        </div>

        <Link to="/admin" className={styles.botonAdmin}>
          Ingresar como Administrador
        </Link>
      </div>

      <PiePagina />
    </div>
  );
}