import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import TabelaItens from '../components/TabelaItens';
import Bike from '../components/img/bicicleta.jpg'
import chave from '../components/img/chave-philips.jpg'

function Resultado(props) {
    const produtos = useSelector(state => state.produtos)
    const dispatch = useDispatch()
    return (
        <main className="text-center container first-element">
            <h2 className="my-3">Resultados</h2>

            <TabelaItens produtos={produtos} />
            <p className="mb-2">Não achou o que procurava?</p>
            <button type="button" className="btn btn-primary">Faça um Pedido</button>
        </main>
    )
}

export default Resultado;


