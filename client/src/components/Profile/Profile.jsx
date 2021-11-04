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
            <li onClick={() => history.push(`car_orders/${ownerCar.id}`)} key={ownerCar.id}>
              {ownerCar.CarModel.title}{' '}
	            {ownerCar.yearIssue}{' '}
	            {ownerCar.stateNumber}{' '}
	            {ownerCar.Milege.distanse}{' '}км
            </li>
          ))) : (
          <li>Вы не добавили автомобиль</li>
        ) : (<li>Вы не добавили автомобиль</li>)}
      </>

      <li>
        Nissan Qashqai (J11) 1,6 турбодизель 08.11.2021{' '}
        <Button name="ОТМЕНИТЬ" />
      </li>

      <Link className={styles.profilebutton} to="/car">
        ДОБАВИТЬ АВТО
      </Link>
      <Link className={styles.profilebutton} to="/calendar">
        ЗАПИСАТЬСЯ НА ТО
      </Link>
    </div>
  )
}

export default Profile
