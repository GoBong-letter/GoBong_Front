import React, { useState } from 'react';
import styles from '../../styles/Card.module.css';
import Popup from './CardPopup';

function CardImg() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
        setPopupVisible(!isPopupVisible);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setIsFlipped(false);
    };

    return (
        <>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
                <div className={styles["card-inner"]}>
                    <img src='/images/bab1.png' alt='Card Front' className={styles["card-front"]} />
                    <div className={styles["card-back"]}>
                        <div>쌀밥획득!</div>
                    </div>
                </div>

            </div>
            {isPopupVisible && <Popup isVisible={true} onClose={handleClosePopup} />}
            </>
    );
}

export default CardImg;
