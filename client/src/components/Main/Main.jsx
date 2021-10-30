import React from 'react';
import SelectButton from '../UI/SelectButton/SelectButton';
import Offer from '../Offer/Offer';
import Button from '../UI/Button/Button';
import styles from './Main.module.css';
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton';

const Main = () => {
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
