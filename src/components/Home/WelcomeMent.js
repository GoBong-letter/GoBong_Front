import React, { useContext } from "react";
import styles from "../../styles/Home.module.css";

function WelcomeMent({ nickname }) {
  return (
    <div className={styles["mentContainer"]}>
      <h1 className={styles["boldText"]}>
        안녕하세요{" "}
        <span style={{ color: "var(--primary-color)" }}>{nickname}</span>님
        :&#41;
      </h1>
      <p className={styles["subText"]}>오늘도 고봉편지에 찾아와주셨군요!</p>
    </div>
  );
}

export default WelcomeMent;
