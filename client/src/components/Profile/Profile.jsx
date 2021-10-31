import React from 'react';
import styles from './Profile.module.css';
import Button from '../UI/Button/Button';

function Profile() {
  return (
    <ul className={styles.profile}>
      <li>Имя Фамилия</li>
      <li>Tiida</li>
      <li>Note ЗАПИСЬ</li>
      <Button />
    </ul>
  );
}

export default Profile;
