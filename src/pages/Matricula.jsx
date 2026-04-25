import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Matricula = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [estudianteEncontrado, setEstudianteEncontrado] = useState(null);

  // Simulación de búsqueda (Paso 1 del CU-06)
  const buscarEstudiante = () => {
    if (busqueda.trim() === "") {
      alert("Por favor ingrese un nombre o documento");
      return;
    }
    // Simulamos que encuentra a un estudiante registrado en el CU-05
    setEstudianteEncontrado({
      nombre: busqueda,
      documento: "1098765432",
      estado: "Registrado (Sin Matrícula)"
    });
  };

  const registrarMatricula = () => {
    alert("Proceso completado: Estudiante matriculado exitosamente (CU-06)");
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')} style={{ width: 'auto', marginBottom: '20px' }}>
        ← Volver al Panel
      </button>

      <header style={{ borderBottom: '2px solid #1e3a8a', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1>Asignación de Matrícula (CU-06)</h1>
        <p>Vincule a un estudiante previamente registrado con un grado y grupo académico.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
        
        {/* PASO 1: BUSCAR ESTUDIANTE */}
        <div className="card" style={{ margin: 0, textAlign: 'left' }}>
          <h3 style={{ color: '#1e3a8a' }}>1. Buscar Estudiante</h3>
          <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Ingrese el nombre o documento del alumno registrado en el CU-05.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="Nombre o ID del estudiante..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button onClick={buscarEstudiante} style={{ width: 'auto', backgroundColor: '#3b82f6' }}>
              Buscar
            </button>
          </div>

          {estudianteEncontrado && (
            <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#f0f9ff', borderRadius: '5px', border: '1px solid #bae6fd' }}>
              <p><strong>Estudiante:</strong> {estudianteEncontrado.nombre}</p>
              <p><strong>Documento:</strong> {estudianteEncontrado.documento}</p>
              <p><strong>Estado actual:</strong> <span style={{ color: '#0369a1' }}>{estudianteEncontrado.estado}</span></p>
            </div>
          )}
        </div>

        {/* PASO 2: SELECCIONAR GRADO */}
        <div className="card" style={{ margin: 0, textAlign: 'left', opacity: estudianteEncontrado ? 1 : 0.5 }}>
          <h3 style={{ color: '#1e3a8a' }}>2. Seleccionar Grado y Grupo</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label>Grado Destino:</label>
              <select disabled={!estudianteEncontrado}>
                <option>Seleccione nivel...</option>
                <option>1° Primaria</option>
                <option>2° Primaria</option>
                <option>11° Bachillerato</option>
              </select>
            </div>
            <div>
              <label>Grupo / Sección:</label>
              <select disabled={!estudianteEncontrado}>
                <option>Seleccione grupo...</option>
                <option>Grupo A</option>
                <option>Grupo B</option>
                <option>Grupo C</option>
              </select>
            </div>
          </div>
        </div>

        {/* PASO 3: REGISTRAR MATRÍCULA */}
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <button 
            disabled={!estudianteEncontrado}
            onClick={registrarMatricula}
            style={{ 
              width: 'auto', 
              padding: '12px 30px', 
              backgroundColor: estudianteEncontrado ? '#10b981' : '#cbd5e1',
              fontSize: '1rem' 
            }}
          >
            3. Registrar Matrícula Final
          </button>
        </div>

      </div>
    </div>
  );
};

export default Matricula;