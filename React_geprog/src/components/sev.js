import React from 'react';
import ReactDOM from 'react-dom';
import foto from '../img/bicicleta.jpg';

export default function Sev(props) {
    return (
        <>
            <a className="reset-link" href="">
                <div className="row resultado-busca">
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={foto} alt="25" />
                </div>
                <div className="col text-center">
                    <h5>{props.name}</h5>
                    <p>{props.desc}</p>
                </div>
        </a>
            </>
    );
}
