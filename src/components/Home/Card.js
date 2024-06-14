import React from 'react';
import styles from '../../styles/Card.module.css';

const Card = ({ cardCnt }) => {
    return (
        <div className={styles['cardStyle']}>
            <img src='/images/dashed.png' style={{position:"relative"}}/>
            <p style={{position:"absolute"}}>고봉이의 편지까지<br />: {cardCnt}개 남음</p>
        </div>
    );
}

export default Card;
