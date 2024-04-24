import React from 'react';
import styles from '../../styles/Join/Input.module.css'

function Info(props) {
  const { text1, text2, type, ...rest } = props;

  

  return (
    <div style={{display:"flex", flexDirection:"column", rowGap:"9px"}}>
      <span  className={styles['textStyle']}>{text1}</span>
      <input className={styles['inputStyle']} placeholder={text2} type={type}/>
    </div>
  );
}

export default Info;
