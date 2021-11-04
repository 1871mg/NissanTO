import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sagaGetLoginWorkerAC } from '../../redux/actionCreators/asyncAC/asyncWorkerAC'
import styles from './Worker.module.css'
import Button from '../UI/Button/Button'

const Worker = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const worker  = useSelector((state) => state.workerReducer.worker)

  const sendLogForm = async (event) => {
    event.preventDefault()
    console.log(event);
    const dataInput = new FormData(event.currentTarget)
    const body = {
      phone: dataInput.get('phone'),
      password: dataInput.get('password'),
    }
    dispatch(sagaGetLoginWorkerAC(body))

  }

  return (
    <>
    {
      worker 
      ?

      <Redirect to='/worker/profile' />
      :
      <div className={styles.login}>
      <main className="form">
        <form
          id="registerForm"
          onSubmit={sendLogForm}
          action="/signin"
          method="POST"
        >
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
          <Button name="ВОЙТИ" />
        </form>
      </main>
    </div> 
    }
    </>
  )
}
export default Worker
