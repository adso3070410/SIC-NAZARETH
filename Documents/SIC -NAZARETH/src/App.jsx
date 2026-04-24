import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  // Estado para controlar la navegación
  const [logeado, setLogeado] = useState(false);

  return (
    <div>
      {logeado === false ? (
        // Le pasamos la función para que el Login pueda avisar cuando entrar
        <Login alIngresar={() => setLogeado(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;