import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setModelSelect, setOwnerCarInOrderAC } from '../../../redux/actionCreators/serviceInfoAC'
import styles from './SelectModelButtonAuthOwner.module.css'

function SelectModelButtonAuthOwner() {
  const dispatch = useDispatch()
  const {ownerCars} = useSelector((state) => state.userReducer.user)
  const [selectedOption, setSelectedOption] = useState(null)

  const setSelectedModelOption = (event) => {
    const selectModelOption = event.value
    console.log(event);
    setSelectedOption(event.label)
    dispatch(setModelSelect(selectModelOption))
    dispatch(setOwnerCarInOrderAC(event))
  }

  return (
    <div className={styles.selectmodelbutton}>
      {ownerCars && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedModelOption}
          options={ownerCars.map(
            (ownerCar) => (ownerCar = { value: ownerCar.CarModel.id, label: `${ownerCar.CarModel.title} ${ownerCar.yearIssue}г. ${ownerCar.stateNumber}`, carId: ownerCar.id, })
          )}
          placeholder="выберите автомобиль"
        />
      )}
    </div>
  )
}

export default SelectModelButtonAuthOwner
