import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegistroNotas from './components/RegistroNotas';
import GestionDocentes from './components/GestionDocentes';

function App() {
  const [pantalla, setPantalla] = useState('login');
  const [rolActivo, setRolActivo] = useState('');

  return (
    <div>
      {pantalla === 'login' && (
        <Login alEntrar={(rol) => {
          setRolActivo(rol);
          setPantalla('dashboard');
        }} />
      )}

      {pantalla === 'dashboard' && (
        <Dashboard 
          rolUsuario={rolActivo} 
          navegarA={(seccion) => setPantalla(seccion)} 
        />
      )}

      {/* Aquí llamamos a los módulos reales que acabamos de crear */}
      {pantalla === 'notas' && <RegistroNotas alVolver={() => setPantalla('dashboard')} />}
      {pantalla === 'docentes' && <GestionDocentes alVolver={() => setPantalla('dashboard')} />}
      
      {/* Si no has creado el de RegistroEstudiantes aún, este botón te dará error si lo abres, pero el sistema cargará */}
      {pantalla === 'registro' && (
        <div style={{padding:'20px'}}>
          <h2>Módulo de Estudiantes en construcción</h2>
          <button onClick={() => setPantalla('dashboard')}>Volver</button>
        </div>
      )}
    </div>
  );
}

export default App;