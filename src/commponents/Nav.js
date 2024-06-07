import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../styles/Nav.module.css';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const IconClick = (path) => {
    navigate(path);
  };

  const isCommunityPath = location.pathname === '/community';

  return (
    <div className={`${styles.navbar} ${isCommunityPath ? styles.community : ''}`}>
      <Icon icon="fa-solid:pen" className={styles.navIcon} onClick={() => IconClick('/home')} />
      <Icon icon="solar:letter-bold" className={styles.navIcon} onClick={() => IconClick('/home')} />
      <Icon icon="lets-icons:chat-fill" className={styles.navIcon} onClick={() => IconClick('/community')} />
      <Icon icon="fluent:person-16-filled" className={styles.navIcon} onClick={() => IconClick('/home')} />
    </div>
  );
}

export default Nav;
