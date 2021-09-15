import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useReducer } from 'react';
import store from './store';
import NavBar from './components/NavBar';
import Home from './paginas/Home';
import Perfil from './paginas/Perfil'
import Procure from './paginas/Procure';
import CadastrarProduto from './paginas/CadastrarProduto';
import Resultado from './paginas/ResultadoBusca';
import CadastrarPedido from './paginas/CadastrarPedido';
import Emprestimo from './paginas/Emprestimo';
import pedidosReducer from './produtos/ProdutosSlice';
import {Provider} from 'react-redux';

const App = (props) => {

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
      </Router>

    </Provider>
  );
}

export default App;