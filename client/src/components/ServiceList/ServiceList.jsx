import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './ServiceList.module.css'
import { useHistory } from 'react-router'
import Button from '../UI/Button/Button'
import SelectComponentsButton from '../UI/SelectComponentsButton/SelectComponentsButton'
import SelectServiceButton from '../UI/SelectServiceButton/SelectServiceButton'

function ServiceList() {
  const history = useHistory()
  const { serviceInfoReducer } = useSelector((state) => state)
  const serviceType = serviceInfoReducer.fullService
  const servicesList = serviceInfoReducer.fullService
  const servicesTotalPrice = serviceInfoReducer.servicesAllPrice
  const addServices = serviceInfoReducer.newOrder.serviceId
  const addComponents = serviceInfoReducer.newOrder.componentId
  const orderAdditionsPrices = serviceInfoReducer.newOrder
  const ownerCar = serviceInfoReducer.newOrder.model
  const { user } = useSelector(state => state.userReducer)

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
            {user ? (
              <div className={styles.whitetext}>{`Авто: ${ownerCar}`}</div>
            ) : (
              <div className={styles.whitetext}>{`Авто: ${serviceInfoReducer.mainSelectValue.carModel
              }`}</div>
            )}
          </>

          <div className={styles.servicesList}>
            <div className={styles.servicesWrapper}>
            <p className={styles.listHeader}>Услуги ТО:</p>
            {servicesList.Services.map((service) => (
              <div key={service.id}>{service.title}</div>
            ))}{' '}
          </div>
          </div>
          <div className={styles.servicesList}>
            <div className={styles.servicesWrapper}>
            <p className={styles.listHeader}>Запчасти ТО:</p>
            {servicesList.Components.map((component) => (
              <div key={component.id}>
                {component.title} : {component.price} ₽
              </div>
            ))}{' '}
            </div>
          </div>
          <div>
            Работа мастера: {servicesTotalPrice.serviceTypeWorckerPrice}
          </div>
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
        </div>
      </ul>

      <div className={styles.buttonDateTime}>
	      <SelectServiceButton />
	      <SelectComponentsButton />
        <Button clickFunc={clickButton} name="ВЫБРАТЬ ДАТУ И ВРЕМЯ" />
      </div>
    </>
  )
}

export default ServiceList
