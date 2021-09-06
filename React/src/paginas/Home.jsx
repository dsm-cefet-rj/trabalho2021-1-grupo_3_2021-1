import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {fetchProdutos, deleteProdutoServer, setStatus, selectAllProdutos} from './ProdutosSlice'
import imgProcure from "../components/img/main.png"
import imgRegistre from "../components/img/share.png"
import foto from '../components/img/furadeira.jpg'






function TabelaProdutos(props) {
    const produtos = useSelector(selectAllProdutos)
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
        case 'loaded': case 'saved':
            return (
                <section className="text-center">
            <h3 className="mt-4 mb-3">Pegue emprestado</h3>

            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                    {produtos.map((produto) => <LinhaProduto key={produto.id} produto={produto} onClickExcluirProduto={handleClickExcluirProduto} />)}
                </div>
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
    const status = useSelector(state => state.produtos.status)
    const dispatch = useDispatch()
    var [msg, setMsg] = useState('');

    useEffect(() => {
        if (status === 'saved') {
            setMsg('Produto salvo com sucesso');
            dispatch(setStatus('loaded'));
        } else if (status === 'deleted') {
            setMsg('Produto excluído com sucesso');
            dispatch(setStatus('loaded'));
        }
    }, [status, dispatch]);  
    return (<>
        <div>{msg}</div>

        <div className="green-card pedido-index">

            <Link to={`/produto/${props.produto.id}`}>
                <div className="green-card pedido-index">
                    <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.produto.name}</h5>
                        <p>{props.produto.desc}</p>


                    </div>
                </div>
            </Link>
           




        </div>
    </>
    );
}






function Home () {
    
    return (
        <>
            <section className="first-element container text-center flex-column">
                <h2 className="my-3">Bem-vindo, seu_nome.</h2>
                <div className="row d-flex justify-content-evenly">
                    <figure className="col index-menu blue-card border margin">
                        <Link className="reset-link" to='/procure'>
                            <h3 className="link-title">Procure</h3>
                            <img className="img-fluid" src={imgProcure} alt="" />
                        </Link>
                    </figure>
                    
                    <figure className="col index-menu blue-card border margin">
                        <Link className="reset-link" to="/escolha">
                            <h3 className="link-title">Registre Produtos ou serviços!</h3>
                            <img className="img-fluid" src={imgRegistre} alt="" />
                            </Link>
                            
                            
                            
                        
                    </figure>
                </div>
            </section>
            <TabelaProdutos />
        </>
    )
}


export default Home;
