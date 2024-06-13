import React from 'react';
import Example from './Example';
import styles from '../../styles/Chart.module.css';

function Chart({ nickname, chartAverage, chartUserLetter, chartComparison }) {
    const difference = (chartComparison?.letters) - (chartUserLetter?.letters);
    
    let differenceText;
    if (difference === 0) {
        differenceText = '평소 작성한 편지 개수와 같아요';
    } else if (difference > 0) {
        differenceText = `평소보다 ${Math.abs(difference)}개의 편지를 덜 작성했어요`;
    } else {
        differenceText = `평소보다 ${Math.abs(difference)}개의 편지를 더 작성했어요`;
    }

    return (
        <div className={styles['chartContainer']}>
            <h1 className={styles['chartMent']}>
                이번주 {nickname}님이<br />
                <span style={{ color: "var(--primary-color)" }}>행복</span>을 준 사람들이에요! 🍀
            </h1>
            <Example chartAverage={chartAverage} chartUserLetter={chartUserLetter} />
            <div className={styles['moreLetter']}>
                {differenceText}
            </div>
        </div>
    );
}

export default Chart;
