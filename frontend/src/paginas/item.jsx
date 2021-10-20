
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { produtoSchema } from './utilitarios/ProdutoSchema';

import { fetchProdutos, selectProdutosById } from './utilitarios/ProdutosSlice';

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
        if (status === 'not_loaded' || status === 'loadedt') {
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
 
    return (<>
        <div>{msg}</div>
        <section className="container first-element">
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
                        <img className="img-fluid" src={props.produto.img} alt="" style={{borderRadius:"10px"}}/>
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
                        <br/>
                        <p>Número para contato: {props.produto.num}</p>
                        <br/>
                        <p>Local: {props.produto.local}</p>
                        </div>
                        


                    </div>
                    
                
                </div>
                </section>
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
