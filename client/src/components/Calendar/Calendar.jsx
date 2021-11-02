import React, { useState } from 'react'
import CalendarLayout from '../CalendarLayout/CalendarLayout'
import styles from './Calendar.module.css';
import AddEntryForm from '../AddEntryForm/AddEntryForm';

const Calendar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const closeModel = () => {
    setIsOpen(false)
  }
  const addEntry = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <section className={styles.background}>
      {isOpen &&
        <section onClick={(event) => {
          if(event.target.tagName === 'SECTION') setIsOpen(!isOpen)
        }} className={styles.modal}>
          <div className={styles.modalBody}>
            <AddEntryForm closeModel={closeModel}/>
          </div>
        </section>
      }
        <button onClick={addEntry} className={styles.btnAddEntry}>НАЖМИТЕ ДЛЯ ВЫБОРА ДАТЫ</button>
        <div className={styles.calendar}>
          <CalendarLayout  />
        </div>
      </section>
    </>
  )
}

export default Calendar

