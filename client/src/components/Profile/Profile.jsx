import React from 'react'
import styles from './Profile.module.css'
import Button from '../UI/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {hideTextMain} from '../../redux/actionCreators/serviceInfoAC'

function Profile() {
  const dispatch = useDispatch()
  dispatch(hideTextMain())
  const { ownerCars } = useSelector((state) => state.userReducer.user)

  return (
    <ul className={styles.profile}>
      <>
      
        {ownerCars ?
        ownerCars.length ? (
          ownerCars.map((ownerCar) => (
            <li key={ownerCar.id}>
              Авто: {ownerCar.CarModel.title} гос.номер: {ownerCar.stateNumber}{' '}
              год выпуска: {ownerCar.yearIssue} пробег: {ownerCar.Milege.distanse}км
            </li>
          ))
        ) : (
          <li>Вы еще не добавили свой автомобиль</li>
        ) : <li>Вы еще не добавили свой автомобиль</li>}
      </>

      <li>
        Nissan Qashqai (J11) 1,6 турбодизель 08.11.2021{' '}
        <Button name="ОТМЕНИТЬ" />
      </li>
      <li>Nissan Tiida (C13)</li>
      <li>Nissan Pathfinder (R51) 2,5 турбодизель DPF</li>
      <Link to="/car">ДОБАВИТЬ АВТО</Link> 
      <Link to="/">ЗАПИСАТЬСЯ НА ТО</Link>
    </ul>
  )
}

export default Profile
