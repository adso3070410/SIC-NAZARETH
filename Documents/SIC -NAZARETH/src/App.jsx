import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegistroEstudiantes from './components/RegistroEstudiantes';
import RegistroNotas from './components/RegistroNotas';
import GestionDocentes from './components/GestionDocentes';

/**
 * COMPONENTE RAÍZ: App.jsx
 * Orquesta la navegación entre los módulos del sistema académico (PMV).
 */
function App() {
  const [pantalla, setPantalla] = useState('login');
  const [rolActivo, setRolActivo] = useState('');

  // Función para manejar el acceso exitoso y asignar el rol
  const manejarAcceso = (rol) => {
    setRolActivo(rol);
    setPantalla('dashboard');
  };

  return (
    <div className="container">
      {/* MÓDULO DE SEGURIDAD (CU-01) */}
      {pantalla === 'login' && <Login alEntrar={manejarAcceso} />}

      {/* PANEL DE BIENVENIDA TRAS ACCESO EXITOSO */}
      {pantalla === 'dashboard' && (
        <Dashboard 
          rolUsuario={rolActivo} 
          navegarA={(seccion) => setPantalla(seccion)} 
        />
      )}

      {/* MÓDULO DE REGISTRO ESTUDIANTIL Y CONSULTAS (CU-06 / CU-10) */}
      {pantalla === 'registro' && <RegistroEstudiantes alVolver={() => setPantalla('dashboard')} />}

      {/* MÓDULO DE CONTROL DE CALIFICACIONES (CU-09) */}
      {pantalla === 'notas' && <RegistroNotas alVolver={() => setPantalla('dashboard')} />}

      {/* MÓDULO DE GESTIÓN DE PERSONAL DOCENTE (CU-05) */}
      {pantalla === 'docentes' && <GestionDocentes alVolver={() => setPantalla('dashboard')} />}
    </div>
  );
}

export default App;