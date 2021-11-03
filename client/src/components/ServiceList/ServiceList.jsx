import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './ServiceList.module.css'
import { useHistory } from 'react-router'
import Button from '../UI/Button/Button'
import SelectComponentsButton from '../UI/SelectComponentsButton/SelectComponentsButton'
import SelectServiceButton from '../UI/SelectServiceButton/SelectServiceButton'
import { hideTextMain } from '../../redux/actionCreators/serviceInfoAC'

function ServiceList() {
  const history = useHistory()
  const dispatch = useDispatch()
  dispatch(hideTextMain())
  const serviceType = useSelector(
    (state) => state.serviceInfoReducer.fullService
  )
  const servicesList = useSelector(
    (state) => state.serviceInfoReducer.fullService
  )
  const servicesTotalPrice = useSelector(
    (state) => state.serviceInfoReducer.servicesAllPrice
  )
  const addServices = useSelector(
    (state) => state.serviceInfoReducer.newOrder.serviceId
  )
  const addComponents = useSelector(
    (state) => state.serviceInfoReducer.newOrder.componentId
  )
  const orderAdditionsPrices = useSelector(
    (state) => state.serviceInfoReducer.newOrder
  )
  const { user } = useSelector((state) => state.userReducer)

  const clickButton = () => {
    if (user) {
      history.push('/calendar')
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <ul className={styles.servicelist}>
        <div className={styles.whitetext}>
          <>
            {servicesList.Services.map((service) => (
              <div key={service.id}>
                {service.title}: {service.price} ₽
              </div>
            ))}{' '}
          </>
          <>
            {servicesList.Components.map((component) => (
              <div key={component.id}>
                {component.title} : {component.price} ₽
              </div>
            ))}{' '}
          </>
          <div>
            Cтоимость {serviceType.title}:{' '}
            {servicesTotalPrice.totalServiceTypePrice} ₽
          </div>

          <div>
            <div>&nbsp;</div>
            <div>Дополнительные услуги:</div>
            <>
              {addServices.length
                ? addServices.map(
                    (addService) =>
                      (addService = (
                        <div key={addService.value}>{addService.label}</div>
                      ))
                  )
                : 'Ничего не выбрано'}
            </>
            <div>
              Общая стоимость допуслуг:{' '}
              {orderAdditionsPrices.addServiceTotalPrice} ₽
            </div>
          </div>
          <div>
            <div>&nbsp;</div>
            <div>Дополнительные запчасти:</div>
            <>
              {addComponents.length > 0
                ? addComponents.map(
                    (addComponent) =>
                      (addComponent = (
                        <div key={addComponent.value}>{addComponent.label}</div>
                      ))
                  )
                : 'Ничего не выбрано'}
            </>
            <div>
              Общая стоимость допдеталей:{' '}
              {orderAdditionsPrices.addComponentTotalPrice} ₽
            </div>
            <div>&nbsp;</div>
            <div>Итого: {orderAdditionsPrices.totalPrice} ₽</div>
          </div>
          <div>&nbsp;</div>
          <div>Итого: {orderAdditionsPrices.totalPrice} ₽</div>
        </div>

        <SelectServiceButton />
        <SelectComponentsButton />
      </ul>
      <div className={styles.buttonDateTime}>
        <Button clickFunc={clickButton} name="ВЫБРАТЬ ДАТУ И ВРЕМЯ" />
      </div>
    </>
  )
}

export default ServiceList
