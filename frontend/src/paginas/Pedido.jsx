import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { pedidoSchema } from './utilitarios/PedidoSchema';

import { fetchPedidos, selectPedidosById } from './utilitarios/PedidosSlice';

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
        if (status === 'not_loaded' || status === 'loadedt') {
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
                        <img className="img-fluid" src={foto} alt="" style={{borderRadius:"10px"}}/>
                    </div>

                    <div className="col text">
                    <h5  style={{
                            textAlign:"Center",
                            fontSize:"60px"
                        }}><strong>{props.pedido.name}</strong></h5>
                        <br/>
                        <br/>
                        <div style={{fontSize:"20px"}}>
                          
                        <br/>
                        <p>Descrição: {props.pedido.desc}</p>  
                        <br/>
                        <p>Número para contato:{props.pedido.num}</p>
                        <br/>
                        <p>Local: {props.pedido.local}</p>
                        </div>
                        


                    </div>
                
                
                </div>
        </section>
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
