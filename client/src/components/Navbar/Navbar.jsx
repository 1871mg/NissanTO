import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          {user
          && (
          <>
            <li><Link to="/">главная</Link></li>
            <li><Link to="/profile">профиль</Link></li>
            <li><Link to="/logout">выйти</Link></li>
          </>
          )}
          {!user
          && (
          <>
            <li><Link to="/">главная</Link></li>
            <li><Link to="/login">войти</Link></li>
          </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
