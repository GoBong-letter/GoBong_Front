import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import styles from "../../styles/Join/Join.module.css";
import Num from "../../components/Join/Num";
import Info from "../../components/Join/Info";
import Profile from "../../components/Profile";

function JoinProfile() {
  const navigate = useNavigate();

  const buttonStyle = {
    position: "absolute",
    bottom: "116px",
  };

  const handleNext = () => {
    navigate("/JoinAbout");
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
          text1="해원님의 프로필을 골라보세요!"
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
          <div style={{ display: "flex", columnGap: "23px" }}>
            <Profile />
          </div>
        </div>
      </div>
      <Button text="다음" style={buttonStyle} onClick={handleNext} />
    </div>
  );
}

export default JoinProfile;
