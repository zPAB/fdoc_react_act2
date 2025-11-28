import React from 'react';
// 1. Tu componente
import PerfilGlobal from './components/PerfilGlobal';
// 2. Componentes de tus compañeros (Extraídos de los commits)
import BadgeEstado from './components/BadgeEstado';
import AvisoInline from './components/AvisoInline';
import FichaProducto from './components/FichaProducto';

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.header}>
        Actividad 2: Integración del Equipo
      </h1>
      
      <p style={styles.subtext}>
        Visualización de los 4 componentes del repositorio:
      </p>
    </main>
  );
}
