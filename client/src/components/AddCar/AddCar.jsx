import React, { useState } from 'react'
import styles from './AddCar.module.css'
import Button from '../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import SelectYearIssueButton from '../UI/SelectYearIssueButton/SelectYearIssueButton'
import { setStateNumberAC } from '../../redux/actionCreators/serviceInfoAC'
import { sagaCreateOwnerCarAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'

function AddCar() {
  const dispatch = useDispatch()
  const [stateNumber, setStateNumber] = useState()
  const inputChange = (event) => {
    const selectModelOption = event.target.value
    setStateNumber(selectModelOption)
    dispatch(setStateNumberAC(selectModelOption))
  }

  const newCar = useSelector((state) => state.serviceInfoReducer.newCar)
  const {id} = useSelector((state) => state.userReducer.user)

  const body = {
    ownerId : id,
    modelId : newCar.modelId,
    stateNumber : newCar.stateNumber,
    yearIssue: newCar.yearIssue,
    milegeId : newCar.milegeId,
  }
  console.log(body);

  const saveAuto = () => {
    if (newCar) {
      dispatch(sagaCreateOwnerCarAC(body))
    }
  }
  return (
    <ul className={styles.addcar}>
      <SelectModelButton />
      <SelectYearIssueButton />
	    <SelectMileageButton />
     <li><input
        value={stateNumber}
        onChange={inputChange}
        name="stateNumber"
        type="name"
        id="stateNumber"
        placeholder="номер, например а123ве45"
        required
      /></li>
      <Button clickFunc={saveAuto} name="ДОБАВИТЬ АВТОМОБИЛЬ" />
    </ul>
  )
}

export default AddCar
