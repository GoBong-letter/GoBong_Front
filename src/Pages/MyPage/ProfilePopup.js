import React, { useContext, useState } from "react";
import { JoinContext } from "../join/JoinProvider";
import Profile from "../../components/mypage/Profile";
import Button from "../../components/Button";
import styles from "../../styles/MyPage.module.css";

export default function ProfilePopup({ onClose }) {
  const { setImage } = useContext(JoinContext);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleComplete = () => {
    onClose();
    if (selectedProfile) {
      setImage(selectedProfile.alt);
      console.log("Profile selected:", selectedProfile.alt);
    }
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className={styles["profile-container"]}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.3rem",
            margin: "3vw 0 7vw 8vw",
          }}
        >
          <span style={{ color: "var(--primary-color)" }}>프로필 이미지</span>를
          선택하세요!
        </p>
        <Profile onClick={handleProfileClick} />
        <Button text="완료" onClick={handleComplete} />
      </div>
    </div>
  );
}
