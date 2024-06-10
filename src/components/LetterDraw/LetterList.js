import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/LetterDraw.module.css';

function LetterList({ letterList }) {
    const containerRef = useRef(null);

    console.log(letterList);
    const [images, setImages] = useState(letterList);
    const [activeIndex, setActiveIndex] = useState(2);
    // const img = `${images[0].envelope}.png`
    // useEffect(() => {
    //     const handleScroll = () => {
            
    //         const container = containerRef.current;
    //         const images = container.children;
    //         const containerWidth = container.offsetWidth;
    //         const scrollLeft = container.scrollLeft;
    //         const totalWidth = container.scrollWidth;

    //         const imageWidth = img.offsetWidth;
    //         const gap = (totalWidth - imageWidth * images.length) / (images.length - 1);

    //         const middlePosition = scrollLeft + containerWidth / 2;
    //         const newIndex = Math.round(middlePosition / (imageWidth + gap));
    //         setActiveIndex(newIndex);

    //         if (scrollLeft + containerWidth >= totalWidth - imageWidth && images.length <= 10) {
    //             duplicateImages();
    //         }
    //     };

    //     const container = containerRef.current;
    //     container.addEventListener('scroll', handleScroll);

    //     handleScroll();

    //     return () => {
    //         container.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const duplicateImages = () => {
    //     setImages((prevList) => [...prevList, ...letterList]);
    // };

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const images = container.children;
    //     const imageWidth = img.offsetWidth;
    //     const gap = (container.scrollWidth - imageWidth * images.length) / (images.length - 1);
    //     const targetScrollLeft = activeIndex * (imageWidth + gap) - container.offsetWidth / 2 + imageWidth / 2;

    //     container.scrollTo({
    //         left: targetScrollLeft,
    //         behavior: 'smooth',
    //     });
    // }, [activeIndex]);

    return (
        <div className={styles['letter-container']} ref={containerRef}>
            {/* {images.map((img, index) => (
                <img
                    key={index}
                    src={`/images/${images[index].envelope}`}
                    className={`${styles['letterImg']} ${index === activeIndex ? styles['active'] : ''}`}
                    alt='letterImg'
                    style={{ opacity: index === activeIndex ? 1 : 0.2 }}
                />
            ))} */}
        </div>
    );
}

export default LetterList;
