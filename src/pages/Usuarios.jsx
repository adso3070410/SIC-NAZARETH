import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Usuarios = () => {
  const navigate = useNavigate();
  const [docentes, setDocentes] = useState([
    { id: '101', nombre: 'Carlos Ruiz', rol: 'Docente', estado: 'Activo' }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate('/dashboard')}>← Volver</button>
      <h1>Gestión de Personal (CU-04)</h1>
      
      <div className="card" style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h3>Registrar / Modificar Personal</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input type="text" placeholder="Nombre completo" />
          <select>
            <option>Asignar Rol</option>
            <option>Docente</option>
            <option>Administrativo</option>
          </select>
          <input type="text" placeholder="ID / Documento" />
          <select>
            <option>Estado</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>
        <button style={{ marginTop: '15px', backgroundColor: '#10b981' }}>Guardar Usuario</button>
      </div>

      <table border="1" style={{ width: '100%', background: 'white', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#1e3a8a', color: 'white' }}>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones (CU-04a)</th>
          </tr>
        </thead>
        <tbody>
          {docentes.map(d => (
            <tr key={d.id} style={{ textAlign: 'center' }}>
              <td>{d.id}</td>
              <td>{d.nombre}</td>
              <td>{d.rol}</td>
              <td style={{ color: d.estado === 'Activo' ? 'green' : 'red' }}>{d.estado}</td>
              <td>
                <button style={{ width: 'auto', padding: '5px', backgroundColor: '#f59e0b' }}>Modificar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;