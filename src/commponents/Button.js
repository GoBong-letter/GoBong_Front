import React from 'react';
import styles from '../styles/Button.module.css';
import { useLocation } from 'react-router-dom';

function Button(props) {
  const { onClick, text } = props;
  const location = useLocation();

  const btnStyle = {
    position: location.pathname === '/Join' || location.pathname === '/JoinProfile' ? 'absolute' : '',
    bottom: location.pathname === '/Join' || location.pathname === '/JoinProfile' ? '116px' : ''
  };

  return (
    <button className={styles['button']} onClick={onClick} style={btnStyle}>
      {text}
    </button>
  );
}

export default Button;
