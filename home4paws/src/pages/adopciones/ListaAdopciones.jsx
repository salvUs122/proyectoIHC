import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BarraNavegacion from '../../components/common/BarraNavegacion';
import BotonVolver from '../../components/common/BotonVolver';
import FiltrosMascota from '../../components/pets/FiltrosMascota';
import TarjetaMascota from '../../components/pets/TarjetaMascota';
import { useApp } from '../../context/AppContext';
import styles from './ListaAdopciones.module.css';

export default function ListaAdopciones() {
  const navigate = useNavigate();
  const { mascotasVisibles } = useApp();
  const [filtros, setFiltros] = useState({ especies: [], tamanos: [], estados: [] });

  const mascotasFiltradas = useMemo(() => {
    return mascotasVisibles.filter((m) => {
      const pasaEspecie =
        filtros.especies.length === 0 || filtros.especies.includes(m.especie || m.raza);
      const pasaTamano =
        filtros.tamanos.length === 0 || filtros.tamanos.includes(m.tamano);
      const pasaEstado =
        filtros.estados.length === 0 || filtros.estados.includes(m.estado);
      return pasaEspecie && pasaTamano && pasaEstado;
    });
  }, [mascotasVisibles, filtros]);

  return (
    <div className={styles.contenedor}>
      <BarraNavegacion />

      <div className={styles.encabezado}>
        <h1 className={styles.titulo}>Adopciones</h1>
      </div>

      <div className={styles.cuerpo}>
        <FiltrosMascota onAplicar={setFiltros} />

        <div className={styles.listaContenedor}>
          <BotonVolver onClick={() => navigate('/')} />

          {mascotasFiltradas.length === 0 && (
            <p className={styles.sinResultados}>No hay mascotas que coincidan con los filtros.</p>
          )}

          <div className={styles.grid}>
            {mascotasFiltradas.map((mascota) => (
              <TarjetaMascota key={mascota.id} mascota={mascota} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}