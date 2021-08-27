import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {store} from '../store'
import { Provider } from 'react-redux'
import './App.css';
import NavBar from '../components/NavBar';
import Home from '../paginas/Home';
import Perfil from '../paginas/Perfil'
import Procure from '../paginas/Procure';
import {Resultado} from '../paginas/ResultadoBusca';
import Emprestimo from '../paginas/Emprestimo';
import { CadProduto } from '../paginas/CadastrarProduto';


function App() {

  return (
    <Provider store={store}>
     <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Perfil/:id">
            <Perfil />
          </Route>
          <Route path="/procure">
            <Procure />
          </Route>
          <Route path="/compartilhe">
            <CadProduto />
          </Route>
          <Route path="/produtos">
            <Resultado />
          </Route>
          
          <Route path="/Emprestimo">
            <Emprestimo />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
/*

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { store } from '../store'
import { Provider } from 'react-redux'
import './App.css';
import NavBar from '../components/NavBar';
import Home from '../paginas/Home';
import Perfil from '../paginas/Perfil'
import Procure from '../paginas/Procure';
import {Resultado} from '../paginas/ResultadoBusca';
import Emprestimo from '../paginas/Emprestimo';
import { CadProduto } from '../paginas/CadastrarProduto';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Perfil/:id">
            <Perfil />
          </Route>
          <Route path="/procure">
            <Procure />
          </Route>
          <Route path="/compartilhe">
            <CadProduto />
          </Route>
          <Route path="/resultado">
            <Resultado />
          </Route>
          
          <Route path="/Emprestimo">
            <Emprestimo />
          </Route>

        </Switch>
      </Router>
    </Provider >
  );
}

export default App;


/*<Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Perfil/:id">
          <Perfil />
        </Route>
        <Route path="/procure">
          <Procure />
        </Route>
        <Route path="/compartilhe">
          <CadastrarProduto />
        </Route>
        <Route path="/resultado">
          <Resultado />
        </Route>
        <Route path="/CadastrarPedido">
          <CadastrarPedido />
        </Route>
        <Route path="/Emprestimo">
          <Emprestimo />
        </Route>

      </Switch>
    </Router>*/