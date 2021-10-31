import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setMilegeSelect } from '../../../redux/actionCreators/serviceInfoAC'
import { sagaGetServiceTypeAC } from '../../../redux/actionCreators/asyncAC/asyncServiseInfoAC'
import styles from './SelectMileageButton.module.css';

function SelectMileageButton() {
  const dispatch = useDispatch()
  const allMilege = useSelector((state) => state.serviceInfoReducer.allMilege)
  const [selectedOption, setSelectedOption] = useState(null)

  const setSelectedMilegeOption = (event) => {
    const selectMilegeOption = event.value
    setSelectedOption(event)
    dispatch(setMilegeSelect(selectMilegeOption))
  }

  return (
	  <div className={styles.selectmileagebutton}>
      {allMilege && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedMilegeOption}
          options={allMilege.map(
            (option) =>
              (option = { value: option.id, label: `${option.distanse} км` })
          )}
          placeholder= 'выберите пробег и год'
        />
      )}
    </div>
  )

}

export default SelectMileageButton
