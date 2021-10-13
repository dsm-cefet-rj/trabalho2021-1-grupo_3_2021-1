

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import foto from '../components/img/furadeira.jpg'
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { servicoSchema } from './utilitarios/ServicoSchema';

import { fetchServicos, setStatus, selectServicosById } from './utilitarios/ServicosSlice';






function TabelaServicos(props) {
    const status = useSelector(state => state.servicos.status)
    const error = useSelector(state => state.servicos.error)
    const dispatch = useDispatch()
    let { id } = useParams();
  const servicoFound = useSelector(state => selectServicosById(state, id))
  
  id = parseInt(id);

  const [servicoOnLoad] = useState(
    id ? servicoFound ?? servicoSchema.cast({}) : servicoSchema.cast({}));

    useEffect(() => {
        if (status === 'not_loaded') {
            dispatch(fetchServicos())
        }
    }, [status, dispatch])

    switch (status) {
        case 'loaded': case 'saved':
            return (
                <section className="text-center">
            
            <div className="d-flex flex-wrap justify-content-evenly mb-3">

            
                   <LinhaServico key={servicoOnLoad.id} servico={servicoOnLoad}/>)
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

    useEffect(() => {
        if (status === 'saved') {
            setMsg('Servico salvo com sucesso');
            dispatch(setStatus('loaded'));
        } else if (status === 'deleted') {
            setMsg('Servico excluído com sucesso');
            dispatch(setStatus('loaded'));
        }
    }, [status, dispatch]);  
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
                        }}><strong>{props.servico.name}</strong></h5>
                        <br/>
                        <br/>
                        <div style={{fontSize:"20px"}}>
                          <p><strong>Valor:</strong> {props.servico.preco} Reais</p>
                        <br/>
                        <p>Descrição: {props.servico.desc}</p>  
                        <br/>
                        <p>Numero para contato: {props.servico.desc}</p>
                        <br/>
                        <p>Local: {props.servico.local}</p>
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
            <TabelaServicos/>
            </main>
        </>
    );
}

export default Procure;
