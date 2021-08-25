import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function ItemBusca(props) {
    return (
        <>
            <a class="reset-link" href="">
                <div class="row resultado-busca">
                    <div class="col-4">
                        <img class="img-fluid" src={props.foto} alt="" />
                    </div>
                    <div class="col text-center">
                        <h5>{props.name}</h5>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </a>
        </>

    );
}

export default function Tabelaitens(props) {
    return (
        <>

            <section className="pb-2">
                {props.projetos.map((projeto) =>
                    <ItemBusca foto={projeto.foto} name={projeto.name} desc={projeto.desc} />)}
                <p class="mb-2">Não achou o que procurava?</p>
                <a href="cadastrar-pedido.html"><button type="button" class="btn btn-primary">Faça um Pedido</button></a>

            </section>
        </>
    )
}