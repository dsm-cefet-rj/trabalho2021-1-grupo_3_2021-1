import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import { Link } from 'react-router-dom' 
import ImgServ from '../components/img/serviçosexemplo.png'
import ImgProd from '../components/img/produtosexemplo.png'
function Escolha () {
    return (
        <>
            <main className="container text-center">
            <section className="first-element container text-center flex-column">
                <h2 className="my-3">Escolha entre compartilhar produtos ou serviços.</h2>
                <div className="row d-flex justify-content-evenly">
                    <figure className="col index-menu green-card border margin">
                        <Link className="reset-link" to='/produtos/:id'>
                            <h3 className="link-title">Produtos</h3>
                            <img className="img-fluid" src={ImgProd} alt="" />
                        </Link>
                    </figure>
                    <br/>
                    <figure className="col index-menu green-card border margin">
                        <Link className="reset-link" to="/servicos/:id">
                            <h3 className="link-title">Serviços</h3>
                            <img className="img-fluid" src={ImgServ} alt="" sizes="250px"/>
                            </Link>
                            
                            
                            
                        
                    </figure>
                </div>
            </section>
            </main>
        </>
    );
}

export default Escolha;