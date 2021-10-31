import React from 'react'
import { useSelector } from 'react-redux'
import SelectModelButton from '../UI/SelectButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'


const Main = () => {
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
