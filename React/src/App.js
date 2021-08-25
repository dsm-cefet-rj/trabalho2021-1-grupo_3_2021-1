import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import Ajude from './components/Ajude';
import CadastraPedido from './cadastraPedido';
import Resultado from './resultado';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>

        <div>

          <Link to="/itens">
            <h1>itens</h1>
          </Link>

          <Link to="/cad">
            <h1>cad</h1>
          </Link>

          { }
          <Switch>
            <Route path="/itens">
              <Resultado />
            </Route>
            <Route path="/cad">
              <CadastraPedido />
            </Route>
          </Switch>
        </div>
      </Router >

    </>
  );
}