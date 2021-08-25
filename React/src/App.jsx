import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useReducer } from 'react';

import NavBar from './components/NavBar';
import Home from './paginas/Home';
import Perfil from './paginas/Perfil'
import Procure from './paginas/Procure';
import CadastrarProduto from './paginas/CadastrarProduto';
import Resultado from './paginas/ResultadoBusca';
import CadastrarPedido from './paginas/CadastrarPedido';
import Emprestimo from './paginas/Emprestimo';
import Bike from './components/img/bicicleta.jpg'
import chave from './components/img/chave-philips.jpg'


class Pedido {
  constructor(tipo, categoria, nome, descricao) {
    this.tipo = tipo;
    this.categoria = categoria;
    this.nome = nome;
    this.descricao = descricao;
  }
}


const App = (props) => {
 
  function projetosReducer(arrayPedidos, action){
      switch(action.type){

        case 'projetos_add':
          let proxId = 1+ arrayPedidos.map.reduce((x,y)=>Math.max(x,y));
          return arrayPedidos.concat([{...action.payload, id: proxId}]);
        case 'projetos_update':
          let index = arrayPedidos.map.indexOf(action.payload.id);
          let projetosUpdated = arrayPedidos.slice();
          return projetosUpdated;

        default:
          throw new Error();
      }
  }
      const initialProjects = [
        
      { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
      { foto: chave, name: 'chave', desc: 'filipis' },
      { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
      { foto: chave, name: 'chave', desc: 'filipis' },];

      const [progetos, dispatch] = useReducer(projetosReducer, initialProjects);


  return (
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
          <Procure/>
        </Route>
        <Route path="/compartilhe">
          <CadastrarProduto progetos={progetos} dispatch={dispatch}/>
        </Route>
        <Route path="/resultado">
          <Resultado progetos={progetos} dispatch={dispatch}/>
        </Route>
        <Route path="/CadastrarPedido">
          <CadastrarPedido progetos={progetos} dispatch={dispatch}/>
        </Route>
        <Route path="/Emprestimo">
          <Emprestimo />
      </Route>

      </Switch>
    </Router>
  );
}

export default App;