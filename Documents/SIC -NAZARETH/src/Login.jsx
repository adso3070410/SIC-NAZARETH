import React, { useState } from 'react';

// Pantalla de inicio para el Colegio Nazareth
const Login = ({ alIngresar }) => {
  // Aquí guardamos lo que escribes en las cajas de texto
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  // Esta función revisa si el usuario es correcto
  const entrar = (e) => {
    e.preventDefault(); // Esto evita que la página se recargue sola

    // Validación básica: admin y 123
    if (usuario === 'admin' && clave === '123') {
      alert('¡Bienvenida Shirley!');
      alIngresar(); // Pasa a la siguiente pantalla
    } else {
      alert('Datos incorrectos, intenta de nuevo');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'sans-serif' }}>
      <h2>SIA - COLEGIO NAZARETH</h2>
      
      <form onSubmit={entrar}>
        {/* Caja para el usuario */}
        <div>
          <input 
            type="text" 
            placeholder="Escribe tu usuario" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
          />
        </div>

        {/* Caja para la contraseña */}
        <div style={{ marginTop: '10px' }}>
          <input 
            type="password" 
            placeholder="Escribe tu clave" 
            value={clave} 
            onChange={(e) => setClave(e.target.value)} 
          />
        </div>

        {/* Botón para ingresar */}
        <button type="submit" style={{ marginTop: '15px', cursor: 'pointer' }}>
          INGRESAR
        </button>
      </form>
    </div>
  );
};

export default Login;