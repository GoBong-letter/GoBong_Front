import React from 'react';
import styles from '../styles/Button.module.css';
import { useLocation } from 'react-router-dom';

function Button(props) {
  const { onClick, text, disabled } = props;
  const location = useLocation();


  const buttonStyle = {
    backgroundColor: disabled ? '#D0D2DA' : "black", // 버튼이 비활성화 상태인 경우 투명도를 0.5로 설정
    position: location.pathname === '/Join' || location.pathname === '/JoinProfile' || location.pathname === '/JoinAbout' ? 'absolute' : '',
    bottom: location.pathname === '/Join' || location.pathname === '/JoinProfile' || location.pathname === '/JoinAbout' ? '116px' : ''
};
  return (
    <button className={styles['button']} onClick={onClick} style={buttonStyle} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
