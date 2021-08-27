import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { render } from 'react-dom';



export default function ItemCad() {
    const [produto, setValue] = useState({});
	const handleImputChange = (e) =>{
	
	//setta o e.target.value do input no state do React
  	setValue({...produto, [e.target.name]: e.target.value})
}

    return (
        <>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Serviço</label>
                <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Marceneiro(a), pedreiro(a), téc de informática..." name="email" value={produto.email} onChange={handleImputChange} />
            </div>

            <div className="mb-3">
                <label for="formFile" className="form-label">Imagem ilustrativa</label>
                <input className="form-control form-control-sm" type="file" id="formFile" aria-describedby="imageHelp" value={produto.image} onChange={handleImputChange} />
                <div id="imageHelp" className="form-text">A imagem será usada apenas como referência para os outros usuários</div>
            </div>

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Descrição</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Adicione uma descrição"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </>
    );
}

