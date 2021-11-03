import React from 'react'
import { useParams } from 'react-router';

const AdminOrderCard = () => {
  const orderId = useParams().order;
  
  return (
    <div>
      {orderId}
    </div>
  )
}

export default AdminOrderCard

