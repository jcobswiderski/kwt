import React, { useState } from 'react';
import TiltImage from "./TiltImage";
import './css/login.css';

const Login = () => {

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__group">
          <div className="login__logo js-tilt" data-tilt >
             <TiltImage src="./logo.png" alt="Obrazek" />
          </div>
        </div>
        <div className="login__group">
          <h1 className="login__title">TEST</h1>

          <div className="input__subgroup" data-validate="Valid email is required: ex@abc.xyz">
            <img className="input__icon" src="./login-avatar.png" alt="" />
            <input className="login__input" id="login_inp-login" type="text" placeholder='Login'/>
            <div className="tooltip">Wprowadź pierwszą literę imienia oraz nazwisko, bez spacji i polskich znaków.</div>
            <div class="tooltip-line"></div>
          </div>
          
          <div className="input__subgroup" data-validate="Valid email is required: ex@abc.xyz">
            <img className="input__icon" src="./login-password.png" alt="" />
            <input className="login__input" id="login_inp-pass" type="text" placeholder='Hasło'/>
            <div className="tooltip">Hasło składa się z kombinacji wyrażenia "pass" oraz trzech pierwszych cyfr Twojej licencji.</div>
            <div class="tooltip-line"></div>
          </div>
          <button className="login__submit">Zaloguj</button>
        </div>
      </div>
   </div>
  );

};

export default Login;
