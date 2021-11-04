import React from 'react'
import styles from './Profile.module.css'
import Button from '../UI/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { hideTextMain } from '../../redux/actionCreators/serviceInfoAC'

function Profile() {
  const dispatch = useDispatch()
  dispatch(hideTextMain())
  const { ownerCars } = useSelector((state) => state.userReducer.user)
  const history = useHistory();
  return (
    <div className={styles.profile}>
      <>
        {ownerCars ?
        ownerCars.length ? (
          ownerCars.map((ownerCar) => (
            <li className={styles.profilebutton} onClick={() => history.push(`car_orders/${ownerCar.id}`)} key={ownerCar.id}>
              {ownerCar.CarModel.title}{' '}
	            {ownerCar.yearIssue}{' '}
	            {ownerCar.stateNumber}{' '}
	            {ownerCar.Milege.distanse}{' '}км
            </li>
          ))

        ) : (
          <li>Вы не добавили автомобиль</li>
        ) : <li>Вы не добавили автомобиль</li>
        }
      </>

      <div className={styles.profilebuttoncenter}><Link className={styles.profilebutton} to="/car">ДОБАВИТЬ АВТО</Link></div>
	    <div className={styles.profilebuttoncenter}><Link className={styles.profilebutton} to="/calendar">ЗАПИСАТЬСЯ НА ТО</Link></div>
    </div>
  )
}

export default Profile
