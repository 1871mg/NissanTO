import React from 'react'
import { useSelector } from 'react-redux'
import SelectButton from '../UI/SelectButton/SelectButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'

const Main = () => {
  const  {allModels}  = useSelector(
    (state) => state.serviceInfoReducer)
  return (
    <div className={styles.main}>
      <SelectButton options={allModels}/>
      <SelectMileageButton />
      <Offer />
      <Button />
    </div>
  )
}

export default Main
