import React from "react";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Category from "../../components/LetterDraw/Category";
import styles from "../../styles/MyPage.module.css";

export default function MyPage() {
  const navigate = useNavigate();

  const handleGuide = () => {
    navigate("/guideline");
  };
  const handleAlarm = () => {
    navigate("/alarmSetting");
  };
  const handleSetting = () => {
    navigate("/setting");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10vw",
      }}
    >
      <div className={styles["profile"]}>
        <img src="/images/cj.png" className={styles["profile-img"]} />
        <div>
          <p className={styles["name"]}>이해원님</p>
          <Icon
            icon="mingcute:settings-3-line"
            style={{ fontSize: "1.5rem", color: "#A5A5A5" }}
            onClick={handleSetting}
          />
        </div>
        <Category />
      </div>
      <div
        style={{
          margin: "35vw 0 4vw 0",
          display: "flex",
          flexDirection: "column",
          rowGap: "3vw",
        }}
      >
        <div className={styles["container"]} onClick={handleGuide}>
          <div>
            <Icon icon="akar-icons:light-bulb" />
            <p>가이드라인</p>
          </div>
          <Icon icon="formkit:right" />
        </div>
        <div className={styles["container"]} onClick={handleAlarm}>
          <div>
            <Icon icon="ph:bell-bold" />
            <p>알림설정</p>
          </div>
          <Icon icon="formkit:right" />
        </div>
      </div>
      <button className={styles["logout"]}>로그아웃</button>
      <Nav />
    </div>
  );
}
