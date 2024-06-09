import React from "react";
import GoHome from "../../components/GoHome";
import styles from "../../styles/LetterDraw.module.css";
import Button from "../../components/Button";

export default function ReceiveLetter() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <GoHome />
        <div className={styles["container"]}>
          <h1 className={styles["text"]}>
            띵동! <span style={{ color: "var(--primary-color)" }}>편지</span>가
            도착했어요 :)
          </h1>
          <img
            src="/images/letter1.png"
            className={styles["letterImg"]}
            alt="letterImg"
          />
          <Button text="편지 보관함으로 이동하기" />
        </div>
      </div>
    </>
  );
}
