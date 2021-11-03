import React from 'react'
import { setCurrentTimeZonePlus } from '../../utils/setCurrentTimeZone'
import styles from './AdminOrderProfile.module.css'
import { useHistory } from 'react-router'

const AdminOrderItem = ({order}) => {
  const history = useHistory()
  
  return (
    <div onClick={() => history.push(`/admin/profile/${order.id}`)} key={order.id} className={styles.orderItem}>
      <p>{order.title}</p>
      <p>Начало: {setCurrentTimeZonePlus(new Date(order.startDate))}</p>
      <p>Окончание: {setCurrentTimeZonePlus(new Date(order.endDate))}</p>
      <p>Авто: {order.carModel}</p>
      <p>Владелец: {order.owner}</p>
      <p>Механик: {order.worker}</p>
    </div>
  )
}

export default AdminOrderItem

