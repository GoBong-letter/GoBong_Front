import React, { useState } from 'react';
import styles from '../../styles/Card.module.css';
import Popup from './CardPopup';

function CardImg({ cardImg }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const images = [
        { src: '/images/cards/rice.png', alt: 'rice', text: '쌀밥' },
        { src: '/images/cards/bean.png', alt: 'bean', text: '콩밥' },
        { src: '/images/cards/egg_soy.png', alt: 'egg_soy', text: '간장계란밥' },
        { src: '/images/cards/emelet.png', alt: 'emelet', text: '오므라이스' },
        { src: '/images/cards/ham_mayo.png', alt: 'ham_mayo', text: '햄마요덮밥' },
        { src: '/images/cards/salmon.png', alt: 'salmon', text: '연어덮밥' },
        { src: '/images/cards/bibim.png', alt: 'bibim', text: '비빔밥' }
    ];

    const filteredImages = images.map(image => {
        if (cardImg.includes(image.alt)) {
            return image;
        }
        return null; // 일치하지 않는 이미지는 null로 처리
    }).filter(image => image !== null); // null이 아닌 이미지만 필터링

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
            {filteredImages.map((image, index) => (
                <div key={index} className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
                    <div className={styles["card-inner"]}>
                        <img src={image.src} alt={image.alt} className={styles["card-front"]} />
                        <div className={styles["card-back"]}>
                            <div>{image.text} 획득!</div>
                        </div>
                    </div>
                </div>
            ))}
            {isPopupVisible && <Popup isVisible={true} onClose={handleClosePopup} />}
        </>
    );
}

export default CardImg;
