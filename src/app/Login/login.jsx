import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './login.css';

import NavBar from '../Components/Navbar/navbar';
import Footer from '../Components/Footer';

import firebase from '../Config/firebase';
import 'firebase/auth';


function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sucesso, setSucesso] = useState('');

    const options = [
      {
        id: 1,
        title: "Home",
        link: "/"
      },
      {
        id: 2,
        title: "Cadastrar Cliente",
        link: "/app/novocliente"
      }
    ]

    function LoginUsuario(){
      firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function(firebaseUser){
          setSucesso('S');
        })
        .catch(function(error){
          setSucesso('N');
        });
    }   
    
    function alterarEmail(event){      
      setEmail(event.target.value);
    }

    function alterarSenha(event){      
      setSenha(event.target.value);
    }

    return <div>
              <NavBar opcoes={options}/>
              <div className="d-flex align-items-center text-center form-container">
                <form className="form-signin">
                  
                  <h1 className="h3 mb-3 fw-normal" id="login">Login</h1>

                  <div className="form-floating">
                    <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                    <label for="floatingInput">E-mail</label>
                  </div>

                  <div className="form-floating">
                    <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                    <label for="floatingPassword">Senha</label>
                  </div>
                  
                  <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

                  {
                    //sucesso === 1 ? 'faca isso' : 'faca aquilo'
                    sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inv??lida.</div> : null
                  }

                  <div className="login-links mt-5">
                    <Link to="/app/resetsenha" className="mx-3">Esqueci minha senha</Link>
                    <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
                  </div>
                  <Footer />
                </form>
              </div>
          </div>
          
    
  }

export default Login;