import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import Select from 'react-select';
import styles from "./SelectServiceButton.module.css";
import Button from "../Button/Button";

function SelectServiceButton() {
  const [selectedOption, setSelectedOption] = useState(null);
  const addServices = useSelector((state) => state.serviceInfoReducer.services)


  return (
  	<div className={styles.selectservicebutton}>
	    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={addServices.map((addService) => addService = { value: addService.id, label: `${addService.title}: ${addService.price} ₽` })}
        placeholder={<div className="select-placeholder-text">дополнительные услуги</div>}
      />
		  <button className={styles.selectservicebuttonplus}>+</button>
	  </div>
  );
}

export default SelectServiceButton;
