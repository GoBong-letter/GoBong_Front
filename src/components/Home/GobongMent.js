import React, { useState } from 'react';
import styles from '../../styles/GobongMent.module.css'

function GobongMent() {
    return (
        <div className={styles['speechContainer']}>
            <img src='/images/gobong.png' className={styles['ssal']}/>
            <div className={styles['speech']}>
                <img src='/images/speech.png'style={{width:"100%", position:"relative"}}/>
                <div className={styles['ment']}>웃으면 행복이 와요~ 야호!!</div>
            </div>
        </div>
    )
}

export default GobongMent;

