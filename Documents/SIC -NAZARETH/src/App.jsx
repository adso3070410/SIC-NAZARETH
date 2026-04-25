import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegistroEstudiantes from './components/RegistroEstudiantes';
import RegistroNotas from './components/RegistroNotas';
import GestionDocentes from './components/GestionDocentes';

/**
 * ESTÁNDAR: El componente raíz orquestador.
 * COMENTARIO: Aquí controlamos qué pantalla se muestra usando el estado 'seccion'.
 */
function App() {
  const [seccion, setSeccion] = useState('login');

  return (
    <div>
      {/* 1. Login: Le pasamos la función para ir al dashboard */}
      {seccion === 'login' && (
        <Login alIngresar={() => setSeccion('dashboard')} />
      )}

      {/* 2. Dashboard: Le pasamos la función para navegar a los módulos */}
      {seccion === 'dashboard' && (
        <Dashboard alCambiarPantalla={(donde) => setSeccion(donde)} />
      )}

      {/* 3. Módulos: Todos tienen un botón para volver al dashboard */}
      {seccion === 'registro' && (
        <RegistroEstudiantes alVolver={() => setSeccion('dashboard')} />
      )}

      {seccion === 'notas' && (
        <RegistroNotas alVolver={() => setSeccion('dashboard')} />
      )}

      {seccion === 'docentes' && (
        <GestionDocentes alVolver={() => setSeccion('dashboard')} />
      )}
    </div>
  );
}

export default App;