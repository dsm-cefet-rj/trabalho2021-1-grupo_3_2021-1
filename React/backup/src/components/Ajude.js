import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import imgExemplo from './img/bicicleta.jpg';

const resultados = [
    {titulo: 'Resultado0', img: imgExemplo},
    {titulo: 'Resultado1', img: imgExemplo},
    {titulo: 'Resultado2', img: imgExemplo},
    {titulo: 'Resultado3', img: imgExemplo},
    {titulo: 'Resultado4', img: imgExemplo},
    {titulo: 'Resultado5', img: imgExemplo},
]

export default function Ajude() {
    return (
        <section className="text-center">
            <h3 className="mt-4 mb-3">Ajude seus vizinhos!</h3>

            <div className="d-flex flex-wrap justify-content-evenly mb-3">
                {resultados.map((resultado) =>
                <ItemAjuda titulo= {resultado.titulo} img={resultado.img}/>
                )}
            </div>
        </section>
    );
}

const ItemAjuda = (props) => {
    return(
        <div className="pedido-index">
            <h6>{props.titulo}</h6>
            <img className="img-fluid img-ajude" src={props.img} alt="imagem"></img>
        </div>
    )
}