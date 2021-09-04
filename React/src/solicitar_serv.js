import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar.js'


export default function Solicitar_serv() {
    return (
        <>
            <NavBar />
            <main className="container text-center">
            
            
            <form className="py-5" action="./resultado.html">


            <fieldset class="text-center">
            <legend>
                <h3 class="mt-4">Solicite o servico</h3>
            </legend>
        </fieldset>
        

        <fieldset class="text-center">
            <legend>
                <h4 class="mt-4">Endereço</h4>
            </legend>
          <div class="mb-3 col-sm-4">
            <select id="select-categoria" name="item-categoria" class="form-select" form="form-cadastro">
                <option selected hidden>Cidades disponiveis</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">Teresópolis</option>
                <option value="ES">Magé</option>
            </select>
            <br/>
            <input type="text" class="form-control" aria-describedby="ender" placeholder="Endereço">
            </input>
            <br/>
            <input type="number" class="form-control" aria-describedby="ender" placeholder="CEP">
            </input>

        </div>  

        <div class="mb-3 col-sm-4">

            <legend>
                <h4 class="mt-4">Informações para contato</h4>
            </legend>

            <input type="text" class="form-control" placeholder="Nome">
            </input>
            <br/>
            <input type="number" class="form-control" placeholder="Telefone">
            </input>
            <br/>
            <input type="email" class="form-control" placeholder="E-mail">
            </input>
        </div>
        
        
    
        <div class="mb-4 col-sm-5">
            
            <legend>
                <h4 class="mt-4">Data do atendimento</h4>
            </legend>
            <input type="date" class="form-control">
            </input>
            <br/>
            <input type="time" class="form-control"></input>
            
        </div>

        <a href="resultado.html"><button type="button" class="btn btn-primary">Solicite</button></a>
        </fieldset>
                </form>
                
            </main>
        </>
    );
}