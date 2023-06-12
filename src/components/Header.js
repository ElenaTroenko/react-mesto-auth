import React from "react";
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      {props.loggedIn && 
        <div className="header__inner">
          <span className="header__email">{props.email}</span>
          <Link onClick={props.onSignOut} className="header__logoff">Выйти</Link>
        </div>
      }
      {!props.loggedIn && props.showLogin &&
        <Link className="header__link" to="/signin">Войти</Link>
      }
      {!props.loggedIn && props.showRegister &&
        <Link className="header__link" to="/signup">Регистрация</Link>
      }
     </header>
  );
}