import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import imgPerfil from '../components/img/img-perfil.jpg'
import { ListaPedido } from "./listaPedido";
import { ListagemProduto } from '../paginas/TabelaProduto';
import { ListaServico } from "./listaServico";



function Perfil () {
    
    return (

        <>
        <section className="container first-element">
            <div className="blue-card shadow">
            <h3 className="text-center mb-4">Meu perfil</h3>
                <div className="row mx-4">
                    <div className="col text-end">
                        <img className="img-fluid" src={imgPerfil} alt="foto de perfil" />
                    </div>
                    <div className="col d-flex flex-column justify-content-center flex-wrap">
                        <div className="row my-auto">
                            <span className="perfil-info"><strong>Nome: </strong>José das Couves</span>
                            <span className="perfil-info"><strong>Email: </strong>jocouves@gmail.com</span>
                            <span className="perfil-info"><strong>Cel: </strong>(21)99999-9999</span>
                            

                        </div>
                    </div>
                </div>
                <br/>
                <div className="row d-flex flex-column justify-content-center flex-wrap my-4 px-3">
                    <h5 className="text-center"><strong>Endereço:</strong></h5>
                    <br/>
                    <span className=""><strong>Logradouro: </strong>Sua rua</span>
                    <span className=""><strong>Número: </strong>25</span>
                    <span className=""><strong>Complemento: </strong>apt 252</span>
                    <span className=""><strong>Bairro: </strong>Tijuca</span>
                    <span className=""><strong>CEP: </strong>00000-000</span>
                    <span className=""><strong>Cidade: </strong>Rio de janeiro</span>
                    <span className=""><strong>Estado: </strong>RJ</span>
                    
                </div>
                <h3 className="text-center my-3">Lista cadastros</h3>
            
            <ListaPedido/>
            <ListaServico/>
            <ListagemProduto/>
            </div>
            
        </section>
            
        </>
    );
}


export default Perfil;
