import React from 'react';
import styles from './Main.module.css';
import SelectButton from '../UI/SelectButton/SelectButton';
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton';
import Offer from '../Offer/Offer';
import Button from '../UI/Button/Button';

const Main = () => {
  console.log('Main');
  return (
    <div className={styles.main}>
      <SelectButton />
      <SelectMileageButton />
      <Offer />
      <Button />
    </div>
  );
};

export default Main;
