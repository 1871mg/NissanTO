import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import styles from './ServiceList.module.css'
import { useHistory } from 'react-router'
import Button from '../UI/Button/Button'
import SelectComponentsButton from '../UI/SelectComponentsButton/SelectComponentsButton'
import SelectServiceButton from '../UI/SelectServiceButton/SelectServiceButton'

function ServiceList() {
  const history = useHistory()
  const serviceType = useSelector(
    (state) => state.serviceInfoReducer.fullService
  )
  const servicesList = useSelector(
    (state) => state.serviceInfoReducer.fullService
  )
  const servicesTotalPrice = useSelector(
    (state) => state.serviceInfoReducer.servicesAllPrice
  )
  const addServices = useSelector((state) => state.serviceInfoReducer.newOrder.serviceId)
  
  const addComponents = useSelector((state) => state.serviceInfoReducer.newOrder.componentId)

  const orderAdditionsPrices = useSelector((state) => state.serviceInfoReducer.newOrder)
  
 
  return (
    <>
      <ul className={styles.servicelist}>
        <div className={styles.whitetext}>
          <>
            {servicesList.Services.map((service) => (
              <div key={service.id}>
                {service.title}: {service.price} ₽
              </div>
            ))}
          </>
          <div>
            Cтоимость {serviceType.title}: {servicesTotalPrice.sumServicesPrice}{' '}
            ₽
          </div>
        </div>
        <div>
          <div>Дополнительные услуги:</div>
          <>{addServices.length > 0 ? addServices.map((addService) => addService = <div key={addService.value}>{addService.label}</div>) : 'Ничего не выбрано'}</>
          <div>Общая стоимость дополнительный услуг: {orderAdditionsPrices.addServiceTotalPrice} ₽</div>
        </div>
        <div>
          <div>Дополнительные детали:</div>
          <>{addComponents.length > 0 ? addComponents.map((addComponent) => addComponent = <div key={addComponent.value}>{addComponent.label}</div>) : 'Ничего не выбрано'}</>
          <div>Общая стоимость дополнительныx деталей: {orderAdditionsPrices.addComponentTotalPrice} ₽</div>
        </div>
        <SelectServiceButton />
        <SelectComponentsButton />
      </ul>
      <div className={styles.buttonDateTime}>
        <Button clickFunc={() => history.push('/calendar')} name="ВЫБРАТЬ ДАТУ И ВРЕМЯ" />
      </div>
    </>
  )
}

export default ServiceList
