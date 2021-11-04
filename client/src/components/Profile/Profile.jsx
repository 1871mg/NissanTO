import React from 'react'
import styles from './Profile.module.css'
import Button from '../UI/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Profile() {
  const { ownerCars } = useSelector((state) => state.userReducer.user)

  return (
    <div className={styles.profile}>
      <>

        {ownerCars ?
        ownerCars.length ? (
          ownerCars.map((ownerCar) => (
            <li>
              {ownerCar.CarModel.title}{' '}
	            {ownerCar.yearIssue}{' '}
	            {ownerCar.stateNumber}{' '}
	            {ownerCar.Milege.distanse}{' '}км
            </li>
          ))
        ) : (
          <li>Вы не добавили автомобиль</li>
        ) : <li>Вы не добавили автомобиль</li>}
      </>

      <li>
        Nissan Qashqai (J11) 1,6 турбодизель 08.11.2021{' '}<Button name="ОТМЕНИТЬ" />
      </li>

      <Link className={styles.profilebutton} to="/car">ДОБАВИТЬ АВТО</Link>
      <Link className={styles.profilebutton} to="/calendar">ЗАПИСАТЬСЯ НА ТО</Link>
    </div>
  )
}

export default Profile
