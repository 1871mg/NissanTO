import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorPassConfirmAC } from '../../redux/actionCreators/userAC'
import { sagaGetLoginAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import styles from './Login.module.css'
import Button from '../UI/Button/Button'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isError = useSelector((state) => state.userReducer.isError)
  const [errorMessage, seterrorMessage] = useState('')

  const user  = useSelector((state) => state.userReducer.user)

  const sendLogForm = async (event) => {
    event.preventDefault()
    dispatch(setErrorPassConfirmAC(false))

    const dataInput = new FormData(event.currentTarget)
    const body = {
      phone: dataInput.get('phone'),
      password: dataInput.get('password'),
    }
    dispatch(sagaGetLoginAC(body))
  }

  if (user) {
    history.push('/profile')
  }

  return (
    <div className={styles.login}>
      <main className="form">
        <form
          id="registerForm"
          onSubmit={sendLogForm}
          action="/signin"
          method="POST"
        >
          {isError && <div className="error">{errorMessage}</div>}
          <div>
            <input
              name="phone"
              type="phone"
              className="form-control"
              id="inputPhone"
              placeholder="телефон"
            />
            <input
              name="password"
              type="password"
              minLength="6"
              className="form-control"
              id="inputPassword"
              placeholder="пароль"
            />
          </div>
          <Button name="войти" />
        </form>
        <li>
          <Link to="/registration">регистрация</Link>
        </li>
      </main>
    </div>
  )
}
export default Login
