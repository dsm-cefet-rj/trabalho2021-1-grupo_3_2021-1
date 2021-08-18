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
import ServCad from './components/ServiçosCadastro'
import ItemCad from './components/ItensCadastro'


export default function CadastraPedido() {
    return (
        <>
            <NavBar />
            <main className="container">
                <form className="form-cadastro">

                    <legend>
                        <h3 className="mt-4">Do que você precisa?</h3>
                    </legend>



                    <Router>

                        <div>

                            <Link to="/item">
                                <label className="form-check-label mx-1" for="flexRadio1">
                                    <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadio1" value="coisas" />
                                    Itens
                                </label>

                            </Link>

                            <Link to="/servico">
                                <label className="form-check-label mx-1" for="flexRadio2">
                                    <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadio2" value="servicos" />
                                    Serviços
                                </label>
                            </Link>

                            { }
                            <Switch>
                                <Route path="/servico">
                                    <Serviço />
                                </Route>
                                <Route path="/item">
                                    <Item />
                                </Route>
                            </Switch>
                        </div>
                    </Router >
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

function Serviço() {
    return (
        <>
            <legend>
                Cadastro de pedido - Serviços
            </legend>

            <ServCad />
        </>
    );
}