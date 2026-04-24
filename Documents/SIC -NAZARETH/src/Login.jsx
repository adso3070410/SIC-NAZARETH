import React, { useState } from 'react';

const Login = ({ alIngresar }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Validación de prueba
    if (usuario === 'admin' && clave === '123') {
      alIngresar(); // Aquí le avisamos a App.jsx que cambie de pantalla
    } else {
      alert('Datos incorrectos. Intenta con admin y 123');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px #eee' }}>
        <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>SIA - Colegio Nazareth</h2>
        <form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Usuario" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={clave} 
            onChange={(e) => setClave(e.target.value)} 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
