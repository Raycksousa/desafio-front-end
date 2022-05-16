import React from "react";
import { useState } from 'react';
import './styles.css';
import iconPepople from './assets/people.png';
import iconEmail from './assets/email.png';
import enter from './assets/enter.png';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import logo from './assets/logo.png'






export default function Page2() {

  const [email, setEmail] = useState("")
  const navegar = useNavigate();
  var inputUser = localStorage.getItem('ls_User');



  function logoff(chave,valor) {
    localStorage.setItem(chave,valor)
    navegar("/pagina3/");
  }

  return (
     <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logo} className="App-logo" alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                id="email"
                value={inputUser}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="">
                <img className="icon-email" src={iconPepople} />
                </span>
              
            </div>
            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="txt"
                id="senha"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email">
                <img className="icon-email" src={iconEmail} />
              </span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn"
                onClick={()=>logoff('ls_Email',email)}
              >PROXIMO</button>
              <img className="icon-enter" src={enter} />
            </div>
          </form>
        </div>
      </div>
    </div>
  

  );
}





