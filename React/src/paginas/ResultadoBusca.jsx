import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import TabelaItens from '../components/TabelaItens';
import Bike from '../components/img/bicicleta.jpg'
import chave from '../components/img/chave-philips.jpg'

const projetos = [
    { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
    { foto: chave, name: 'chave', desc: 'filipis' },
    { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim' },
    { foto: chave, name: 'chave', desc: 'filipis' },
]

function Resultado (props) {
    return (
            <main className="text-center container first-element">
                <h2 className="my-3">Resultados</h2>

                <TabelaItens projetos={props.projeto} />
                <p className="mb-2">Não achou o que procurava?</p>
                <button type="button" className="btn btn-primary">Faça um Pedido</button>
            </main>
    )
}

export default Resultado;