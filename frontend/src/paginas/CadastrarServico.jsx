import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { servicoSchema } from './utilitarios/ServicoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { addServicoServer, updateServicoServer, selectServicosById } from './utilitarios/ServicosSlice';

function CadServico(props) {
  const status = useSelector(state => state.servicos.status)
  const error = useSelector(state => state.servicos.error)
  const dispatch = useDispatch()
  let { id } = useParams();
  const servicoFound = useSelector(state => selectServicosById(state, id))
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(servicoSchema)
  });

  const [servicoOnLoad] = useState(
    id ? servicoFound ?? servicoSchema.cast({}) : servicoSchema.cast({}));

  const [actionType,] = useState(
    id ? servicoFound
      ? 'servicos/updateServicoServer'
      : 'servicos/addServicoServer'
      : 'servicos/addServicoServer');
  const history = useHistory();


  function onSubmit(servico) {
    if (actionType === 'servicos/addServicoServer') {
      servico.idUser = localStorage.getItem('id');
      dispatch(addServicoServer(servico));
    } else if (actionType === 'servicos/updateServicoServer') {
      dispatch(updateServicoServer({ ...servico, id: servicoFound.id }))
    }
    history.push('/servicos');
  }
  useEffect(() => {
    if (status === 'saved') {
      history.push('/servicos');
    }
  }, [history, status]);
  /*
    useEffect(() =>  {
      document.title = `Servico: ${servico.nome}`;
      return () => {document.title = 'PragmaPM'}
    }, [servico.nome]);*/

  return (
    <>
      <div>{error}</div>
      <form onSubmit={handleSubmit(onSubmit)} >
      <section className="container first-element">
      <div  
      
      class="container-md"
      style={{

        backgroundColor:'white',
        borderRadius:'20px',
        padding:'50px',
        color:'black',


      }}>

        <legend>
          <h3 className="">Oque deseja compartilhar?</h3>
        </legend>



        <legend className="text-center">Cadastro de Servico</legend>
        

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Nome:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="item-nome"
            placeholder="martelo, chave de fenda, furadeira..."
            name="name"
            defaultValue={servicoOnLoad.name}
            {...register("name")}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Endereço:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="endereço"
            placeholder="petropolis, rua das gaivotas"
            name="local"
            defaultValue={servicoOnLoad.local}
            {...register("local")}
          />
          <p style={{ color: "red" }}>{errors.local?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Preço:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="item-preco"
            placeholder="500"
            name="preco"
            defaultValue={servicoOnLoad.preco}
            {...register("preco")}
          />
          <p style={{ color: "red" }}>{errors.preco?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            telefone:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            placeholder="22997859632"
            name="num"
            defaultValue={servicoOnLoad.preco}
            {...register("num")}
          />
          <p style={{ color: "red" }}>{errors.num?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="item-img" className="form-label">
            Imagem ilustrativa:&nbsp;
          </label>
          <input
            className="form-control form-control-sm"
            type="file"
            id="item-img"
            aria-describedby="imageHelp"
          />
          <div id="imageHelp" className="form-text">
            A imagem será usada apenas como referência para os outros usuários
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="item-descricao" className="form-label">
            Descrição:&nbsp;
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Adicione uma descrição"
            name="desc"
            defaultValue={servicoOnLoad.desc}
            {...register("desc")}


          ></textarea>

          <p style={{ color: "red" }}>{errors.desc?.message}</p>
        </div>
        
        <input type="submit" value="Enviar" className="btn btn-primary"/>
        
        
        <input type="button" value="Cancelar" className="btn btn-primary" onClick={() => history.goBack()} />
        
        </div>
        </section>
      </form>
    </>
  );

}

export { CadServico };

