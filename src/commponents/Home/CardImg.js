import React, { useState } from 'react';
import styles from '../../styles/Card.module.css'

function CardImg() {
    return (
            <div className={styles["card"]}>
                <div className={styles["card-front"]}>
                    <img src='/images/bab1.png'/>
                </div>
                <div className={styles["card-back"]}>
                    <div>쌀밥획득!</div>
                </div>
            </div>
    )
}

export default CardImg;

