import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function TabelaItens(props) {
    return (
            <section className="pb-2">
                {props.produtos.map((produto, index) =>
                    <ItemBusca key={index} foto={produto.foto} name={produto.name} desc={produto.desc} />)}
            </section>
    )
}

function ItemBusca(props) {
    return (
            <div className="row resultado-busca">
                <div className="col-4">
                    <img className="img-fluid" src={props.foto} alt="" />
                </div>
                <div className="col text-center">
                    <h5>{props.name}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
    );
}

export default TabelaItens;