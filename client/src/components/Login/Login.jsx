import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkSessionAC } from '../../redux/actionCreators/userAC';
import Title from '../UI/Title/Title';

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
    <main className="form">
      <Title title="Войти" />
      <form id="registerForm" onSubmit={onSubmit} action="/signin" method="POST">
        {
          isError
          && <div className="error">{errorMessage}</div>
        }
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
            <input name="email" type="email" className="form-control" id="inputEmail" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Пароль
            <input name="password" type="password" minLength="8" className="form-control" id="inputPassword" />
          </label>
        </div>

        <button type="submit" className="btn btn-block">Войти</button>
      </form>
    </main>
  );
};
export default Login;
