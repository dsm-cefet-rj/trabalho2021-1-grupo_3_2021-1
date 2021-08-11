import React from 'react';
import ReactDOM from 'react-dom';
import img from '.../img/bicicleta,jpg';

export default function item(name, desc){
    return(
        <>
        <a className="reset-link" href="">
                <div className="row resultado-busca">
               <!--</div><div className="col-4">
                        <img className="img-fluid" src={img} alt="">
                    </div>-->
                    <div className="col text-center">
                        <h5>name</h5>
                        <p>desc</p>
                    </div>
                </div>
            </a>
            </>
    )
}