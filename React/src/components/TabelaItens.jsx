import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from "react-router-dom";

import { useDispatch } from 'react-redux'
import {fetchProdutos, deleteProdutoServer, setStatus, selectAllProdutos} from '../paginas/ProdutosSlice'

function TabelaItens(props) {
    return (
        <section className="pb-2">
            {props.produtos.map((produto) =>
                <ItemBusca key={produto.id} id={produto.id} foto={produto.foto} name={produto.name} desc={produto.desc} />)}

        </section>
    )
}

function ItemBusca(props) {
    const dispatch = useDispatch()
    function handleClickExcluirProduto(id) {
        dispatch(deleteProdutoServer(id))
    }
    return (<>
        <Link to={`/produtos/${props.id}`}>
            <div className="row resultado-busca">
                <div className="col-4">
                    <img className="img-fluid" src={props.foto} alt="" />
                </div>
                <div className="col text-center">
                    <h5>{props.name}</h5>
                    <p>{props.desc}</p>
                </div>

                

            </div>
        </Link>
        <button button type="button" className="btn btn-primary" onClick={() => handleClickExcluirProduto(props.id)}>X</button>
        </>
    );
}

export default TabelaItens;