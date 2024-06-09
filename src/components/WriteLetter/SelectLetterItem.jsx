import React from "react";
import styles from "../../styles/WriteLetter/SelectLetterItem.module.css";

export function SelectLetterItem({ list, letterCover, selectLetterCover }) {
  return (
    <div className={styles["letterCover"]}>
      {list.map((_, index) => (
        <div
          className={
            letterCover === index
              ? styles["ClickedLetter"]
              : styles["selectLetter"]
          }
          key={index}
          style={{ background: list[index].color }}
          onClick={() => selectLetterCover(index)}
        />
      ))}
    </div>
  );
}
