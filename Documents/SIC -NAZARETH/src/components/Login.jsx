import React, { useState } from 'react';

function Login({ alEntrar }) {
  const [rol, setRol] = useState('Administrador');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [verPass, setVerPass] = useState(false); // Estado para el "ojito"

  const manejarValidacion = (e) => {
    e.preventDefault();
    
    // MEJORA: Validación de campos vacíos
    if (!user || !pass) {
      alert("Por favor, complete todos los campos antes de continuar.");
      return;
    }

    if (user === 'admin' && pass === '123') {
      alert(`¡Acceso Exitoso!\nEntrando como: ${rol}`);
      alEntrar(rol); // Le enviamos el rol al Dashboard
    } else {
      alert("Credenciales incorrectas.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ border: '2px solid #3498db', display: 'inline-block', padding: '40px', borderRadius: '15px', backgroundColor: '#fdfdfd', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#2c3e50' }}>SIA - COLEGIO NAZARETH</h2>
        
        <form onSubmit={manejarValidacion}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Seleccione su Rol:</label>
          <select value={rol} onChange={(e) => setRol(e.target.value)} style={{ display: 'block', margin: '0 auto 20px', padding: '10px', width: '280px' }}>
            <option>Administrador</option>
            <option>Docente</option>
            <option>Estudiante</option>
            <option>Administrativo</option>
          </select>

          <input type="text" placeholder="Usuario" onChange={(e) => setUser(e.target.value)} style={{ display: 'block', margin: '10px auto', padding: '10px', width: '260px' }} />
          
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <input 
              type={verPass ? "text" : "password"} 
              placeholder="Contraseña" 
              onChange={(e) => setPass(e.target.value)} 
              style={{ display: 'block', margin: '10px auto', padding: '10px', width: '260px' }} 
            />
            <button 
              type="button" 
              onClick={() => setVerPass(!verPass)} 
              style={{ position: 'absolute', right: '10px', top: '15px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {verPass ? "👁️" : "🙈"}
            </button>
          </div>

          <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px' }}>
            INICIAR SESIÓN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;