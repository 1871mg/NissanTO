import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Button.module.css';

const Button = ({hideText, name}) => (
  <button onClick={hideText} className={styles.button}>
    {name}
  </button>
);

export default Button;
