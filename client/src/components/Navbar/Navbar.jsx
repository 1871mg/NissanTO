import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <header>
      <div className="logo">
        <h1><a href="/">ElbrusКино</a></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="search">Поиск</Link></li>
          {user
          && (
          <>
            <li><Link to="/favourites">Любимые фильмы</Link></li>
            <li><Link to="/logout">Выйти</Link></li>
          </>
          )}
          {!user
          && (
          <>
            <li><Link to="/registration">Зарегистрироваться</Link></li>
            <li><Link to="/login">Войти</Link></li>
          </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
