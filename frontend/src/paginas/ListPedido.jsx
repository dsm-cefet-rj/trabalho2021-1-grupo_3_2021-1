import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchPedido, deletePedidoServer,  selectAllPedidos} from './utilitarios/PedidosSlice'


function TabelaPedidos(props) {
    const pedidos = useSelector(selectAllPedidos)
    const status = useSelector(state => state.pedidos.status)
    const error = useSelector(state => state.pedidos.error)
    const dispatch = useDispatch()

    function handleClickExcluirPedido(id) {
        dispatch(deletePedidoServer(id))
    }

    useEffect(() => {
        if (status === 'not_loaded' || status === 'loaded') {
            dispatch(fetchPedido())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loadedt': case 'saved':
            return (
                <section className="text-center">
         <br></br><br></br>
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
                        <img className="img-fluid" src={props.pedido.img} alt="" style={{borderRadius:"10px"}}/>
                    </div>

                    <div className="col text">
                    <h5  style={{
                            textAlign:"Center",
                            fontSize:"60px"
                        }}><strong>{props.pedido.name}</strong></h5>
                        <br/>
                        <br/>
                        <div style={{fontSize:"20px"}}>
                          <p><strong>Valor:</strong> {props.pedido.preco} Reais</p>
                        <br/>
                        <p>Descrição: {props.pedido.desc}</p>  
                        </div>
                        


                    </div>
                    <Link to={`/pedido/${props.pedido.id}`}>
                    <button type="button" className="btn btn-primary">Pedido</button>
                    </Link>
                </div>
            
         </section>
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
