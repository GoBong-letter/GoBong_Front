import React from "react";
import Button from "../Button";
import styles from "../../styles/Popup.module.css";

export default function GetCardPopup({ cardImg, onClose }) {
    console.log(cardImg)
    return(
        <div className={styles.popup}>
        {cardImg.length > 0 && (
            <div className={styles.cardContainer}>
            <div>
                <p>고봉이에게<br/><span style={{color:"var(--primary-color)"}}>편지</span>가 도착했어요!</p>
                <p>카드를 눌러 편지 내용을 확인해주세요</p>
            </div>
            <img src={`/images/cards/${cardImg[cardImg.length - 1]}.png`} style={{width:"60%"}}/>
            <Button text="닫기" onClick={onClose}/>
            </div>
        )}
        </div>

    )
}