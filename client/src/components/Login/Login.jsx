import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorPassConfirmAC } from '../../redux/actionCreators/userAC'
import { sagaGetLoginAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import {hideTextMain} from '../../redux/actionCreators/serviceInfoAC'
import styles from './Login.module.css'
import Button from '../UI/Button/Button'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  dispatch(hideTextMain())
  const isError = useSelector((state) => state.userReducer.isError)
  const [errorMessage, seterrorMessage] = useState('')
  const { loginEntrance } = useSelector((state) => state.userReducer.user)
  console.log('loginEntrance', loginEntrance)

  const sendLogForm = async (event) => {
    event.preventDefault()
    dispatch(setErrorPassConfirmAC(false))

    const dataInput = new FormData(event.currentTarget)
    const body = {
      phone: dataInput.get('phone'),
      password: dataInput.get('password'),
    }
    dispatch(hideTextMain())
    dispatch(sagaGetLoginAC(body))
    
  }

  return (
    <>
      {loginEntrance ? (
        <Redirect to="/profile" />
      ) : (
        <div className={styles.login}>
          <main>
            <form
              id="registerForm"
              onSubmit={sendLogForm}
              action="/signin"
              method="POST"
            >
              {isError && <div className="error">{errorMessage}</div>}
              <div className={styles.logininput}>
                <input
                  name="phone"
                  type="phone"
                  className="form-control"
                  id="inputPhone"
                  placeholder=" телефон"
                  required
                />
                <input
                  name="password"
                  type="password"
                  minLength="6"
                  className="form-control"
                  id="inputPassword"
                  placeholder=" пароль"
                  required
                />
              </div>
              <li className={styles.logininput}>
                <Button name="В О Й Т И" />
              </li>
            </form>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <li className={styles.logininput}>если нет пароля -</li>
            <li className={styles.logininput}>нажмите ниже на</li>
            <li className={styles.logininput}>
              <Link to="/registration">Р Е Г И С Т Р А Ц И Я</Link>
            </li>
          </main>
        </div>
      )}
    </>
  )
}
export default Login
