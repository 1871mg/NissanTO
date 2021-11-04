import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import Contacts from '../Contacts/Contacts'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import SelectModelButtonAuthOwner from '../UI/SelectModelButtonAuthOwner/SelectModelButtonAuthOwner'
import { sagaGetServiceTypeAC } from '../../redux/actionCreators/asyncAC/asyncServiseInfoAC'
import { hideTextMain } from '../../redux/actionCreators/serviceInfoAC'
import auto from './img/default.png'

const Main = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { user } = useSelector((state) => state.userReducer)
  const carModelId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.carModelId
  )
  const milegeId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.milegeId
  )
  const carImg = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.imgCar
  )

  if (carModelId && milegeId) {
    dispatch(sagaGetServiceTypeAC({ carModelId, milegeId }))
  }
  const { loginEntrance } = useSelector((state) => state.userReducer.user)
  const { registerEntrance } = useSelector((state) => state.userReducer.user)
  const { ownerCars } = useSelector((state) => state.userReducer.user)
  const hidetextMain = () => {
    if (!carModelId) {
      alert('Вы не выбрали автомобиль')
    } else if (!milegeId) {
      alert('Вы не выбрали пробег')
    } else {
      dispatch(hideTextMain())
      if (!user) {
        history.push('/login')
      }
      if (user) {
        history.push('/servicelist')
      }
    }
  }

  return (
    <>
      {loginEntrance || registerEntrance ? (
        ownerCars ? (
          !ownerCars.length ? (
            <Redirect to="/car" />
          ) : (
            <div className={styles.main}>
              <SelectModelButtonAuthOwner />
              <SelectMileageButton />
              <Offer />

              <Button clickFunc={hidetextMain} name="ПОДРОБНЕЕ" />
              <>
                {carImg ? (
                  <>
                    <li>
                      <img src={carImg} alt="" />
                    </li>
                    <></>
                  </>
                ) : (
                  <>
                    <li>
                      <img src={auto} alt="" />
                    </li>
                    <></>
                  </>
                )}
              </>
              <Contacts />
            </div>
          )
        ) : (
          <div className={styles.main}>
            <SelectModelButton />
            <SelectMileageButton />
            <Offer />

            <Button clickFunc={hidetextMain} name="ПОДРОБНЕЕ" />
            <>
              {carImg ? (
                <>
                  <li>
                    <img src={carImg} alt="" />
                  </li>
                  <></>
                </>
              ) : (
                <>
                  <li>
                    <img src={auto} alt="" />
                  </li>
                  <></>
                </>
              )}
            </>
            <Contacts />
          </div>
        )
      ) : (
        <div className={styles.main}>
          <SelectModelButton />
          <SelectMileageButton />
          <Offer />

          <Button clickFunc={hidetextMain} name="ПОДРОБНЕЕ" />
          <>
            {carImg ? (
              <>
                <li>
                  <img src={carImg} alt="" />
                </li>
                <></>
              </>
            ) : (
              <>
                <li>
                  <img src={auto} alt="" />
                </li>
                <></>
              </>
            )}
          </>
          <Contacts />
        </div>
      )}
    </>
  )
}

export default Main
