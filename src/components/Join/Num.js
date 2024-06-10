import React from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../../styles/Join/Num.module.css';

function Num() {
    const location = useLocation();

    const determineIconColor = (iconIndex) => {
        // 현재 페이지의 경로에 따라 아이콘 색상 결정
        switch (location.pathname) {
            case '/join':
                return iconIndex === 0 ? 'var(--primary-color)' : '#D7D8DB';
            case '/joinProfile':
                return iconIndex === 1 ? 'var(--primary-color)' : '#D7D8DB';
            case '/joinAbout':
                return iconIndex === 2 ? 'var(--primary-color)' : '#D7D8DB';
            default:
                return '#D7D8DB';
        }
    };

    return (
        <div style={{ display: "flex", margin: "92px 0 23px 0" }}>
            <div className={styles['numBox']}>
                <p className={styles['numStyle']}>1</p>
                <Icon icon="bxs:bowl-rice" className={styles['iconStyle']} style={{ color: determineIconColor(0) }} />
            </div>
            <div className={styles['numBox']}>
                <p className={styles['numStyle']}>2</p>
                <Icon icon="bxs:bowl-rice" className={styles['iconStyle']} style={{ color: determineIconColor(1) }} />
            </div>
            <div className={styles['numBox']}>
                <p className={styles['numStyle']}>3</p>
                <Icon icon="bxs:bowl-rice" className={styles['iconStyle']} style={{ color: determineIconColor(2) }} />
            </div>
        </div>
    );
}

export default Num;
