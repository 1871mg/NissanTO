import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './Registration.module.css';
import { checkSessionAC } from '../../redux/actionCreators/userAC';
import Button from '../UI/Button/Button';

const Registration = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (event) => {
    setIsError(false);
    event.preventDefault();

    if (password !== passwordConfirm) {
      setIsError(true);
      setErrorMessage('Пароли не совпадают');
      return;
    }
    setIsError(false);

    const dataInput = new FormData(event.currentTarget);
    const body = {
      username: dataInput.get('username'),
      email: dataInput.get('email'),
      password: dataInput.get('password'),
    };

    const response = await fetch('http://localhost:5000/register', {
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
    <div className={styles.registration}>
      <main className="form">
        <form id="registerForm" onSubmit={onSubmit} action="/signup" method="POST">
          {
          isError
          && <div className="error">{errorMessage}</div>
        }
          <div className="loginInputs">
            <input name="firstname" type="name" className="form-control" id="inputFirstName" placeholder="имя" />
            <input name="parentname" type="name" className="form-control" id="inputParentName" placeholder="отчество" />
            <input name="lastname" type="name" className="form-control" id="inputLastnameName" placeholder="фамилия" />
            <input name="email" type="email" className="form-control" id="inputEmail" placeholder="почта" />
            <input name="phone" type="phone" className="form-control" id="inputPhone" placeholder="телефон" />
            <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" minLength="6" className="form-control" id="inputPassword" placeholder="пароль" />
            <input name="password" onChange={(e) => setConfirmPassword(e.target.value)} type="password" minLength="6" className="form-control" id="inputPassword" placeholder="проверка пароля" />
          </div>
          <Button />
        </form>
      </main>
    </div>
  );
};
export default Registration;
