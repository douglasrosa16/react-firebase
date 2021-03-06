import React from 'react';
import {Link}  from 'react-router-dom';

import Footer from '../Components/Footer';

import NavBar from '../Components/Navbar/navbar';

import './resetsenha.css';

function ResetSenha(){

  const options = [
    {
      id: 1,
      title: "Home",
      link: "/"
    }
  ]

    return (
      <>  
        <NavBar opcoes={options}/>
        <div className="d-flex align-items-center text-center form-container">
          <form className="form-signin">
            <img className="mb-4" src="/Images/logo-small2.png" alt="" />
            <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
              <label for="floatingInput">E-mail</label>
            </div>
                
            <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>

            <div className="login-links mt-5">
              <Link to="/app/novaconta" className="mx-3">Criar uma conta.</Link>
            </div>
            <Footer />        
          </form>
        </div>
      </>
    )
  }

export default ResetSenha;