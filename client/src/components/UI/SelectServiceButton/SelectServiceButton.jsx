import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import styles from './SelectServiceButton.module.css'
import { addAdditionalServiceAC } from '../../../redux/actionCreators/serviceInfoAC'


function SelectServiceButton() {
  const dispatch = useDispatch()
  const [selectValue, setSelectValue] = useState()
  const addServices = useSelector((state) => state.serviceInfoReducer.services)
  const addService = () => {
    if (!selectValue) {
      alert('Дополнительная услуга не выбрана')
    } else {
      dispatch(addAdditionalServiceAC(selectValue))
      setSelectValue('')
    }
  }

  return (
    <div className={styles.selectservicebutton}>
      <div style={{width: '300px'}}>
      <Select
        value={selectValue}
        onChange={setSelectValue}
        options={addServices.map(
          (addService) =>
            (addService = {
              value: addService.id,
              label: `${addService.title}: ${addService.price} ₽`,
              title: addService.title,
              price: addService.price,
            })
        )}
        placeholder={
          <div className="select-placeholder-text">дополнительные услуги</div>
        }
      />
      </div>
      <button onClick={addService} className={styles.selectservicebuttonplus}>
        +
      </button>
    </div>
  )
}

export default SelectServiceButton
