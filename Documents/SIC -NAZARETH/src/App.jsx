// Dentro de la función App()
const [rolActivo, setRolActivo] = useState('');

// En el return:
{pantalla === 'login' && (
  <Login alEntrar={(rolRecibido) => {
    setRolActivo(rolRecibido);
    setPantalla('dashboard');
  }} />
)}

{pantalla === 'dashboard' && (
  <Dashboard 
    rolUsuario={rolActivo} 
    navegarA={(seccion) => setPantalla(seccion)} 
  />
)}