import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from './components/NavBar.js'
import ServCad from './components/ServicosCadastro'
import ItemCad from './components/ItensCadastro'


export default function CadastraPedido() {
    return (
        <>
            <NavBar />
            <main class="container">
        <form class="form-cadastro">
            
            <fieldset class="text-center">
                <legend>
                    <h3 class="mt-4">O que você deseja compartilhar?</h3>
                </legend>



                    <Router>

                        <div>

                            <Link to="/item">
                                <label className="form-check-label mx-1" for="flexRadio1">
                                    <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadio1" value="coisas"/>
                                        Itens
                                </label>

                            </Link>

                                <Link to="/servico">
                                    <label className="form-check-label mx-1" for="flexRadio2">
                                        <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadio1" value="coisas"/>
                                            Servicos
                                    </label>
                                </Link>

                                    { }
                                    <Switch>
                                        <Route path="/servico">
                                            <Servico />
                                        </Route>
                                        <Route path="/item">
                                            <Item />
                                        </Route>
                                    </Switch>
                            </div>
                        </Router >
                    </fieldset>
                </form>


            </main>
        </>
                );
}

                function Item() {
    return (
                <>
                    <legend>
                        Cadastro de pedido - Itens
                    </legend>
                    <ItemCad />
                </>
                );
}

                function Servico() {
    return (
                <>
                    <legend>
                        Cadastro de pedido - Servicos
                    </legend>

                    <ServCad />
                </>
                );
}