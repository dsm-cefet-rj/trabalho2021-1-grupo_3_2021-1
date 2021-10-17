

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {fetchPedidos, deletePedidoServer, setStatus, selectAllPedidos} from './utilitarios/PedidosSlice'
import foto from '../components/img/bicicleta.jpg'




function TabelaPedidos(props) {
    const pedidos = useSelector(selectAllPedidos)
    const status = useSelector(state => state.pedidos.status)
    const error = useSelector(state => state.pedidos.error)
    const dispatch = useDispatch()

    function handleClickExcluirPedido(id) {
        dispatch(deletePedidoServer(id))
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchPedidos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded': case 'saved':
            return (
                <section className="pb-2">
                    {pedidos.map((pedido) => <LinhaPedido key={pedido.id} pedido={pedido} onClickExcluirPedido={handleClickExcluirPedido} />)}
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
                        </div>
                        


                    </div>
                    <Link to={`/pedidos/${props.pedido.id}`}>
                    <button type="button" className="btn btn-primary">Alterar</button>
                    </Link>
                    
                    <br/>
                    <p style={{textAlign:"center",
                                fontSize:"20px"
                    }}><strong>Deletar Produto?</strong></p>
                    <br/>

                    <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirPedido(props.pedido.id)}>X</button>
                
                </div>
    </>
    );
}

function ListaPedido(props) {


    return (
        <>
            <main className="text-center container first-element">
                <h2 className="my-3">Meus Pedidos</h2>

                <TabelaPedidos />
                <p className="mb-2">Está precisando de algo?</p>
                <Link to='/CadPedido'>
                    <button type="button" className="btn btn-primary">Solicite</button>
                </Link>

            </main>


        </>
    );
}

export { ListaPedido };
