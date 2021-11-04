import React from 'react'
import { setCurrentTimeZonePlus } from '../../utils/setCurrentTimeZone'
import { useHistory, useParams } from 'react-router'
import styles from './CarOrderItem.module.css'

const CarOrderItem = ({order}) => {
  const history = useHistory();


  return (
    <div onClick={() => history.push(`/car_orders/${order.carId}/${order.id}`)} key={order.id} className={order.isComplite ? styles.orderItemComplite : styles.orderItemActive}>
      <p>{order.title}</p>
      <p>Начало: {setCurrentTimeZonePlus(new Date(order.startDate))}</p>
      <p>Окончание: {setCurrentTimeZonePlus(new Date(order.endDate))}</p>
      <p>Авто: {order.carModel}</p>
      <p>Механик: {order.worker}</p>
    </div>
  )
}

export default CarOrderItem
