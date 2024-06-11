import React, {useState} from "react";
import styles from "../../styles/LetterDraw.module.css";
import Button from "../Button";
import Category from "./Category";

export default function CredentialPropertiesOutput({ onClose, category }) {

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

  console.log("팝업 카테고리",category)

    return (
        <div className={styles['popup-style']}>
            <div className={styles["category-container"]}>
                <p>나는 이런 사람이에요! 😎</p>
                <Category category={category} />
                <Button text="닫기" onClick={handleClose} />
            </div>
        </div>
    );
}
