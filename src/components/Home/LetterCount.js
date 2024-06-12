import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'

function LetterCount({ LetterCount }) {
    return (
        <div className={styles['countBox']}>누적편지 {LetterCount} 💌</div>
    )
}

export default LetterCount;

