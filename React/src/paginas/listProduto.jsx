

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import foto from '../components/img/secador.jpeg'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchProdutos, deleteProdutoServer, setStatus, selectAllProdutos} from './utilitarios/ProdutosSlice'


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

    
            
                <div className="row resultado-busca" style={{
                    backgroundColor:"dodgerblue",
                    padding:"40px",
                    color:"white",
                    fontFamily:"inherit",
                    borderRadius:"10px",
                    textAlign:"Right",
                    widht:"540px"
                }}>
                

                <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" style={{borderRadius:"10px"}}/>
                    </div>

                    <div className="col text">
                    <h5  style={{
                            textAlign:"Center",
                            fontSize:"60px"
                        }}><strong>{props.produto.name}</strong></h5>
                        <br/>
                        <br/>
                        <div style={{fontSize:"20px"}}>
                          <p><strong>Valor:</strong> {props.produto.preco} Reais</p>
                        <br/>
                        <p>Descrição: {props.produto.desc}</p>  
                        </div>
                        


                    </div>
                    <Link to={`/produto/${props.produto.id}`}>
                    <button type="button" className="btn btn-primary">Produto</button>
                    </Link>
                </div>
            
         
    </>
    );
}

function Item () {
    return (
        <>
           <TabelaProdutos/>
           <div style={{textAlign:"center",
                fontSize:"20px"}}>
               <p className="mb-2">Está precisando de algo que não encontrou?</p>
                <Link to='/CadPedido'>
                    <button type="button" className="btn btn-primary">Solicite</button>
                </Link>
           </div>
           

        </>
    );
}

export default Item;
