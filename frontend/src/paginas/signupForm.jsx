import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegisterSchema } from "./utilitarios/SingupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addUserServer } from "./utilitarios/UsersSlice";


export default function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(user) {
    dispatch(
      addUserServer({
        userName: user.userName,
        password: user.password,
      })
    );
    alert("Cadastrado com sucesso!");
    history.push("/login");
  }

  function cancelButton(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <>
      <title>Cadastro Usuário</title>

      <link rel="stylesheet" type="text/css" href={`../styles.css`} />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />

      <div className="container">
        <div className="card card-container">
          <img
            id="profile-img"
            className="profile-img-card"
            alt=""
          />
          <p id="profile-name" className="profile-name-card">
            Cadastre-se
          </p>
          <form class="form-signin" onSubmit={handleSubmit(onSubmit)}>
            <span id="reauth-email" className="reauth-email"></span>
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Nome"
              name="userName"
              {...register("userName")}
              required
              autofocus
            />
            <p style={{ color: "red" }}>{errors.userName?.message}</p>
            <input
              type="password"
              id="senha"
              className="form-control"
              placeholder="Senha"
              name="password"
              {...register("password")}
              required
              autofocus
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <input
              type="password"
              id="senhaConfirmar"
              className="form-control"
              placeholder="Confirmar Senha"
              name="confirmPassword"
              {...register("confirmPassword")}
              required
            />
            <p style={{ color: "red" }}>
              {errors.confirmPassword
                ? "As senhas devem ser iguais e com pelo menos 6 caracteres."
                : ""}
            </p>
            <a>
              <Link to="/login">Já possuo login.</Link>
            </a>
            <button className="btn  btn-primary btn-signin" type="submit">
              Cadastrar
            </button>
            <button
              className="btn  btn-primary btn-signin"
              type="submit"
              onClick={(e) => cancelButton(e)}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}