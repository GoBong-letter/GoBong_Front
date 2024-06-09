import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Back.module.css'

function Back(props) {
  const { onClick, text } = props;
  const location = useLocation();


    const handleGoBack = () => {
        window.history.back();
    };

  return (
    <div className={styles['backContainer']}>
        <Icon icon="formkit:left" onClick={handleGoBack}/>
        <p>{text}</p>
    </div>
  );
}

export default Back;