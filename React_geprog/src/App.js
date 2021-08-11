import React from 'react';
import './App.css';
import Sev from './components/sev.js'
import fot from './img/bicicleta.jpg';

function App() {
  return (
    <>
      <Sev foto={fot} name="bicicleta" desc="descrição do item"/>
    </>
  );
}

export default App;
