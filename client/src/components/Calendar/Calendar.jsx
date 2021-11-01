import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout'
import styles from './Calendar.module.css';
import AddEntryForm from '../AddEntryForm/AddEntryForm';
import Loader from '../UI/Loader/Loader';

const Calendar = () => {
  const scheduleData  = useSelector((state) => state.ordersReducer.orders);
  const [ isOpen, setIsOpen ] = useState(false);

  const addEntry = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
     {scheduleData ?

      <section className={styles.background}>
      {isOpen &&
        <section onClick={(event) => {
          if(event.target.tagName === 'SECTION') {
            setIsOpen(!isOpen)
          }
        }} className={styles.modal}>
          <div className={styles.modalBody}>
            <AddEntryForm />
          </div>

        </section>
      }

      <button onClick={addEntry} className={styles.btnAddEntry}>Записаться на ТО</button>
      <div className={styles.calendar}>
        <CalendarLayout />
      </div>
    </section>
    :
    <div className={styles.loader}><Loader /></div>
    }
    </>

  )
}

export default Calendar

