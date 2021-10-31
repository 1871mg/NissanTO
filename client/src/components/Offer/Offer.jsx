import React from 'react'
import { useSelector } from 'react-redux'

function Offer({ text }) {
  const state = useSelector((state) => state.serviceInfoReducer)
  const { fullService } = useSelector((state) => state.serviceInfoReducer)
  const {mainRecommendation} = useSelector((state) => state.serviceInfoReducer)
  const sumTotal = state.servicesAllPrice

  return (
    <>
      {mainRecommendation ? (
        <div>
          {fullService.title} {sumTotal.sumTotalServicePrice} ₽
        </div>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Offer
