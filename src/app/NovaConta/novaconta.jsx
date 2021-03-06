import React from 'react';
import {Link}  from 'react-router-dom';
import './novaconta.css';
import Footer from '../Components/Footer';

import NavBar from '../Components/Navbar/navbar';

function NovaConta(){

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
                <img className="mb-4" src="/Images/logo-small2.png" alt="Logo" />
                <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
                  <label for="floatingInput">E-mail</label>
                </div>

                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                  <label for="floatingPassword">Senha</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Criar conta</button>

                <div className="login-links mt-5">
                  <Link to="/app" className="mx-3">Já tenho uma conta.</Link>
                </div>
                <Footer />        
              </form>
            </div>
          </>
    )
  }

export default NovaConta;