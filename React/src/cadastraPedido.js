import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './components/NavBar.js'
import ServCad from './components/ServiçosCadastro'
import ItemCad from './components/ItensCadastro'


export default function Procure() {
    return (
        <>
            <NavBar />
            <main class="container">
        <form class="form-cadastro">
            
            <fieldset class="text-center">
                <legend>
                    <h3 class="mt-4">Do que você precisa?</h3>
                </legend>
                
                <div>     
                        <label class="form-check-label mx-1" for="flexRadio1">
                            <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadio1" value="coisas"/>
                            Itens
                        </label>
                        
                        <label class="form-check-label mx-1" for="flexRadio2">
                            <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadio2" value="servicos"/>
                            Serviços
                        </label> 
                </div>
            </fieldset>
            
            <fieldset class="responsive-form form-coisas">
                <legend>
                    Cadastro de pedido - Itens
                </legend>
                <ItemCad/>
            </fieldset>

            <ServCad/>

            <fieldset class="responsive-form form-servicos">
                <legend>
                    Cadastro de pedido - Serviços
                </legend>

                
            </fieldset>
        </form>

        
    </main>
        </>
    );
}