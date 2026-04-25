import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de Módulos (Asegúrate de que los nombres coincidan con tus archivos)
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Configuracion from './pages/Configuracion';
import Grados from './pages/Grados';
import Materias from './pages/Materias';
import CargaAcademica from './pages/CargaAcademica';
import Usuarios from './pages/Usuarios';
import RegistroEstudiante from './pages/RegistroEstudiante';
import Matricula from './pages/Matricula';
import Notas from './pages/Notas';
import Boletin from './pages/Boletin';

function App() {
  return (
    <Router>
      <Routes>
        {/* CU-01: Control de Acceso */}
        <Route path="/" element={<Login />} />
        
        {/* Panel Principal */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* CU-02: Configuración Institucional */}
        <Route path="/configuracion" element={<Configuracion />} />

        {/* CU-03, CU-03a, CU-03b: Gestión Académica */}
        <Route path="/grados" element={<Grados />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/carga-academica" element={<CargaAcademica />} />

        {/* CU-04: Gestión de Personal / Usuarios */}
        <Route path="/usuarios" element={<Usuarios />} />

        {/* CU-05: Registro de Estudiantes */}
        <Route path="/estudiantes" element={<RegistroEstudiante />} />

        {/* CU-06: Módulo de Matrículas */}
        <Route path="/matricula" element={<Matricula />} />

        {/* CU-07: Registro de Calificaciones */}
        <Route path="/notas" element={<Notas />} />

        {/* CU-08: Reportes y Boletines */}
        <Route path="/boletin" element={<Boletin />} />

        {/* Ruta por defecto en caso de error 404 */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;