import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 

function Procure () {
    return (
        <>
            <main className="container text-center">
                <form className="py-5" action="./resultado.html">
                    <h3 className="mt-4">O que você está procurando?</h3>

                    <div className="mb-3">
                        <label className="form-check-label mx-1">
                            <input className="form-check-input mx-1" type="radio" name="radio-tipo" id="flexRadioDefault1" value="coisas"/>
                            Itens
                        </label>

                        <label className="form-check-label">
                            <input className="form-check-input mx-1" type="radio" name="radio-tipo" id="flexRadioDefault2" value="servicos"/>
                            Servicos
                        </label>
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" aria-describedby="buscar" placeholder="Digite aqui e clique em BUSCAR" />
                    </div>
                    <Link to="/resultado"><button type="submit" className="btn btn-primary">BUSCAR</button></Link>
                </form>
            </main>
        </>
    );
}

export default Procure;