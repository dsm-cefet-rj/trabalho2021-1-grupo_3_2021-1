import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { usuarioSchema } from './utilitarios/UsuarioSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { addUsuarioServer, updateUsuarioServer, selectUsuariosById } from './utilitarios/UsuariosSlice';

function CadUsuario(props) {
  const status = useSelector(state => state.usuarios.status)
  const error = useSelector(state => state.usuarios.error)
  const dispatch = useDispatch()
  let { id } = useParams();
  const usuarioFound = useSelector(state => selectUsuariosById(state, id))
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(usuarioSchema)
  });

  const [usuarioOnLoad] = useState(
    id ? usuarioFound ?? usuarioSchema.cast({}) : usuarioSchema.cast({}));

  const [actionType,] = useState(
    id ? usuarioFound
      ? 'usuarios/updateUsuarioServer'
      : 'usuarios/addUsuarioServer'
      : 'usuarios/addUsuarioServer');
  const history = useHistory();


  function onSubmit(usuario) {
    if (actionType === 'usuarios/addUsuarioServer') {
      dispatch(addUsuarioServer(usuario));
    } else if (actionType === 'usuarios/updateUsuarioServer') {
      dispatch(updateUsuarioServer({ ...usuario, id: usuarioFound.id }))
    }
    history.push('/usuarios');
  }
  useEffect(() => {
    if (status === 'saved') {
      history.push('/usuarios');
    }
  }, [history, status]);
  /*
    useEffect(() =>  {
      document.title = `Usuario: ${usuario.nome}`;
      return () => {document.title = 'PragmaPM'}
    }, [usuario.nome]);*/

  return (
    <>
      <div>{error}</div>
      <form onSubmit={handleSubmit(onSubmit)} >


        <legend>
          <h3 className="">Oque deseja compartilhar?</h3>
        </legend>



        <legend className="text-center">Cadastro de Usuario</legend>

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
            defaultValue={usuarioOnLoad.name}
            {...register("name")}
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="nome-item" className="form-label">
            Nome:&nbsp;
          </label>
          <input
            type="text"
            className="form-control"
            id="item-password"
            placeholder="martelo, chave de fenda, furadeira..."
            name="password"
            defaultValue={usuarioOnLoad.password}
            {...register("password")}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

      
        <input type="submit" value="Enviar" />
        <input type="button" value="Cancelar" onClick={() => history.goBack()} />

      </form>
    </>
  );

}

export { CadUsuario };

