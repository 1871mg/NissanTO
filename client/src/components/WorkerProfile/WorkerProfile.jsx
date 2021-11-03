import React from 'react';
import styles from './WorkerProfile.module.css'
import { useSelector, useDispatch } from 'react-redux';


const WorkerProfile = () => {
  const orders = useSelector(state => state.ordersReducer.orders);
  return (
    <div className={styles.workerMain}>
      <h1 className={styles.ordersHeader}>Заказы</h1>
      {/* <h3>Заказы</h3> */}
      {/* {
        orders 
        &&
        <ul className='list-group list-group-flush'>
        {orders.map((order) =>  <li className='list-group-item'></li>)}
        </ul>
      } */}
      
    </div>
  )
}

export default WorkerProfile
