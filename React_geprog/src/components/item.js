import React from 'react';
import ReactDOM from 'react-dom';
import img from '.../img/bicicleta,jpg';

export default function item(name, desc, imag){
    return(
        <>
        <a className="reset-link" href="">
                <div className="row resultado-busca">
                    <div className="col-4">
                        <img className="img-fluid" src={imag} alt="">
                    </div>
                    <div className="col text-center">
                        <h5>name</h5>
                        <p>desc</p>
                    </div>
                </div>
            </a>
            </>
    )
}