import { useNavigate } from 'react-router-dom';
import PantallaConfirmacion from '../../components/common/PantallaConfirmacion';

export default function MascotaEditada() {
  const navigate = useNavigate();
  return (
    <PantallaConfirmacion
      titulo="¡Tu publicacion fue editada!"
      textoBoton="VER MIS PUBLICACIONES"
      onBoton={() => navigate('/admin/publicados')}
    />
  );
}