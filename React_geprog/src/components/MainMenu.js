import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import imgProcure from './img/main.png';

export default function MainMenu() {
    return (
        <section className="container text-center flex-column">
            <h2 className="my-3">Bem-vindo, seu_nome.</h2>

            <a className="reset-link" href="./procure.html">
                <figure className="row link-row mx-1 rounded-3 shadow">
                    <div className="col-5">
                        <img className="img-fluid" src={imgProcure} alt="">
                        </img>
                    </div>
                    <div className="col">
                        <h3 className="link-title">Procure</h3>
                        <p></p>
                    </div>
                </figure>
            </a>
            <a className="reset-link" href="./cadastrar-item.html">
                <figure className="row link-row mx-1 rounded-3 shadow">
                    <div className="col flex-column align-itens-center">
                        <h3 className="link-title">Compartilhe</h3>
                        <p></p>
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src={imgProcure} alt="">
                        </img>
                    </div>
                </figure>
            </a>
        </section>
    )  
}