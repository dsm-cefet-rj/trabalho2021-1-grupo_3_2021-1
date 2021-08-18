import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import Ajude from './components/Ajude'
import Procure from './Procure.js'
import CadastraPedido from './cadastraPedido.js'
import CadastrarItens from './cadastrarItens.js'

import imgProcure from './components/img/main.png';

export default function App() {
  return (
    <CadastrarItens/>
  );
}


