import React from 'react';
import styles from '../styles/Splash.module.css'

function Logo() {
    return (
        <h1 className={styles['Logo']}>GO<span style={{color: "var(--primary-color)", fontFamily:"var(--logo-font)"}}>BONG</span></h1>
    )
}

export default Logo;