import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Num from "../../components/Join/Num";
import Info from "../../components/Join/Info";
import ProfileContainer from "../../components/Profile"; // ProfileContainer 경로 수정
import styles from "../../styles/Join/Join.module.css";
import { JoinContext } from "./JoinProvider";

function JoinProfile() {
  const { UserProfile, setNickname, nickname } = useContext(JoinContext);
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);

  console.log(nickname)

  const buttonStyle = {
    position: "absolute",
    bottom: "116px",
  };

  const handleNext = () => {
    if (selectedProfile !== null) {
      UserProfile(selectedProfile);
      navigate("/joinAbout");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "calc(100% - 58px)",
        }}
      >
        <Num />
        <Info
          text1={`${nickname}님의 프로필을 골라보세요!`}
          text2="커뮤니티에 보여질 프로필이에요!"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "79px auto 0 auto",
            rowGap: "31px",
          }}
        >
          <ProfileContainer onSelect={setSelectedProfile} />
        </div>
      </div>
      <Button
        text="다음"
        style={buttonStyle}
        onClick={handleNext}
        disabled={selectedProfile === null}
      />
    </div>
  );
}

export default JoinProfile;
