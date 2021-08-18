import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar.js'


export default function Solicitar() {
    return (
        <>
            <NavBar />
            <main className="container text-center">
            
            <form class="py-5" action="./resultado.html">

            <fieldset class="text-center">
            <legend>
                <h4 class="mt-4">Endereço</h4>
            </legend>
          <div class="mb-3 col-sm-4">
            <select id="select-categoria" name="item-categoria" class="form-select" form="form-cadastro">
                <option selected hidden>Estados com envio autorizado</option>
                <option value="RJ">RJ</option>
                <option value="SP">SP</option>
                <option value="ES">ES</option>
                <option value="BA">BA</option>
            </select>
            <br/>
            <input type="text" class="form-control" aria-describedby="city" placeholder="Cidade"></input>
            <br/>
            <input type="text" class="form-control" aria-describedby="ender" placeholder="Endereço"></input>
            <br/>
            <input type="number" class="form-control" aria-describedby="ender" placeholder="CEP"></input>

        </div>  

        <div class="mb-3 col-sm-4">

            <legend>
                <h4 class="mt-4">Informações para contato</h4>
            </legend>

            <input type="text" class="form-control" placeholder="Nome"></input>
            <br/>
            <input type="number" class="form-control" placeholder="Telefone"></input>
            <br/>
            <input type="email" class="form-control" placeholder="E-mail"></input>
        </div>
        
        
    
        <div class="mb-4 col-sm-5">
            <select id="select-categoria" name="item-categoria" class="form-select" form="form-cadastro">
                <option selected hidden>Dias de emprestimo</option>
                <option value="um">1</option>
                <option value="dois">2</option>
                <option value="três">3</option>
                <option value="quatro">4</option>
                <option value="dois">5</option>
                <option value="três">6</option>
                <option value="quatro">7</option>
            </select>
        </div>

        <a href="resultado.html"><button type="button" class="btn btn-primary">Solicite</button></a>
        </fieldset>




            </form>

            </main>
        </>
    );
}