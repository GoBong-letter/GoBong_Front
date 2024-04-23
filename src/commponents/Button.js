// Button.js
import React from 'react';
import styles from '../styles/Button.module.css';

// 재사용 가능한 버튼 컴포넌트
function Button(props) {
  const { onClick, text } = props;
  
  return (
    <button className={styles['button']} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;