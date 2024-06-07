// import React, { useRef, useState, useEffect } from 'react';
// import styles from '../../styles/LetterDraw.module.css';

// function LetterList() {
//     const containerRef = useRef(null);
//     const [images, setImages] = useState(['letter1.png', 'letter2.png', 'letter3.png', 'letter4.png', 'letter5.png']);
//     const [activeIndex, setActiveIndex] = useState(2);

//     useEffect(() => {
//         const handleScroll = () => {
//             const container = containerRef.current;
//             const images = container.children;
//             const containerWidth = container.offsetWidth;
//             const scrollLeft = container.scrollLeft;
//             const totalWidth = container.scrollWidth;

//             const imageWidth = images[0].offsetWidth;
//             const gap = (totalWidth - imageWidth * images.length) / (images.length - 1);

//             const middlePosition = scrollLeft + containerWidth / 2;
//             const newIndex = Math.round(middlePosition / (imageWidth + gap));
//             setActiveIndex(newIndex);

//             // Check if near the end of the container to duplicate images
//             if (scrollLeft + containerWidth >= totalWidth - imageWidth) {
//                 duplicateImages();
//             }
//         };

//         const container = containerRef.current;
//         container.addEventListener('scroll', handleScroll);

//         handleScroll();

//         return () => {
//             container.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const duplicateImages = () => {
//         setImages((prevImages) => [...prevImages, ...prevImages]);
//     };

//     useEffect(() => {
//         const container = containerRef.current;
//         const images = container.children;
//         const imageWidth = images[0].offsetWidth;
//         const gap = (container.scrollWidth - imageWidth * images.length) / (images.length - 1);
//         const targetScrollLeft = activeIndex * (imageWidth + gap) - container.offsetWidth / 2 + imageWidth / 2;

//         container.scrollTo({
//             left: targetScrollLeft,
//             behavior: 'smooth',
//         });
//     }, [activeIndex]);

//     return (
//         <div className={styles['letter-container']} ref={containerRef}>
//             {images.map((img, index) => (
//                 <img
//                     key={index}
//                     src={`/images/${img}`}
//                     className={`${styles['letterImg']} ${index === activeIndex ? styles['active'] : ''}`}
//                     alt='letterImg'
//                     style={{ opacity: index === activeIndex ? 1 : 0.2 }}
//                 />
//             ))}
//         </div>
//     );
// }

// export default LetterList;

import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/LetterDraw.module.css';

function LetterList() {
    const containerRef = useRef(null);
    const [images, setImages] = useState(['letter1.png', 'letter2.png', 'letter3.png', 'letter4.png', 'letter5.png']);
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            const images = container.children;
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const totalWidth = container.scrollWidth;

            const imageWidth = images[0].offsetWidth;
            const gap = (totalWidth - imageWidth * images.length) / (images.length - 1);

            const middlePosition = scrollLeft + containerWidth / 2;
            const newIndex = Math.round(middlePosition / (imageWidth + gap));
            setActiveIndex(newIndex);

            if (scrollLeft + containerWidth >= totalWidth - imageWidth && images.length <= 10) {
                duplicateImages();
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const duplicateImages = () => {
        setImages((prevImages) => [...prevImages, ...prevImages]);
    };

    useEffect(() => {
        const container = containerRef.current;
        const images = container.children;
        const imageWidth = images[0].offsetWidth;
        const gap = (container.scrollWidth - imageWidth * images.length) / (images.length - 1);
        const targetScrollLeft = activeIndex * (imageWidth + gap) - container.offsetWidth / 2 + imageWidth / 2;

        container.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth',
        });
    }, [activeIndex]);

    return (
        <div className={styles['letter-container']} ref={containerRef}>
            {images.map((img, index) => (
                <img
                    key={index}
                    src={`/images/${img}`}
                    className={`${styles['letterImg']} ${index === activeIndex ? styles['active'] : ''}`}
                    alt='letterImg'
                    style={{ opacity: index === activeIndex ? 1 : 0.2 }}
                />
            ))}
        </div>
    );
}

export default LetterList;
