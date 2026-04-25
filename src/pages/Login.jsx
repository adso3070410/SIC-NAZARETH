import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState(''); // Este será el rol seleccionado
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user && pass === '123') {
      localStorage.setItem('userRol', user); // Guarda: Administrador, Docente o Estudiante
      navigate('/dashboard');
    } else {
      alert("Por favor seleccione un usuario y use la clave 123");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1e3a8a' }}>
      <div className="card" style={{ width: '350px', padding: '40px', backgroundColor: 'white', borderRadius: '12px' }}>
        <h2 style={{ color: '#1e3a8a' }}>SIA Nazareth</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>Seleccione su perfil</p>
        
        {/* LISTA DESPLEGABLE DE USUARIOS */}
        <select 
          value={user} 
          onChange={(e) => setUser(e.target.value)}
          style={{ marginBottom: '15px', width: '100%', padding: '10px' }}
        >
          <option value="">-- Seleccionar Usuario --</option>
          <option value="Administrador">Administrador (Control Total)</option>
          <option value="Docente">Docente (Notas y Alumnos)</option>
          <option value="Estudiante">Estudiante (Ver Boletín)</option>
        </select>

        <input 
          type="password" 
          placeholder="Contraseña (123)" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          style={{ marginBottom: '20px', width: '100%' }}
        />
        
        <button onClick={handleLogin} style={{ width: '100%', backgroundColor: '#1e3a8a', color: 'white' }}>
          Ingresar al Sistema
        </button>
      </div>
    </div>
  );
};

export default Login;