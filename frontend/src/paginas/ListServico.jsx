import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import foto from '../components/img/bicicleta.jpg'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchServicos, deleteServicoServer, selectAllServicos} from './utilitarios/ServicosSlice'


function TabelaServicos(props) {
    const servicos = useSelector(selectAllServicos)
    const status = useSelector(state => state.servicos.status)
    const error = useSelector(state => state.servicos.error)
    const dispatch = useDispatch()

    function handleClickExcluirServico(id) {
        dispatch(deleteServicoServer(id))
    }

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchServicos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loadedt': case 'saved':
            return (
                <section className="text-center">
          <br></br><br></br>
            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                    {servicos.map((servico) => <LinhaServico key={servico.id} servico={servico} onClickExcluirServico={handleClickExcluirServico} />)}
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

function LinhaServico(props) {
    const status = useSelector(state => state.servicos.status)
    const dispatch = useDispatch()
    var [msg, setMsg] = useState('');
 
    return (<>
        <div>{msg}</div>

            
            
                <div className="row resultado-busca" style={{
                    backgroundColor:"dogerblue",
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
                        }}><strong>{props.servico.name}</strong></h5>
                        <br/>
                        <br/>
                        <div style={{fontSize:"20px"}}>
                          <p><strong>Valor:</strong> {props.servico.preco} Reais</p>
                        <br/>
                        <p>Descrição: {props.servico.desc}</p>  
                        </div>
                        


                    </div>
                    <Link to={`/servico/${props.servico.id}`}>
                    <button type="button" className="btn btn-primary">Servico</button>
                    </Link>
                </div>
            
         
    </>
    );
}

function Servico () {
    return (
        <>
           <TabelaServicos/>
           <p style={
               {textAlign:"center",
                fontSize:"20px"
        }
           }>Cadastre um servico?
           <br/>
                <Link to='/CadServico'>
                    <button type="button" className="btn btn-primary">Cadastre</button>
                </Link>
</p>
        </>
    );
}

export default Servico;
