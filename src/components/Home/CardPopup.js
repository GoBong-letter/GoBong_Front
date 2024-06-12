import React from 'react';
import styles from '../../styles/Card.module.css';
import { Icon } from '@iconify/react';

function Popup({ isVisible, onClose, nickname, letter }) {
    const handleCloseClick = () => {
        onClose();
    };
    console.log(letter)

    return (
        <div className={`${styles.popup} ${isVisible ? styles.visible : ''}`}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"end", rowGap:"6px"}}>
                <Icon icon="bi:x" onClick={handleCloseClick} />
                <div className={styles.content} style={{ backgroundColor: letter.color }}>
                    <div className={styles.letterStyle}>
                        <h2>{letter.for}</h2>
                        <p>{letter.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
