import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Offer.module.css'

function Offer() {
  const state = useSelector((state) => state.serviceInfoReducer)
  const { fullService } = useSelector((state) => state.serviceInfoReducer)
  const { mainRecommendation } = useSelector(
    (state) => state.serviceInfoReducer
  )
  const sumTotal = state.servicesAllPrice

  return (
    <>
      {mainRecommendation ? (
        <ul className={styles.offer}>
          <li className={styles.offermoney}>
            {fullService.title} {sumTotal.totalServiceTypePrice} ₽
          </li>
        </ul>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Offer
