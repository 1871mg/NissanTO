import React from 'react';
import { getDayForInput } from '../../utils/getToday';
import { getMaxDayFromToday } from '../../utils/getMaxDay';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../redux/actionCreators/ordersAC';
import { changeCurrentDay } from '../../redux/actionCreators/calendarAC'
import styles from './AddEntryForm.module.css';
import Button from '../UI/Button/Button'



const AddEntryForm = ({closeModel}) => {
  const dispatch = useDispatch();
  const {newOrder} = useSelector(state => state.serviceInfoReducer)
  const serviceType = useSelector(state => state.serviceInfoReducer.fullService.title)
  const serviceIds = useSelector(state => state.serviceInfoReducer.newOrder.serviceId)  
  const componentIds = useSelector(state => state.serviceInfoReducer.newOrder.componentId)
  const fullServiceId = useSelector(state => state.serviceInfoReducer.newOrder.fullServiceId) 


  const onSubmit = async (event) => {
  event.preventDefault();
  const {time, date } = event.target;
  const startDate = new Date(`${date.value} ${time.value}`)

  //const endDate = new Date(startDate.getTime() + (2 * 60 * 60 * 1000)) // 2 - количество часов - обработка на сервере

  const response = await fetch('http://localhost:5000/schedule', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      carId: newOrder.carId,
      serviceIds,
      componentIds,
      fullServiceId,
      startDate,
    })

  })

  const data = await response.json()
  if(data.isOrdered) {
    dispatch(addOrder(data.orderToRender))
    dispatch(changeCurrentDay(new Date(data.endDateNewOrder)))
    alert('Запись прошла успешно!');
    closeModel();
  } else {
    alert('Данное время уже занято!')
  }
 }


  return (
  	<ul className={styles.addentryform}>
    <form onSubmit={onSubmit}>
      <li>{`${serviceType}: ${newOrder.model} `}</li>
      <li>выберите дату и время</li>
      <input required name="date" defaultValue={getDayForInput(new Date())} type="date" min={getDayForInput(new Date())} max={getMaxDayFromToday(30)} />
      <input required id="appt-time"defaultValue="09:00:00" list="times" min="09:00:00" max="18:00:00" type="time" name="time" step="1800" />
      <datalist id="times">
	        <option value="08:00:00" />
          <option value="09:00:00" />
          <option value="10:00:00" />
          <option value="11:00:00" />
          <option value="12:00:00" />
          <option value="13:00:00" />
          <option value="14:00:00" />
          <option value="15:00:00" />
          <option value="16:00:00" />
          <option value="17:00:00" />
          <option value="18:00:00" />
          <option value="19:00:00" />
          <option value="20:00:00" />
          <option value="21:00:00" />
      </datalist>
      <Button name='ЗАПИСАТЬСЯ' />
    </form>
	  </ul>
  )
}

export default AddEntryForm
