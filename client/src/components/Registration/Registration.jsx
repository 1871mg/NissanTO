import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Title from '../UI/Title/Title';
import { checkSessionAC } from '../../redux/actionCreators/userAC';

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
    <main className="form">
      <Title title="Зарегистрироваться" />
      <form id="registerForm" onSubmit={onSubmit} action="/signup" method="POST">
        {
          isError
          && <div className="error">{errorMessage}</div>
        }
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Ваше имя
            <input name="username" type="text" className="form-control" id="inputUsername" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
            <input name="email" type="email" className="form-control" id="inputEmail" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Пароль
            <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" minLength="8" className="form-control" id="inputPassword" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPasswordConfirm" className="form-label">
            Подтвердите пароль
            <input name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} type="password" minLength="8" className="form-control" id="inputPasswordConfirm" />
          </label>
        </div>
        <button type="submit" className="btn btn-block">Зарегистрироваться</button>
      </form>
    </main>
  );
};
export default Registration;
