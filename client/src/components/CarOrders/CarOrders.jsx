import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import styles from './CarOrders.module.css'
import CarOrderItem from '../CarOrderItem/CarOrderItem';

export const CarOrders = () => {
  const carId = useParams().car_id;
  const everyOrders = useSelector(state => state.ordersReducer.everyOrders);

  return (
    <div className={styles.main}>
      <h1 className={styles.ordersHeader}>Заказы</h1>
      <section className={styles.container}>
        <ol className={styles.ordersList}>
        {
        everyOrders 
          &&
          everyOrders.filter((order) => Number(order.carId) === Number(carId)).map((order) => <CarOrderItem key={order.id} order={order}/>)
        }
        </ol>
      </section>
    </div>
  )
}

