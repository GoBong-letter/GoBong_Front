import React from "react";
import styles from "../../styles/LetterDraw.module.css";
import Button from "../Button";
import Category from "./Category"

export default function CredentialPropertiesOutput({ onClose }) {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={styles['popup-style']}>
            <div className={styles["category-container"]}>
                <p>나는 이런 사람이에요! 😎</p>
                <Category />
                <Button text="닫기" onClick={handleClose} />
            </div>
        </div>
    );
}
