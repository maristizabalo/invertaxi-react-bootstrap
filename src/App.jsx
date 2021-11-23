import React from "react";

import Principal from "./components/Principal";
import './App.css';
import VistaSupervisor from "./components/Vistas/VistaSupervisor";
import {UsuarioContext} from "./context/UsuarioProvider";

const App = () => {

  const {usuario} = React.useContext(UsuarioContext)

  return (

      <div className="">
        { usuario.rol === null && <Principal />}
        { usuario.rol === 'Supervisor' && <VistaSupervisor />}
        { usuario.rol === 'Invitado' && <Principal />}
        
      </div>
  );
}

export default App;
