
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { fetchProdutos, deleteProdutoServer } from './ProdutosSlice'




function TabelaProdutos(props) {
    const produtos = useSelector(state => state.produtos.produtos)
    const status = useSelector(state => state.produtos.status)
    const error = useSelector(state => state.produtos.error)
    const dispatch = useDispatch()

    function handleClickExcluirProduto(id) {
        dispatch(deleteProdutoServer(id))
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProdutos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded':
            return (
                <section className="pb-2">
                    {produtos.map((produto) => <LinhaProduto key={produto.id} produto={produto} onClickExcluirProduto={handleClickExcluirProduto} />)}
                </section>

            );
        case 'loading':
            return (<div>Carregando...</div>);
        case 'failed':
        default:
            return (<div>{error}</div>)
    }
}

function LinhaProduto(props) {
    return (<>


        <div className="row resultado-busca">

            <Link to={`/produtos/${props.produto.id}`}>
                <div className="row resultado-busca">
                    <div className="col-4">
                        <img className="img-fluid" src={props.produto.foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.produto.name}</h5>
                        <p>{props.produto.desc}</p>


                    </div>
                </div>
            </Link>
            <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirProduto(props.produto.id)}>X</button>





        </div>
    </>
    );
}

function Resultado(props) {


    return (
        <>
            <main className="text-center container first-element">
                <h2 className="my-3">Resultados</h2>

                <TabelaProdutos />
                <p className="mb-2">Quer ajudar seus vizinhos?</p>
                <Link to='/compartilhe'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>


        </>
    );
}

export { Resultado };
