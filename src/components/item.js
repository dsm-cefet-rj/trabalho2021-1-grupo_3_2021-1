import React from 'react';
import ReactDOM from 'react-dom';
import img from '.../img/bicicleta,jpg';

export default function item(){
    return(
        <>
        <a className="reset-link" href="">
                <div className="row resultado-busca">
                    <div className="col-4">
                        <img className="img-fluid" src={img} alt="">
                    </div>
                    <div className="col text-center">
                        <h5>Bicicleta</h5>
                        <p>Descrição do item</p>
                    </div>
                </div>
            </a>
            </>
    )
}