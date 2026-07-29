import { useNavigate } from 'react-router-dom';
import PantallaConfirmacion from '../../components/common/PantallaConfirmacion';

export default function MascotaPublicada() {
  const navigate = useNavigate();
  return (
    <PantallaConfirmacion
      titulo="¡Tu mascota fue publicada!"
      textoBoton="VER MIS PUBLICACIONES"
      onBoton={() => navigate('/admin/publicados')}
    />
  );
}