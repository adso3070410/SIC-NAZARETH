import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegistroEstudiantes from './components/RegistroEstudiantes';
import RegistroNotas from './components/RegistroNotas';
import GestionDocentes from './components/GestionDocentes';

/**
 * ESTÁNDAR: Componente raíz que organiza los módulos.
 * COMENTARIO: Usamos el estado 'pantalla' para navegar sin recargar la página.
 */
function App() {
  const [pantalla, setPantalla] = useState('login');

  return (
    <div>
      {/* Navegación Condicional */}
      {pantalla === 'login' && (
        <Login alEntrar={() => setPantalla('dashboard')} />
      )}

      {pantalla === 'dashboard' && (
        <Dashboard navegarA={(seccion) => setPantalla(seccion)} />
      )}

      {pantalla === 'registro' && (
        <RegistroEstudiantes alVolver={() => setPantalla('dashboard')} />
      )}

      {pantalla === 'notas' && (
        <RegistroNotas alVolver={() => setPantalla('dashboard')} />
      )}

      {pantalla === 'docentes' && (
        <GestionDocentes alVolver={() => setPantalla('dashboard')} />
      )}
    </div>
  );
}

export default App;