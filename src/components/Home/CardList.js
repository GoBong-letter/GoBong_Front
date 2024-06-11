import React, { useState, useEffect } from 'react';
import CardImg from './CardImg';
import Card from './Card';
import styles from '../../styles/Card.module.css'

function CardList({ cardImg }) {
    const [flippedIndex, setFlippedIndex] = useState(null);

    console.log(cardImg)

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

    const cards = [1];


    

    if (!cardImg) {
        return null;
    }

    return cardImg ? (
    <div className={styles['cardScroll']}>
        <div className={styles['scrollContainer']}>
            <div style={{ display: 'flex', gap: '22px' }}>
                {cards.map((_, index) => (
                    <CardImg
                        key={index}
                        cardImg={cardImg}
                        isFlipped={flippedIndex === index}
                        onClick={(event) => {
                            event.stopPropagation();
                            handleCardClick(index);
                        }}
                    />
                ))}
                <div className={styles['cardStyle']}>
                    <img src='/images/dashed.png' style={{position:"relative"}}/>
                    <p style={{position:"absolute"}}>고봉이의 편지까지<br />: 1개 남음</p>
                </div>
            </div>
        </div>
    </div>
) : null;

}

export default CardList;
