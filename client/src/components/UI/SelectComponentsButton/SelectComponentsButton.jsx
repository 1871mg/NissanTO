import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import styles from './SelectComponentsButton.module.css'
import {addAdditionalComponentAC} from '../../../redux/actionCreators/serviceInfoAC'

function SelectComponentsButton() {
  const dispatch = useDispatch()
  const [selectValue, setSelectValue] = useState()
  const addComponents = useSelector(
    (state) => state.serviceInfoReducer.components
  )

  const addComponent = () => {
    dispatch(addAdditionalComponentAC(selectValue))
    setSelectValue('')
  }

  return (
    <div className={styles.selectcomponentsbutton}>
      <Select
        value={selectValue}
        onChange={setSelectValue}
        options={addComponents.map(
          (addComponent) =>
            (addComponent = {
              value: addComponent.id,
              label: `${addComponent.title}: ${addComponent.price} ₽`,
              title: addComponent.title,
              price: addComponent.price
            })
        )}
        placeholder={
          <div className="select-placeholder-text">дополнительные запчасти</div>
        }
      />
      <button onClick={addComponent} className={styles.selectcomponentsbuttonplus}>+</button>
    </div>
  )
}

export default SelectComponentsButton
