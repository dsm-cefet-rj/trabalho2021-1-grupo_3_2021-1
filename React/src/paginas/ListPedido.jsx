import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchPedidos, deletePedidoServer, setStatus, selectAllPedidos} from './utilitarios/PedidosSlice'


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
                <section className="text-center">
            <h3 className="mt-4 mb-3">Pegue emprestado</h3>

            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                    {pedidos.map((pedido) => <LinhaPedido key={pedido.id} pedido={pedido} onClickExcluirPedido={handleClickExcluirPedido} />)}
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

    
            
                <div className="green-card pedido-index">
                <Link to={`/pedido/${props.pedido.id}`}>
                    <div className="col-4">
                        <img className="img-fluid" src={foto} alt="" />
                    </div>

                    <div className="col text-center">
                        <h5>{props.pedido.name}</h5>
                        <p>{props.pedido.preco} Reais</p>


                    </div>
                    </Link>
                </div>
            
         
    </>
    );
}

function Pedido () {
    return (
        <>
           <TabelaPedidos/>
           <div style={{textAlign:"center",
                fontSize:"20px"}}>
              <p className="mb-2">Comprtilhe algo?</p>
                <Link to='/CadProduto'>
                    <button type="button" className="btn btn-primary">Compartilhe</button>
                </Link> 
           </div>
           

        </>
    );
}

export default Pedido;
