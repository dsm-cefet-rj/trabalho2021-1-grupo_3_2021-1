import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';


export default function Sev(props) {
    return (
        <div>
            <a className="reset-link" href="">
                <div className="row resultado-busca">
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={props.foto} alt="" />
                </div>
                <div className="col text-center">
                    <h5>{props.name}</h5>
                    <p>{props.desc}</p>
                </div>
        </a>
            </div>
    );
}
