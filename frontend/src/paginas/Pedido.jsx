import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { pedidoSchema } from './utilitarios/PedidoSchema';

import { fetchPedidos, setStatus, selectPedidosById } from './utilitarios/PedidosSlice';

function TabelaPedidos(props) {
    const status = useSelector(state => state.pedidos.status)
    const error = useSelector(state => state.pedidos.error)
    const dispatch = useDispatch()
    let { id } = useParams();
  const pedidoFound = useSelector(state => selectPedidosById(state, id))
  
  id = parseInt(id);

  const [pedidoOnLoad] = useState(
    id ? pedidoFound ?? pedidoSchema.cast({}) : pedidoSchema.cast({}));

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchPedidos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded': case 'saved':
            return (
                <section className="text-center">
            
            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                   <LinhaPedido key={pedidoOnLoad.id} pedido={pedidoOnLoad}/>)
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

function LinhaPedido(props) {
    const status = useSelector(state => state.pedidos.status)
    const dispatch = useDispatch()
    var [msg, setMsg] = useState('');

    useEffect(() => {
        if (status === 'saved') {
            setMsg('Pedido salvo com sucesso');
            dispatch(setStatus('loaded'));
        } else if (status === 'deleted') {
            setMsg('Pedido excluído com sucesso');
            dispatch(setStatus('loaded'));
        }
    }, [status, dispatch]);  
    return (<>
        <div>{msg}</div>

    
            
        <div className="row resultado-busca">
            
                    <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.pedido.name}</h5>
                        <p>{props.pedido.preco} Reais</p>
                        
                        <p>endereço: {props.pedido.local} </p>
                        <p>Numero de telefone: {props.pedido.num} </p>
                        <p>Descrição:<br></br>{props.pedido.desc} </p>


                    </div>
                   
                </div>
            
         
    </>
    );
}










function Pedido () {
    return (
        <>
            <main className="container text-center">
            <TabelaPedidos/>
            </main>
        </>
    );
}

export default Pedido;