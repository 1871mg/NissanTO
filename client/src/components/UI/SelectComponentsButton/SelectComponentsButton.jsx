import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Select from 'react-select'
import styles from './SelectComponentsButton.module.css';


function SelectComponentsButton() {
  const [selectedOption, setSelectedOption] = useState(null)
  const addComponents = useSelector((state) => state.serviceInfoReducer.components)

return (
    <div className={styles.selectcomponentsbutton}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={addComponents.map((addComponent) => addComponent = { value: addComponent.id, label: `${addComponent.title}: ${addComponent.price} ₽` })}
        placeholder={<div className="select-placeholder-text">дополнительные запчасти</div>}
      />
	    <button className={styles.selectcomponentsbuttonplus}>+</button>
    </div>
  )
}




export default SelectComponentsButton
