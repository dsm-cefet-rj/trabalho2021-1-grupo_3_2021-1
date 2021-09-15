

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { produtoSchema } from './utilitarios/ProdutoSchema';

import { fetchProdutos, setStatus, selectProdutosById } from './utilitarios/ProdutosSlice';

function TabelaProdutos(props) {
    const status = useSelector(state => state.produtos.status)
    const error = useSelector(state => state.produtos.error)
    const dispatch = useDispatch()
    let { id } = useParams();
  const produtoFound = useSelector(state => selectProdutosById(state, id))
  id = parseInt(id);

  const [produtoOnLoad] = useState(
    id ? produtoFound ?? produtoSchema.cast({}) : produtoSchema.cast({}));

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchProdutos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded': case 'saved':
            return (
                <section className="text-center">
           
            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                   <LinhaProduto key={produtoOnLoad.id} produto={produtoOnLoad}/>)
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

<<<<<<< HEAD:frontend/src/paginas/item.jsx
        <div className="row resultado-busca">
                
                    <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.produto.name}</h5>
                        <p>{props.produto.preco} Reais</p>
                        
                        <p>endereço: {props.produto.local} </p>
                        <p>Numero de telefone: {props.produto.num} </p>
                        <p>Descrição:<br></br>{props.produto.desc} </p>
=======
                <div style={
                        {
                            backgroundColor:"white",
                            padding:"40px"
                        }
                    }>
                    
                    <div className="row resultado-busca" style={{
                    backgroundColor:"dodgerblue",
                    padding:"40px",
                    color:"white",
                    fontFamily:"inherit",
                    borderRadius:"10px"
                }}>
                       <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" style={{borderRadius:"10px"}}/>
                    </div>

                    <div className="col text-center">
                        <h5 style={{
                            fontSize:"40px"
                        }}><strong>{props.produto.name}</strong></h5>
                        <br/>
                        <p>Valor: {props.produto.preco} Reais</p>
                        <br/>
                        <p>Descrição: {props.produto.desc}</p>
>>>>>>> 55d26820fe7270a84c12c45341cae1de77c38db5:React/src/paginas/item.jsx


                    </div> 
                    </div>
                    
                    
                </div>
            
         
    </>
    );
}










function Procure () {
    return (
        <>
            <main className="container text-center">
            <TabelaProdutos/>
            </main>
        </>
    );
}

export default Procure;
