import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar.js'
import ServCad from './components/ServiçosCadastro'
import ItemCad from './components/ItensCadastro'


export default function CadastraPedido() {
    return (
        <>
            <NavBar />
            <main className="container">
                <form className="form-cadastro">

                    <fieldset className="text-center">
                        <legend>
                            <h3 className="mt-4">Do que você precisa?</h3>
                        </legend>

                        <div>
                            <label className="form-check-label mx-1" for="flexRadio1">
                                <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadio1" value="coisas" />
                                Itens
                            </label>

                            <label className="form-check-label mx-1" for="flexRadio2">
                                <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadio2" value="servicos" />
                                Serviços
                            </label>
                        </div>
                    </fieldset>

                    <fieldset className="responsive-form form-coisas">
                        <legend>
                            Cadastro de pedido - Itens
                        </legend>
                        <ItemCad />
                    </fieldset>



                    <fieldset className="responsive-form form-servicos">
                        <legend>
                            Cadastro de pedido - Serviços
                        </legend>

                        <ServCad />
                    </fieldset>
                </form>


            </main>
        </>
    );
}