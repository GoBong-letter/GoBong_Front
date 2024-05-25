import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../styles/Nav.module.css'

function Nav() {
    const navigate = useNavigate();
    const IconClick = (path) => {
      navigate(path);
    };

    return (
        <div className={styles['navbar']}>
            <Icon icon="fa-solid:pen" className={styles['navIcon']} onClick={() => IconClick('/home')}/>
            <Icon icon="solar:letter-bold"  className={styles['navIcon']} onClick={() => IconClick('/home')}/>
            <Icon icon="lets-icons:chat-fill"  className={styles['navIcon']} onClick={() => IconClick('/home')}/>
            <Icon icon="fluent:person-16-filled"  className={styles['navIcon']} onClick={() => IconClick('/home')}/>
        </div>
    )
}

export default Nav;

