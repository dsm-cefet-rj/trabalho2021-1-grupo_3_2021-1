import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import imgProcure from '../components/img/pngwing.com.png';
import imgExemplo from '../components/img/bicicleta.jpg';

const resultados = [
    { titulo: 'Resultado0', img: imgExemplo },
    { titulo: 'Resultado1', img: imgExemplo },
    { titulo: 'Resultado2', img: imgExemplo },
    { titulo: 'Resultado3', img: imgExemplo },
    { titulo: 'Resultado4', img: imgExemplo },
    { titulo: 'Resultado5', img: imgExemplo },
]

function Home () {
    
    return (
        <>
            <section className="first-element container text-center flex-column">
                <h2 className="my-3">Bem-vindo, seu_nome.</h2>
                <div className="row d-flex justify-content-evenly">
                    <figure hidden className="col index-menu blue-card shadow">
                        <Link className="reset-link" to='/procure'>
                            <h3 className="link-title">Procure</h3>
                            <img className="img-fluid" src={imgProcure} alt="" />
                        </Link>
                    </figure>
                    <figure className="col index-menu blue-card shadow">
                        <Link className="reset-link" to="/CadastrarPedido">
                            <h3 className="link-title">Faça um pedido</h3>
                            <img className="img-fluid" src={imgProcure} alt="" />
                        </Link>
                    </figure>
                </div>
            </section>
            <AjudeHome resultado={resultados}/>
        </>
    )
}

function AjudeHome(props) {

    return (
        <section className="text-center">
            <h3 className="mt-4 mb-3">Ajude seus vizinhos!</h3>

            <div className="d-flex flex-wrap justify-content-evenly mb-3">
                {props.resultado.map((item, index) =>
                    <ItemAjude key={index} id={index} titulo={item.titulo} img={item.img} />
                )}
            </div>
        </section>
    );
}

const ItemAjude = (props) => {

    return (
        <div className="green-card pedido-index">
            <h6>{props.titulo}</h6>
            <img className="img-fluid img-ajude" src={props.img} alt="imagem"></img>
        </div>
    )
}

export default Home;