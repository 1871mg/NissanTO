import React from 'react';
import {useSelector} from 'react-redux'
import styles from './ServiceList.module.css';
import Button from '../UI/Button/Button';
import SelectComponentsButton from '../UI/SelectComponentsButton/SelectComponentsButton';
import SelectServiceButton from '../UI/SelectServiceButton/SelectServiceButton';

function ServiceList() {
  const serviceType = useSelector((state) => state.serviceInfoReducer.fullService)
  const servicesList = useSelector((state) => state.serviceInfoReducer.fullService)
  const servicesTotalPrice = useSelector((state) => state.serviceInfoReducer.servicesAllPrice)

  return (
    <>
	    <ul className={styles.servicelist}>
	      <div className={styles.whitetext}>
		    <>{servicesList.Services.map((service)=> <div>{service.title}: {service.price} ₽</div>)}</>
	      <div>Общая стоимость {serviceType.title}: {servicesTotalPrice.sumServicesPrice} ₽</div>
	      </div>
		    <SelectServiceButton />
	      <SelectComponentsButton />
	    </ul>
			<div className={styles.buttonDateTime}><Button name='ВЫБРАТЬ ДАТУ И ВРЕМЯ' /></div>
    </>
  );
}

export default ServiceList;
