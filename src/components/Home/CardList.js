import React, { useState, useEffect } from 'react';
import CardImg from './CardImg';
import styles from '../../styles/Card.module.css';
import Card from './Card';

function CardList({ cardImg, nickname }) {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.card')) {
            setFlippedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const containerStyle = cardImg.length === 0 ? { padding: '11px' } : {};

    return (
        <div className={styles['cardScroll']}>
            <div className={styles['scrollContainer']} style={containerStyle}>
                <div style={{ display: 'flex', gap: '22px' }}>
                    {cardImg.map((img, index) => (
                        <CardImg
                            nickname={nickname}
                            key={index}
                            cardImg={img}
                            isFlipped={flippedIndex === index}
                            onClick={(event) => {
                                event.stopPropagation();
                                handleCardClick(index);
                            }}
                        />
                    ))}
                </div>
                <Card/>
            </div>
        </div>
    );
}

export default CardList;
