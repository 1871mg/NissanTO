import React from 'react';
import styles from './Adminprofile.module.css'
import { useSelector, useDispatch } from 'react-redux';


const AdminProfile = () => {
  const orders = useSelector(state => state.ordersReducer.orders);
  return (
    <div className={styles.adminMain}>
      <h1 className={styles.ordersHeader}>Заказы</h1>
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

export default AdminProfile
