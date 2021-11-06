import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import styles from './SelectComponentsButton.module.css'
import { addAdditionalComponentAC } from '../../../redux/actionCreators/serviceInfoAC'

function SelectComponentsButton() {
  const dispatch = useDispatch()
  const [selectValue, setSelectValue] = useState()
  const addComponents = useSelector(
    (state) => state.serviceInfoReducer.components
  )

  const addComponent = () => {
    if (!selectValue) {
      alert('Дополнительная запчасть не выбрана')
    } else {
      dispatch(addAdditionalComponentAC(selectValue))
      setSelectValue('')
    }
  }
	// const styles = {
	// 	container: base => ({
	// 		...base,
	// 		width: '200px'
	// 	})
	// };
  return (

    <div className={styles.selectcomponentsbutton}>
      <div style={{width: '300px'}}>
      <Select
        value={selectValue}
        onChange={setSelectValue}
        options={addComponents.map(
          (addComponent) =>
            (addComponent = {
              value: addComponent.id,
              label: `${addComponent.title}: ${addComponent.price} ₽`,
              title: addComponent.title,
              price: addComponent.price,
            })
        )}
        placeholder={
          <div className="select-placeholder-text">дополнительные запчасти</div>
        }
      />
      </div>
      <button
        onClick={addComponent}
        className={styles.selectcomponentsbuttonplus}
      >
        +
      </button>
    </div>
  )
}

export default SelectComponentsButton
