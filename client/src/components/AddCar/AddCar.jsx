import React from 'react';
import styles from './AddCar.module.css';
import Button from '../UI/Button/Button';
import SelectButton from '../UI/SelectButton/SelectButton';

function AddCar() {
  return (
    <ul className={styles.addcar}>
      <li><SelectButton /></li>
      <li><SelectButton /></li>
      <li><SelectButton /></li>
      <li><SelectButton /></li>
      <Button />
    </ul>
  );
}

export default AddCar;
