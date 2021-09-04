
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {fetchPedidos, deletePedidoServer, setStatus, selectAllPedidos} from './PedidosSlice'




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

        <div className="row resultado-busca">

            <Link to={`/pedidos/${props.pedido.id}`}>
                <div className="row resultado-busca">
                    <div className="col-4">
                        <img className="img-fluid" src={props.pedido.foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.pedido.name}</h5>
                        <p>{props.pedido.desc}</p>


                    </div>
                </div>
            </Link>
            <button button type="button" className="btn btn-primary" onClick={() => props.onClickExcluirPedido(props.pedido.id)}>X</button>





        </div>
    </>
    );
}

function ListaPedido(props) {


    return (
        <>
            <main className="text-center container first-element">
                <h2 className="my-3">Resultados</h2>

                <TabelaPedidos />
                <p className="mb-2">Quer ajudar seus vizinhos?</p>
                <Link to='/compartilhe'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link>

            </main>


        </>
    );
}

export { ListaPedido };
