import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar.js'


export default function Procure() {
    return (
        <>
            <NavBar />
            <main className="container text-center">
                <form className="py-5" action="./resultado.html">
                    <h3 className="mt-4">O que você está procurando?</h3>

                    <div className="mb-3">
                        <label className="form-check-label mx-1" for="flexRadioDefault1">
                            <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadioDefault1" value="coisas" checked />
                            Itens
                        </label>

                        <label className="form-check-label mx-1" for="flexRadioDefault2">
                            <input className="form-check-input" type="radio" name="radio-tipo" id="flexRadioDefault2" value="servicos" />
                            Serviços
                        </label>
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" aria-describedby="buscar" placeholder="Digite aqui e clique em BUSCAR" />
                    </div>
                    <button type="submit" className="btn btn-primary">BUSCAR</button>
                </form>
            </main>
        </>
    );
}