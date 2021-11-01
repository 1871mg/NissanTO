import React from 'react';
import styles from './ButtonSubmit.module.css';

const Button = ({submitFunc, name}) => (
  <button onSubmit={submitFunc} className={styles.button}>
    {name}
  </button>
);

export default Button;
