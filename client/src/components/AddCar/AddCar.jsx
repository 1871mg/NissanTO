import React, { useState } from 'react'
import styles from './AddCar.module.css'
import Button from '../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import SelectYearIssueButton from '../UI/SelectYearIssueButton/SelectYearIssueButton'
import {
  setStateNumberAC,
  setIsCreateNewCarFalse,
  hideTextMain,
} from '../../redux/actionCreators/serviceInfoAC'
import { sagaCreateOwnerCarAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import { useHistory } from 'react-router-dom'

function AddCar() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [stateNumber, setStateNumber] = useState('')
  const { mainSelectValue } = useSelector((state) => state.serviceInfoReducer)
  const newCar = useSelector((state) => state.serviceInfoReducer.newCar)
  const { id } = useSelector((state) => state.userReducer.user)
  console.log(stateNumber);
  // const inputChange = (event) => {
  //   const selectModelOption = event.target.value
  //   setStateNumber(selectModelOption)

  // }

  const body = {
    ownerId: id,
    modelId: newCar.modelId,
    stateNumber,
    yearIssue: newCar.yearIssue,
    milegeId: newCar.milegeId,
  }

  const saveAuto = () => {
    if (!mainSelectValue.carModelId) {
      alert('Не указана модель автомобиля')
    } else if (!newCar.yearIssue) {
      alert('Не указан год выпуска')
    } else if (!mainSelectValue.milegeId) {
      alert('Не указан пробег')
    } else if (!stateNumber) {
      alert('Не указан гос.номер')
    } else {
      if (newCar) {
        // dispatch(setStateNumberAC(stateNumber))
        dispatch(setIsCreateNewCarFalse(false))
        dispatch(sagaCreateOwnerCarAC(body))
        // dispatch(hideTextMain())
      }
    }
  }

  if (newCar.isCreate) {
    history.push('/profile')
  }

  return (
    <ul className={styles.addcar}>
      <SelectModelButton />
      <SelectYearIssueButton />
      <SelectMileageButton />
      <li>
        <input
          value={stateNumber}
          onChange={(e) => setStateNumber(e.target.value)}
          name="stateNumber"
          type="name"
          id="stateNumber"
          placeholder="номер, например а123ве45"
        />
      </li>
      <Button clickFunc={()=> saveAuto()} name="ДОБАВИТЬ АВТОМОБИЛЬ" />
    </ul>
  )
}

export default AddCar
