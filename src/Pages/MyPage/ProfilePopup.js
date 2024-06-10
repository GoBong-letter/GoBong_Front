import React from "react";
import Profile from "../../components/MyPage/Profile";
import Button from "../../components/Button";
import styles from "../../styles/MyPage.module.css";

export default function ProfilePopup({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        backgroundColor: "rgb(0, 0, 0, 0.5)",
      }}
    >
      <div className={styles["profile-container"]}>
        <p
          style={{ fontWeight: "bold", fontSize: "1.3rem", margin:"3vw 0 7vw 8vw" }}
        >
          <span style={{ color: "var(--primary-color)" }}>프로필 이미지</span>를
          선택하세요!
        </p>
        <Profile />
        <Button text="완료" onClick={onClose} />
      </div>
    </div>
  );
}
