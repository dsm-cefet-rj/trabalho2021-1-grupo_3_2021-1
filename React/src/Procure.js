import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './components/NavBar.js'


export default function Procure() {
    return (
        <>
            <NavBar />
            <main class="container text-center">
                <form class="py-5" action="./resultado.html">
                    <h3 class="mt-4">O que você está procurando?</h3>

                    <div class="mb-3">
                        <label class="form-check-label mx-1" for="flexRadioDefault1">
                            <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadioDefault1" value="coisas" checked />
                            Itens
                        </label>

                        <label class="form-check-label mx-1" for="flexRadioDefault2">
                            <input class="form-check-input" type="radio" name="radio-tipo" id="flexRadioDefault2" value="servicos" />
                            Serviços
                        </label>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" aria-describedby="buscar" placeholder="Digite aqui e clique em BUSCAR" />
                    </div>
                    <button type="submit" class="btn btn-primary">BUSCAR</button>
                </form>
            </main>
        </>
    );
}