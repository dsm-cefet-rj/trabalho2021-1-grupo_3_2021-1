import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function ItemCad() {
    return (
        <>
            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Serviço</label>
                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Marceneiro(a), pedreiro(a), téc de informática..."/>
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">Imagem ilustrativa</label>
                    <input class="form-control form-control-sm" type="file" id="formFile" aria-describedby="imageHelp"/>
                    <div id="imageHelp" class="form-text">A imagem será usada apenas como referência para os outros usuários</div>
                </div>
    
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Adicione uma descrição"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
        </>
            );
}

