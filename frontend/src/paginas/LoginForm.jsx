import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/App.css';
import React, { useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import { fetchServicos, fetchServico } from "../paginas/utilitarios/ServicosSlice";
import { fetchPedidos, fetchPedido } from '../paginas/utilitarios/PedidosSlice'
import { fetchProdutos, fetchProduto } from '../paginas/utilitarios/ProdutosSlice'
import {loginServer} from './utilitarios/LoginSlice';
import { Link } from "react-router-dom";

export default function LoginForm(props){

    const history = useHistory();
    const dispatch = useDispatch()
    const status = useSelector(state => state.logins.status);
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(login){
        console.log(login);
        dispatch(loginServer(login));
        dispatch(fetchProduto());
        dispatch(fetchPedido());
        dispatch(fetchServico());
        test();
        
    }
    const delay = (n) => new Promise( r => setTimeout(r, n*1000));
    async function test(){
        await delay(2);
        dispatch(fetchProdutos());
        dispatch(fetchPedidos());
        dispatch(fetchServicos());
       
    
    }


    useEffect(() => {
        if (status === 'logged_in' ) {
            
            history.push('/perfil');
            

        }
    }, [status])




    return(<>



<section className="container first-element">
      
            <div
            className="blue-card shadow"
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

            <h1><strong>Faça seu login!</strong></h1>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Username:<input type="text" name="username" id="username" className="form-control"{...register("username")}
              required/>
                &nbsp;<span id="username_err_msg">{errors.login?.message}</span>
            </label>
            <br/>
            <label>
                Senha:<input type="password" name="password" id="password" className="form-control"{...register("password")}
              required />
                &nbsp;<span id="password_err_msg">{errors.password?.message}</span>
            </label>
            <br/>
            <br/>
            <Link to="/CadUser" style={{fontSize:"15px"}}>Ainda não tem cadastro? Clique aqui!</Link>  
            <br/> 
            <button type="submit" id="Login" name="btn_login" variant="contained" className="btn btn-primary">Login</button>
            </form>
            </div>
            </div>
        </section>
          </>
    );
}
