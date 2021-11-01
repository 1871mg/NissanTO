import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import Contacts from '../Contacts/Contacts'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import { sagaGetServiceTypeAC } from '../../redux/actionCreators/asyncAC/asyncServiseInfoAC'
import { hideTextMain } from '../../redux/actionCreators/serviceInfoAC'


const Main = () => {
  const auto = 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J11.png';

  const carModelId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.carModelId
  )
  const milegeId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.milegeId
  )
  const dispatch = useDispatch()
  if (carModelId && milegeId) {
    dispatch(sagaGetServiceTypeAC({carModelId, milegeId}))
  }
  const history = useHistory()

  // useEffect(() => {
  //   if (carModelId && milegeId) {
  //     dispatch(sagaGetServiceTypeAC({ carModelId, milegeId }))
  //   }
  // }, [carModelId, milegeId])

  const hidetextMain = () => {
    dispatch(hideTextMain())
    history.push('/servicelist')
  }

  return (
    <div className={styles.main}>
      <SelectModelButton />
      <SelectMileageButton />
      <Offer />

      <Button hideText={hidetextMain} name='ПОДРОБНО'/>
	    <li><img src={auto} alt="" /></li>
	    <></>
	    <Contacts />

    </div>
  )
}

export default Main
