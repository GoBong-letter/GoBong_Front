import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Community/CommunityPopup.module.css";
import { Icon } from "@iconify/react";

function CommunityPopup({ onClose }) {
  const [exiting, setExiting] = useState(false);
  const popupRef = useRef(null);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX - e.touches[0].clientX > 100) {
      setExiting(true);
    }
  };

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => {
        onClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exiting, onClose]);

  return (
    <div
      ref={popupRef}
      className={`${styles.popup} ${exiting ? styles["popup-exit"] : styles["popup-enter"]}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.popupContent}>
        <p>옆으로 스와이프하면<br />다음 고민으로 넘어가요!</p>
        <Icon icon="ph:hand-swipe-left"/>
      </div>
    </div>
  );
}

export default CommunityPopup;
