import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Registration.module.css';
import { setErrorPassConfirmAC } from '../../redux/actionCreators/userAC';
import {sagaGetRegistration} from '../../redux/actionCreators/asyncAC/asyncUserAC'
import Button from '../UI/Button/Button';

const Registration = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const isError = useSelector((state) => state.userReducer.isError)
  const [errorMessage, setErrorMessage] = useState('');

  const sendRegForm = async (event) => {
    event.preventDefault()
    dispatch(setErrorPassConfirmAC(false));

    if (password !== passwordConfirm) {
      dispatch(setErrorPassConfirmAC(true));
      setErrorMessage('Пароли не совпадают');
      return;
    }
    dispatch(setErrorPassConfirmAC(false))

    const dataInput = new FormData(event.currentTarget);
    const body = {
      firstname: dataInput.get('firstname'),
      parentname: dataInput.get('parentname'),
      lastname: dataInput.get('lastname'),
      email: dataInput.get('email'),
      phone: dataInput.get('phone'),
      password: dataInput.get('password'),
    };

    dispatch(sagaGetRegistration(body))
  };
  return (
    <div className={styles.registration}>
      <main className="form">
        <form id="registerForm" onSubmit={sendRegForm} action="/signup" method="POST">
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
            <input name="passwordConfirm" onChange={(e) => setConfirmPassword(e.target.value)} type="password" minLength="6" className="form-control" id="inputPassword" placeholder="проверка пароля" />
          </div>
          <Button name='зарегистрироваться'/>
        </form>
      </main>
    </div>
  );
};
export default Registration;
