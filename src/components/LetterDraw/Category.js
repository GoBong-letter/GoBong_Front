import React from "react";
import styles from "../../styles/LetterDraw.module.css";

export default function Category({ category }) {
  console.log(category);
  return (
    <div className={styles["category"]}>
      {Object.entries(category).flatMap(([key, value]) =>
        Array.isArray(value)
          ? value
              .filter((item) => item)
              .map((item, index) => (
                <div key={`${key}-${index}`} className={styles["value-item"]}>
                  {item}
                </div>
              ))
          : value && (
              <div key={key} className={styles["value-item"]}>
                {value}
              </div>
            )
      )}
    </div>
  );
}
