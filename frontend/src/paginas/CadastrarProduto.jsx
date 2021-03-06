import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { produtoSchema } from './utilitarios/ProdutoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { addProdutoServer, updateProdutoServer, selectProdutosById } from './utilitarios/ProdutosSlice';

function CadProduto(props) {
  const status = useSelector(state => state.produtos.status)
  const error = useSelector(state => state.produtos.error)
  const dispatch = useDispatch()
  let { id } = useParams();
  const produtoFound = useSelector(state => selectProdutosById(state, id))
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(produtoSchema)
  });

  const [produtoOnLoad] = useState(
    id ? produtoFound ?? produtoSchema.cast({}) : produtoSchema.cast({}));

  const [actionType,] = useState(
    id ? produtoFound
      ? 'produtos/updateProdutoServer'
      : 'produtos/addProdutoServer'
      : 'produtos/addProdutoServer');
  const history = useHistory();


  function onSubmit(produto) {
    if (actionType === 'produtos/addProdutoServer') {
      produto.idUser = localStorage.getItem('id');
      dispatch(addProdutoServer(produto));
    } else if (actionType === 'produtos/updateProdutoServer') {
      dispatch(updateProdutoServer({ ...produto, id: produtoFound.id }))
    }
    history.push('/produtos');
  }
  useEffect(() => {
    if (status === 'saved') {
      
      history.push('/produtos');
    }
  }, [history, status]);
  /*
    useEffect(() =>  {
      document.title = `Produto: ${produto.nome}`;
      return () => {document.title = 'PragmaPM'}
    }, [produto.nome]);*/

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



        <legend className="text-center">Cadastro de Produto</legend>
        <div className="mb-3 col-sm-4">
          <select

            className="form-select"
            form="form-cadastro"
            name="categoria"
            defaultValue={produtoOnLoad.categoria}
            {...register("categoria")}

          >
<p style={{ color: "red" }}>{errors.name?.message}</p>
            <option defaultValue hidden>
              Escolha uma categoria

            </option>
            <option value="ferramenta">Ferramenta</option>
            <option value="eletro">Eletrodom??stico</option>
            <option value="veiculo">Ve??culo</option>
            <option value="outro">Outro</option>
          </select>
        </div>

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
            defaultValue={produtoOnLoad.name}
            {...register("name")}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Endere??o:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="endere??o"
            placeholder="maca??, rua das tartarugas...."
            name="local"
            defaultValue={produtoOnLoad.local}
            {...register("local")}
          />
          <p style={{ color: "red" }}>{errors.local?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Pre??o:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="item-preco"
            placeholder="500"
            name="preco"
            defaultValue={produtoOnLoad.preco}
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
            defaultValue={produtoOnLoad.preco}
            {...register("num")}
          />
          <p style={{ color: "red" }}>{errors.num?.message}</p>
        </div>

        <div className="mb-3">
        <label for="validationTooltip01">
              <b>URL da imagem</b>
            </label>
        <input
                type="text"
                class="form-control"
                placeholder="URL"
                name="img"
                defaultValue={produtoOnLoad.img}
            {...register("img")}
              ></input>
              <div style={{ color: "red" }}>{errors.img?.message}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="item-descricao" className="form-label">
            Descri????o:&nbsp;
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Adicione uma descri????o"
            name="desc"
            defaultValue={produtoOnLoad.desc}
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

export { CadProduto };



