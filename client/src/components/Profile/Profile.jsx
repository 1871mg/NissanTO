import React from 'react'
import styles from './Profile.module.css'
import Button from '../UI/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Profile() {
  const { ownerCars } = useSelector((state) => state.userReducer.user)

  return (
    <ul className={styles.profile}>
      <>
      
        {ownerCars ?
        ownerCars.length ? (
          ownerCars.map((ownerCar) => (
            <li>
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
      <Link to="/calendar">ЗАПИСАТЬСЯ НА ТО</Link>
    </ul>
  )
}

export default Profile
