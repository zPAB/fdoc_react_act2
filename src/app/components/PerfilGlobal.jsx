import React from 'react';
import { User, Mail } from 'lucide-react';

const PerfilGlobal = () => {
  return (
    <div className="tarjeta">
      <div className="imagen-contenedor">
        <User size={64} color="#555" />
      </div>
      
      <h2 className="nombre">Roberto Rodríguez</h2>
      
      <p className="descripcion">
        Aprendiz del SENA en el 6to trimestre. Me apasiona crear interfaces 
        limpias y aprender nuevas tecnologías como React, Next.js y Tailwind.
      </p>
      
      <button className="boton">
        <Mail size={16} style={{ marginRight: '8px' }} />
        Contactar
      </button>
    </div>
  );
};

export default PerfilGlobal;
