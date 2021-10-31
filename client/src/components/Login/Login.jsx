import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkSessionAC } from '../../redux/actionCreators/userAC';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event) => {
    setIsError(false);
    event.preventDefault();

    const dataInput = new FormData(event.currentTarget);
    const body = {
      email: dataInput.get('email'),
      password: dataInput.get('password'),
    };

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const dataFromServer = await response.json();

    if (dataFromServer.user) {
      dispatch(checkSessionAC(dataFromServer.user));
      history.push('/');
    } else {
      setIsError(true);
      setErrorMessage(dataFromServer.message);
    }
  };
  return (
    <div className={styles.login}>
      <main className="form">
        <form id="registerForm" onSubmit={onSubmit} action="/signin" method="POST">
          {
          isError
          && <div className="error">{errorMessage}</div>
        }
          <div>
            <input name="phone" type="phone" className="form-control" id="inputPhone" placeholder="телефон" />
            <input name="password" type="password" minLength="6" className="form-control" id="inputPassword" placeholder="пароль" />
          </div>
          <Button />
        </form>
        <li><Link to="/registration">регистрация</Link></li>
      </main>
    </div>
  );
};
export default Login;
