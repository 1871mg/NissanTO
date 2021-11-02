import React, { useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sagaGetLoginAdminAC } from '../../redux/actionCreators/asyncAC/asyncAdminAC'
import styles from './Admin.module.css'
import Button from '../UI/Button/Button'

const Admin = () => {
  const dispatch = useDispatch()
  
  const admin  = useSelector((state) => state.adminReducer.admin)

  const sendLogForm = async (event) => {
    event.preventDefault()
    const dataInput = new FormData(event.currentTarget)
    const body = {
      phone: dataInput.get('phone'),
      password: dataInput.get('password'),
    }
    dispatch(sagaGetLoginAdminAC(body))
  }

  return (
    <>
    {
      admin 
      ?
      <Redirect to="/admin/profile" />
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
export default Admin
