import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css'

function LetterCount({ LetterCount }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
        if (LetterCount > 0) {
            const interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount < LetterCount) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, 10);

            return () => clearInterval(interval);
        }
    }, [LetterCount]);

    return (
        <div className={styles['countBox']}>누적편지 {count} 💌</div>
    )
}

export default LetterCount;
