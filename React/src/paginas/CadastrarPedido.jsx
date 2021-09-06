import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { pedidoSchema } from './PedidoSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { addPedidoServer, updatePedidoServer, selectPedidosById } from './PedidosSlice';

function CadPedido(props) {
  const status = useSelector(state => state.pedidos.status)
  const error = useSelector(state => state.pedidos.error)
  const dispatch = useDispatch()
  let { id } = useParams();
  const pedidoFound = useSelector(state => selectPedidosById(state, id))
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(pedidoSchema)
  });
  id = parseInt(id);

  const [pedidoOnLoad] = useState(
    id ? pedidoFound ?? pedidoSchema.cast({}) : pedidoSchema.cast({}));

  const [actionType,] = useState(
    id ? pedidoFound
      ? 'pedidos/updatePedidoServer'
      : 'pedidos/addPedidoServer'
      : 'pedidos/addPedidoServer');
  const history = useHistory();


  function onSubmit(pedido) {
    if (actionType === 'pedidos/addPedidoServer') {
      dispatch(addPedidoServer(pedido));
    } else if (actionType === 'pedidos/updatePedidoServer') {
      dispatch(updatePedidoServer({ ...pedido, id: pedidoFound.id }))
    }
    history.push('/pedidos');
  }
  useEffect(() => {
    if (status === 'saved') {
      history.push('/pedidos');
    }
  }, [history, status]);
  /*
    useEffect(() =>  {
      document.title = `Pedido: ${pedido.nome}`;
      return () => {document.title = 'PragmaPM'}
    }, [pedido.nome]);*/

  return (
    <>
      <div>{error}</div>
      <form onSubmit={handleSubmit(onSubmit)} >


        <legend>
          <h3 className="">Oque deseja compartilhar?</h3>
        </legend>



        <legend className="text-center">Cadastro de pedido - Servicos</legend>

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
            defaultValue={pedidoOnLoad.name}
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
            placeholder="rio, rua dos coquinhos 16"
            name="local"
            defaultValue={pedidoOnLoad.local}
            {...register("local")}
          />
          <p style={{ color: "red" }}>{errors.local?.message}</p>
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
            defaultValue={pedidoOnLoad.preco}
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
            defaultValue={pedidoOnLoad.desc}
            {...register("desc")}


          ></textarea>

          <p style={{ color: "red" }}>{errors.desc?.message}</p>
        </div>
        <input type="submit" value="Enviar" />
        <input type="button" value="Cancelar" onClick={() => history.goBack()} />

      </form>
    </>
  );

}

export { CadPedido };

