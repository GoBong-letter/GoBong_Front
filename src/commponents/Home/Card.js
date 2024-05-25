import React, { useState } from 'react';
import styles from '../../styles/Card.module.css'
import CardImg from './CardImg';

function Card() {
    return (
        <div className={styles['cardScroll']}>
            <div className={styles['scrollContainer']}>
            <CardImg/>
            <CardImg/>
            <CardImg/>
                <div className={styles['cardStyle']}>
                    <img src='/images/dashed.png' style={{position:"relative"}}/>
                    <p style={{position:"absolute"}}>고봉이의 편지까지<br />: 1개 남음</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

