import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import Ajude from './components/Ajude'

import Procure from './Procure.js'
import CadastraPedido from './cadastraPedido.js'
import CadastrarItens from './cadastrarItens.js'


ReactDOM.render(
  <CadastraPedido/>
 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
