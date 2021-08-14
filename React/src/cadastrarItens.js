import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar.js'
import ServCad from './components/ServiçosCadastro'
import ItemCad from './components/ItensCadastro'


export default function CadastrarItens() {
    return (
        <>
            <NavBar />
            <main className="container">
                <form className="form-cadastro">

                    <fieldset className="text-center">
                        <legend>
                            <h3 className="mt-4">O que você deseja compartilhar?</h3>
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
                            Compartilhar itens
                        </legend>

                        <ItemCad />
                    </fieldset>

                    <fieldset className="responsive-form form-servicos">
                        <legend>
                            Compartilhar serviços
                        </legend>

                        <ServCad />
                    </fieldset>
                </form>


            </main>
        </>
    );
}