import React from 'react';
import styles from './Adminprofile.module.css'
import { useSelector } from 'react-redux';
import AdminOrderItem from '../AdminOrderItem/AdminOrderItem';

const AdminProfile = () => {
  const orders = useSelector(state => state.ordersReducer.everyOrders);
  
  return (
    <div className={styles.adminMain}>
      <p className={styles.ordersHeader}>Заказы</p>
      <section className={styles.container}>
        <ol className={styles.ordersList}>
        {
        orders 
          &&
        orders.map((order) => <AdminOrderItem key={order.id} order={order}/>)
        }
        </ol>
      </section>
      

      
    </div>
  )
}

export default AdminProfile
