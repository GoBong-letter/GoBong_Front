import React, { useEffect, useState, useRef, useContext } from "react";
import styles from '../../styles/LetterDraw.module.css';
import { ReceiveLetterContext } from "../../Pages/LetterDraw/ReceiveLetterProvider";

function LetterList({ letterList, setCenterLetter }) {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2);
    const { saveLetterId } = useContext(ReceiveLetterContext);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const images = container.children;
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const totalWidth = container.scrollWidth;
    
            const imageWidth = images[0]?.offsetWidth || 0;
            const gap = (totalWidth - imageWidth * images.length) / (images.length - 1);
    
            const middlePosition = scrollLeft + containerWidth / 2;
            let newIndex;

            const firstImagePosition = 0;
            if (scrollLeft <= firstImagePosition) {
                newIndex = 0;
            } else {
                const lastImagePosition = totalWidth - containerWidth;
                if (scrollLeft >= lastImagePosition) {
                    newIndex = images.length - 1;
                } else {
                    newIndex = Math.round(middlePosition / (imageWidth + gap));
                }
            }

            const activeImageId = letterList[newIndex]?.id;
            console.log(activeImageId);
            setCenterLetter(activeImageId);
            saveLetterId(activeImageId);
            
            setActiveIndex(newIndex);
        };
    
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
    
        handleScroll();
    
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [letterList]);

    useEffect(() => {
        const container = containerRef.current;
        const images = container.children;
        const imageWidth = images[0]?.offsetWidth || 0;
        const gap = (container.scrollWidth - imageWidth * images.length) / (images.length - 1);
        const targetScrollLeft = activeIndex * (imageWidth + gap) - container.offsetWidth / 2 + imageWidth / 2;

        container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth',
        });
    }, [activeIndex]);

    return (
        <div className={styles['letter-container']} ref={containerRef}>
            {letterList.map((img, index) => (
                <img
                    key={index}
                    src={`/images/${img.envelope}.png`}
                    className={`${styles['letterImg']} ${index === activeIndex ? styles['active'] : ''}`}
                    alt='letterImg'
                    style={{ opacity: index === activeIndex ? 1 : 0.3 }}
                />
            ))}
        </div>
    );
}

export default LetterList;
