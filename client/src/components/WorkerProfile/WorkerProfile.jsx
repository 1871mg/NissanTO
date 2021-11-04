import React from 'react';
import styles from './WorkerProfile.module.css'
import { useSelector, useDispatch } from 'react-redux';
import CarOrderItem from '../CarOrderItem/CarOrderItem';


const WorkerProfile = () => {
  const orders = useSelector(state => state.ordersReducer.orders);
  const worker = useSelector(state => state.workerReducer.worker);
  return (
    <div className={styles.workerMain}>
      <h1 className={styles.ordersHeader}>Заказы</h1>
      <section className={styles.container}>
        <ol className={styles.ordersList}>
        {
         (orders && worker)
          &&
          orders.filter((order) => Number(order.workerId) === Number(worker.id)).map((order) => <CarOrderItem key={order.id} order={order}/>)
        }
        </ol>
      </section>
        
    
      
    </div>
  )
}

export default WorkerProfile
