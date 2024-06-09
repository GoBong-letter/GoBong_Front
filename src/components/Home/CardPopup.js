import React from 'react';
import styles from '../../styles/Card.module.css';
import { Icon } from '@iconify/react';

function Popup({ isVisible, onClose }) {
    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div className={`${styles.popup} ${isVisible ? styles.visible : ''}`}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"end", rowGap:"6px"}}>
                <Icon icon="bi:x" onClick={handleCloseClick} />
                <div className={styles.content}>
                    <div>쌀밥 획득!</div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
