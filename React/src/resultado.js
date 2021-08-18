import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tabelaitens from './components/ItemBusca.js'
import NavBar from './components/NavBar.js'

import Bike from './components/img/bicicleta.jpg'
import chave from './components/img/chave-philips.jpg'
import eletricista from './components/img/eletricista.JPG'
import jardim from './components/img/jardim.jpg'
import { Button } from 'bootstrap';


const projetos = [
    { foto: Bike, name: 'Bicicleta', desc: 'Bicicleta ruim'},
    { foto: chave, name: 'chave', desc: 'philipis' },
    { foto: eletricista, name: 'Eletricista', desc: 'eletricista'},
    { foto: jardim, name: 'jardineiro', desc: 'bons serviços' },
]

export default function Resultado() {
    return (
        <>
            <NavBar />
            <main className="text-center container">
                <h2 className="my-3">Resultados</h2>

                <Tabelaitens projetos={projetos} />

            </main>

        </>
    )
}
