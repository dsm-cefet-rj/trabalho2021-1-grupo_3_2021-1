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
    
<br/>
      <form onSubmit={handleSubmit(onSubmit)}>
      <section className="container first-element">
        <div className="blue-card shadow"
              class="container-sm"

          style={{

            backgroundColor:'dodgerblue',
            borderRadius:'20px',
            padding:'10px',
            color:'white'
    
    
          }}
        
        >

<div
                
                style={{
                    textAlign:'center',
                    padding:'10px'
                }}
                
                >
          <img
            id="profile-img"
            className="profile-img-card"
            alt=""
          />
          <p id="profile-name" className="profile-name-card" style={{fontSize:"30px"}}>
            <strong>Cadastre-se</strong>
          </p>
          
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
              <Link to="/Login">Já possuo login.</Link>
            </a>
            <br/>
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
          
        </div>
      </div>
      </section>
      </form>
    </>
  );
}
