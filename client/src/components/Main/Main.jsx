import React from 'react'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import Contacts from '../Contacts/Contacts'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import logo from "../Navbar/img/logo.svg";
import {Link} from "react-router-dom";

const Main = () => {
	const auto = 'https://iframe.nms-dws.ru/upload/dealer/maintenance/images/J11.png';
  return (
    <div className={styles.main}>
      <SelectModelButton />
      <SelectMileageButton />
      <Offer />
      <Button name='ПОДРОБНО'/>
	    <li><img src={auto} alt="" /></li>
	    <></>
	    <Contacts />
    </div>
  )
}

export default Main
