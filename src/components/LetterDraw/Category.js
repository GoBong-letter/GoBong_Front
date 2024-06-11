import React from "react";
import styles from "../../styles/LetterDraw.module.css";

export default function Category({ category }) {
  console.log(category);

  return (
    <div className={styles["category"]}>
      {Object.entries(category).map(([key, value]) => (
        value.length > 0 && (
          <div key={key}>
            {Array.isArray(value) ? value.join(", ") : value}
          </div>
        )
      ))}
    </div>
  );
}
