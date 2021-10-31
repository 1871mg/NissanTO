import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SelectModelButton from '../UI/SelectButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import {sagaGetServiceTypeAC} from '../../redux/actionCreators/asyncAC/asyncServiseInfoAC'

const Main = () => {
  const carModelId = useSelector((state) => state.serviceInfoReducer.mainSelectValue.carModelId)
  const milegeId = useSelector((state) => state.serviceInfoReducer.mainSelectValue.milegeId)
  const dispatch = useDispatch()
  if (carModelId && milegeId) {
    dispatch(sagaGetServiceTypeAC({carModelId, milegeId}))
  }
  

  return (
    <div className={styles.main}>
      <SelectModelButton />
      <SelectMileageButton />
      <Offer />
      <Button />
    </div>
  )
}

export default Main
