import React from "react";
import styles from "../../styles/writeletter/TypeButton.module.css";

export function TypeButton({ word, className, onClick }) {
  return (
    <div onClick={onClick} className={styles[className]}>
      {word}
    </div>
  );
}
