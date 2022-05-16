import React from "react";
import { useState } from 'react';
import './styles.css';
import iconPepople from './assets/people.png';
import enter from './assets/enter.png';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import logo from './assets/logo.png'






export default function Page1() {

  const [user, setUser] = useState("")
  const navegar = useNavigate();



  function logoff(chave,valor) {
    localStorage.setItem(chave,valor)
    navegar("/pagina2/");
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
                className={user !== "" ? 'has-val input' : 'input'}
                type="text"
                id="user"
                value={user}
                onChange={e => setUser(e.target.value)} />
              <span className="focus-input" data-placeholder="Usuario">
                <img className="icon-email" src={iconPepople} />
              </span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn"
                onClick={()=>logoff('ls_User',user)}
              >CADASTRAR</button>
              <img className="icon-enter" src={enter} />
            </div>
          </form>
        </div>
      </div>
    </div>
  

  );
}





