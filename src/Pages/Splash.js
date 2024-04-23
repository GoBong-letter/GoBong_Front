import React from 'react';
import { Icon } from '@iconify/react';
import styles from '../styles/Splash.module.css'
import Style from '../styles/Style.module.css'
import Logo from '../commponents/Logo'

function Splash() {
    return (
        <div className={styles['splash']}>
            <Icon icon="bxs:bowl-rice" className={styles['icon']}/>
            <Logo/>
        </div>
    )
}

export default Splash;