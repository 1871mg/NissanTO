import React from 'react';
import styles from './Button.module.css';

const Button = (props) => (
  <div className={styles.button}>
    {props.name}
  </div>
);

export default Button;
