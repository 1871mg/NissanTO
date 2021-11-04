import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getFullInfoOrder, changeStatusOrder, deleteOrderAC } from '../../redux/actionCreators/ordersAC';
import { getOrderById, changeStatusOrderById, deleteOrderById } from '../../http/order';
import styles from './CarOrderCard.module.css';
import { handleTimeFormat } from '../../utils/handleTimeFormat';
import { getShortName } from '../../utils/getShortName';
import { getEndDate } from '../../utils/getEndDate';
import { calcTotalPriceFullService } from '../../utils/calcTotalPriceFullService';
import Loader from '../UI/Loader/Loader';

const CarOrderCard = () => {
  const dispatch = useDispatch();
  const orderId = useParams().order_id;

  useEffect(() => {
    (async () => {
      const orderInfo = await getOrderById(orderId);
      dispatch(getFullInfoOrder(orderInfo));
    })();
  }, [])

  const orderInfo = useSelector(state => state.ordersReducer.fullInfoOrder)
  console.log(orderInfo);
  return (
    <>
    
    {
      orderInfo 
        ?
      <section className={styles.card}>
        <div className={styles.cardInfo}>
          <h3 className={styles.textCenter}>{orderInfo.fullService.title}</h3>
          <p>Статус: {orderInfo.order.isComplite ? <span className={styles.finished}>завершен</span> : <span className={styles.active}>активный</span>}</p>
          <p>Начало: {handleTimeFormat(orderInfo.order.timeStart)}</p>
          <p>Окончание: {getEndDate(new Date(orderInfo.order.timeStart), orderInfo.order.FullService.duration)}</p>
          <p>Авто: {orderInfo.carModel.title}</p>
          <p>Госзнак: {orderInfo.car.stateNumber}</p>
          <p>Владелец: {`${orderInfo.owner.firstname} ${orderInfo.owner.parentname} ${orderInfo.owner.lastname}`}</p>
          <p>Телефон: {orderInfo.owner.phone}</p>
          <p>Механик: {getShortName(orderInfo.order.Worker.firstname, 
              orderInfo.order.Worker.lastname, 
              orderInfo.order.Worker.parentname, )}</p>
          <p>Список услуг, входящих в ТО:</p>
            {
              orderInfo.fullService.Services.length
              ?
              <>
                {orderInfo.fullService.Services.map((service, i) => <div key={service.id}>{`${i+1}. ${service.title}`}</div>)}
              </>
              :
              <p>-----</p>
            }
          <p>Список запчастей, входящих в ТО:</p>
          {
            orderInfo.fullService.Components.length
            ?
            <>
              {orderInfo.fullService.Components.map((component, i) => <div key={component.id}>{`${i+1}. ${component.title}`}</div>)}
            </>
            :
            <p>-----</p>
          }
          {
            orderInfo.order.Services.length
            &&
            <>
              <p>Список дополнительных услуг:</p>
              {orderInfo.order.Services.map((service, i) => <div key={service.id}>{`${i+1}. ${service.title}`}</div>)}
            </>
          }
          {
            orderInfo.order.Components.length
            &&
            <>
              <p>Список дополнительных запчастей:</p>
              {orderInfo.order.Components.map((component, i) => <div key={component.id}>{`${i+1}. ${component.title}`}</div>)}
            </>
          }
          {
            (orderInfo.order.Components.length || orderInfo.order.Services.length)
            &&
            <>
              <p>Стоимость ТО: {calcTotalPriceFullService(orderInfo.fullService.duration, orderInfo.order.Components, orderInfo.order.Services).fullServiceCost} рублей</p>
              <p>Стоимость доп услуг и запчастей: {calcTotalPriceFullService(orderInfo.fullService.duration, orderInfo.order.Components, orderInfo.order.Services).additionalItemsCost} рублей</p>
            </>
          }
          
          <p>Общая стоимость: {calcTotalPriceFullService(orderInfo.fullService.duration, orderInfo.order.Components, orderInfo.order.Services).total} рублей</p>
        </div>
      </section>
      :
      <div className={styles.loaderContainer}><Loader /></div>
    } 
      
    </>
  )
}

export default CarOrderCard

