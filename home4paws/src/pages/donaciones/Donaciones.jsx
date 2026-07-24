import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PiePagina from '../../components/common/PiePagina';
import styles from './Donaciones.module.css';

export default function Donaciones() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/home')} />

        <h1 className={styles.titulo}>Donaciones</h1>

        <div className={styles.recuadro}>
          <p>
            Actualmente gestionamos todas las donaciones (alimento, insumos o
            aportes) de forma personalizada para garantizar la transparencia.
            Por favor, contáctanos a través de nuestras redes sociales para
            coordinar tu donación. Envianos un mensaje directo a nuestras
            redes sociales o puedes presentarte en nuestra ubicacion.
          </p>
        </div>

        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.botonUbicacion}>
          Nuestra ubicación
        </a>
      </div>

      <PiePagina />
    </div>
  );
}