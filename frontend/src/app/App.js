import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from '../components/NavBar';
import Home from '../paginas/Home';
import Perfil from '../paginas/Perfil'
import Procure from '../paginas/Procure';
import Escolha from '../paginas/Escolha';
//import { ListaProduto } from '../paginas/listaProduto';
import { ListaPedido } from '../paginas/listaPedido';
import { CadProduto } from '../paginas/CadastrarProduto';
import { CadPedido } from '../paginas/CadastrarPedido';
import Servico from '../paginas/Servico';
import Pedido from '../paginas/Pedido';
import Item from '../paginas/item';
import LoginForm from '../paginas/LoginForm';
import { ListaServico } from '../paginas/listaServico';
import { CadServico } from '../paginas/CadastrarServico';

import { useSelector } from 'react-redux'
import UserRegister  from '../paginas/signupForm';
import Items from '../paginas/listProduto';
import Servicos from '../paginas/ListServico'
import Pedidos from '../paginas/ListPedido'

import { ListagemProduto } from '../paginas/TabelaProduto';


function App() {
  const token = useSelector(state => state.logins.currentToken)
  const id = useSelector(state => state.logins.id)
  useEffect(() => {
    
    if (token) {
      console.log("token: "+token);
      console.log("id: "+id);
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
    }
  });

  return (
    <Router>
      <NavBar />
      <br></br><br></br>
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Perfil">
          <Perfil />
        </Route>
        <Route path="/procure">
          <Procure />
        </Route>
        <Route path="/procureProd">
         <Items/>
        </Route>
        <Route path="/procurePed">
          <Pedidos />
        </Route>
        <Route path="/procureServ">
          <Servicos />
        </Route>
        <Route path="/compartilhe">
          <CadProduto />
        </Route>
        <Route path="/produtos/:id">
          <CadProduto />
        </Route>
        <Route path="/servicos/:id">
          <CadServico />
        </Route>
        <Route path="/pedidos/:id">
          <CadPedido />
        </Route>
        <Route path="/servico/:id">
          <Servico />
        </Route>
        <Route path="/pedido/:id">
          <Pedido />
        </Route>
        <Route path="/produto/:id">
         <Item/>
        </Route>
        <Route path="/servicos">
          <ListaServico />
        </Route>
        <Route path="/CadServico">
          <CadServico />
        </Route>
        <Route path="/CadUser">
          <UserRegister />
        </Route>
        <Route path="/CadPedido">
          <CadPedido />
        </Route>
        <Route path="/pedidos">
          <ListaPedido />
        </Route>

        <Route path="/produtos">
          <ListagemProduto />
        </Route>

        <Route path="/escolha">
          <Escolha />
        </Route>

      </Switch>
    </Router>
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
