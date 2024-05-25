import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import Back from '../Back';
import styles from '../../styles/Back.module.css'

function Alarm(props) {
  const { onClick, text } = props;
  const location = useLocation();

  return (
    <div>
        <Back text="알림"/>
        <div className={styles['alramNone']}>아직 받은 알림이 없어요</div>
    </div>
  );
}

export default Alarm;