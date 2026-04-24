import React, { useState } from 'react';
import Login from './Login';

function App() {
  // Variable para saber si entramos o no
  const [logeado, setLogeado] = useState(false);

  return (
    <div>
      {/* Si no estamos logeados, mostramos el Login */}
      {logeado === false ? (
        <Login alIngresar={() => setLogeado(true)} />
      ) : (
        /* Cuando entremos, por ahora saldrá este mensaje */
        <h1 style={{textAlign: 'center'}}>¡Bienvenida al Dashboard!</h1>
      )}
    </div>
  );
}

export default App;