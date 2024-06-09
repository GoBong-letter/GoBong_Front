import React from "react";
import Back from "../../components/Back";
import styles from "../../styles/MyPage.module.css";

export default function AlarmSetting() {
  return (
    <div>
      <Back text="알림설정" />
      <div
        style={{
          display: "flex",
          width: "80vw",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          marginTop: "6vw",
        }}
      >
        <p>알림받기</p>
        <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
      </div>
    </div>
  );
}
