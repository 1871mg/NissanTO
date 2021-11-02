import React from 'react';
import styles from './AddCar.module.css';
import Button from '../UI/Button/Button';
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton';
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton';
import SelectYearIssueButton from '../UI/SelectYearIssueButton/SelectYearIssueButton';

function AddCar() {
  return (
    <ul className={styles.addcar}>
	    <SelectModelButton />
	    <SelectYearIssueButton />
	    <input
		    name="yearissue"
		    type="integer"
		    className="form-control"
		    id="yearIssue"
		    placeholder="номер в формате а123ве123"
	    />
	    <SelectMileageButton />
      <Button name='ДОБАВИТЬ АВТОМОБИЛЬ'/>
    </ul>
  );
}

export default AddCar;
