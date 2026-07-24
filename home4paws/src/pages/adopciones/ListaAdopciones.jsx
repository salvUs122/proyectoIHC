import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import FiltrosMascota from '../../components/pets/FiltrosMascota';
import TarjetaMascota from '../../components/pets/TarjetaMascota';
import { mascotas } from '../../data/mascotas';
import styles from './ListaAdopciones.module.css';

export default function ListaAdopciones() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>Adopciones</h1>
      </div>

      <div className={styles.cuerpo}>
        <FiltrosMascota />

        <div className={styles.listaContenedor}>
          <BotonVolver onClick={() => navigate('/home')} />

          <div className={styles.grid}>
            {mascotas.map((mascota) => (
              <TarjetaMascota key={mascota.id} mascota={mascota} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}