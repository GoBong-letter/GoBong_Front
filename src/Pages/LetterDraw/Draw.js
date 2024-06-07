import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../../styles/LetterDraw.module.css'
import GoHome from '../../commponents/GoHome';
import Button from '../../commponents/Button';

function Draw() {
    return (
       <div style={{height:"100%"}}>
            <GoHome/>
            <div className={styles['container']}>
                <h1 className={styles['text']}>해원님도 누군가 작성한<br/><span style={{color:"var(--primary-color)"}}>편지</span>를 뽑아보세요!</h1>
                <div className={styles['draw-container']}>
                    <img src='/images/letter1.png' className={styles['letterImg']} alt='letterImg'/>
                    <button className={styles['btn-style']}>자세히보기</button>
                </div>
                <Button text="이 편지로 할래요!"/>
            </div>
       </div>
    )
}

export default Draw;