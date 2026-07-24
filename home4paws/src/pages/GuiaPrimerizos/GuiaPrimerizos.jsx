import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import PiePagina from '../../components/common/PiePagina';
import { guiasAdopcion } from '../../data/guiasAdopcion';
import styles from './GuiaPrimerizos.module.css';

export default function GuiaPrimerizos() {
  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.cuerpo}>
        <BotonVolver onClick={() => navigate('/home')} />

        <h1 className={styles.titulo}>Guia Adoptantes primerizos</h1>

        <div className={styles.recuadroIntro}>
          <p>
            Adoptar es un acto de amor, pero también de responsabilidad. Para
            ayudarte en este hermoso proceso, te recomendamos las siguientes
            guias que se encuentran en los siguientes links
          </p>
        </div>

        <div className={styles.listaEnlaces}>
          {guiasAdopcion.map((guia, i) => (
            <a key={i} href={guia.url} target="_blank" rel="noopener noreferrer" className={styles.enlace}>
              {guia.titulo}
            </a>
          ))}
        </div>
      </div>

      <PiePagina />
    </div>
  );
}