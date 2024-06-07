import React, { useState } from 'react';
import styles from '../../styles/Card.module.css'
import CardImg from './CardImg';
import CardList from './CardList';

function Card() {
    return (
        <div className={styles['cardScroll']}>
            <div className={styles['scrollContainer']}>
                <div className={styles['cardStyle']}>
                    <img src='/images/dashed.png' style={{position:"relative"}}/>
                    <p style={{position:"absolute"}}>고봉이의 편지까지<br />: 1개 남음</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

