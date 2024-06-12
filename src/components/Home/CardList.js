import React, { useState, useEffect } from 'react';
import CardImg from './CardImg';
import styles from '../../styles/Card.module.css';
import Card from './Card';

function CardList({ cardImg }) {
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

    const renderedCardImgs = cardImg ? (
        cardImg.map((img, index) => (
            <CardImg
                key={index}
                cardImg={img}
                isFlipped={flippedIndex === index}
                onClick={(event) => {
                    event.stopPropagation();
                    handleCardClick(index);
                }}
            />
        ))
    ) : [];

    return (
        <div className={styles['cardScroll']}>
            <div className={styles['scrollContainer']} style={{ padding: cardImg ? '' : '11px' }}>
                <div style={{ display: 'flex', gap: '22px' }}>
                    {renderedCardImgs}
                </div>
                <Card/>
            </div>
        </div>
    );
}

export default CardList;
