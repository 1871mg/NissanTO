import React from 'react';
import styles from './Profile.module.css';
import Button from '../UI/Button/Button';

function Profile() {
  return (
  	<ul className={styles.profile}>
      <li>Nissan Tiida (C13)</li>
      <li>Nissan Tiida (C13) red</li>
	    <li>Nissan Pathfinder (R51) 2,5 турбодизель DPF</li>
      <li>Nissan Qashqai (J11) 1,6 турбодизель 08.11.2021 <Button name='ОТМЕНИТЬ' /></li>
	    <li>Nissan Tiida (C13)</li>
	    <li>Nissan Pathfinder (R51) 2,5 турбодизель DPF</li>
		  <Button name='ДОБАВИТЬ АВТО' />
	  </ul>
  );
}

export default Profile;
