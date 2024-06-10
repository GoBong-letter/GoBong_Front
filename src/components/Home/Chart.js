import React, { useState } from 'react';
import Example from './Example';
import styles from '../../styles/Chart.module.css';

function Chart({nickname}) {
    return (
        <div className={styles['chartContainer']}>
            <h1 className={styles['chartMent']}>이번주 {nickname}님이<br/><span style={{color:"var(--primary-color)"}}>행복</span>을 준 사람들이에요! 🍀</h1>
            <Example />
            <div className={styles['moreLetter']}>평소보다 2개의 편지를 더 작성했어요</div>
        </div>
    )
}

export default Chart;
