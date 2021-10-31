import React from 'react';
import { getDayForInput } from '../../utils/getToday';
import { getMaxDayFromToday } from '../../utils/getMaxDay';

const AddEntryForm = () => {
const onSubmit = (event) => {
  event.preventDefault();
  const { car, time, date } = event.target;
  console.log(car.value);
  console.log(date.value);
  console.log(time.value);

}

  return (    
    <form onSubmit={onSubmit}>
      <h3>Выберите машину</h3>
      <select name="car" id="">
        <option value="car 1">Car 1</option>
      </select>
      <h3>Выберите дату</h3>
      <input name="date" type="date" min={getDayForInput(new Date())} max={getMaxDayFromToday(30)} />
      <input name="time" type="time" min="09:00" max="18:00" step="1800000"  />
      <input type="submit" value='Записаться на ТО' />
    </form>
  )
}

export default AddEntryForm
