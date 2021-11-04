import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Button.module.css';

const Button = ({clickFunc, name }) => (
  <button onClick={clickFunc} className={styles.button}>
    {name}
  </button>
);

export default Button;
