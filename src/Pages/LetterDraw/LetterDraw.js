import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styles from '../../styles/LetterDraw.module.css'
import GoHome from '../../commponents/GoHome';

function LetterDraw() {

    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/draw');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

        return (
       <div style={{height:"100vh"}}>
            <GoHome/>
            <div className={styles['container']}>
                <h1 className={styles['text']}><span style={{color:"var(--primary-color)"}}>익명</span>의 누군가에게<br/>나의 편지가 전송됐어요!</h1>
                <img src='/images/letter1.png' className={styles['letterImg']} alt='letterImg'/>
            </div>
       </div>
    )
}

export default LetterDraw;

