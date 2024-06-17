import React, { useContext, useEffect, useState } from "react";
import { JoinContext } from "../join/JoinProvider";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/LetterDraw.module.css";
import GoHome from "../../components/GoHome";
import axios from "axios";

function LetterDraw() {
  const { userId, envelope, SetEnvelope, letterCover } =
    useContext(JoinContext); // 수정
  const navigate = useNavigate();
  const [latestLetter, setLatestLetter] = useState(null);

  let list = [
    { img: "red", color: "#FFA5A5" },
    { img: "yellow", color: "#FFE9B0" },
    { img: "green", color: "#C5F2B0" },
    { img: "blue", color: "#C2E5FF" },
    { img: "purple", color: "#D9C2FF" },
  ];

  useEffect(() => {
    const req = {
      user_id: userId,
      envelope: list[letterCover].img,
    };
    console.log(req.envelope);
    SetEnvelope(req.envelope);
  }, [letterCover, SetEnvelope, userId]);

  console.log(`/images/${envelope}.png`);
  console.log(envelope);

  useEffect(() => {
    setLatestLetter(true);
    const timer = setTimeout(() => {
      navigate("/draw");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div style={{ height: "100vh" }}>
      <GoHome />
      <div className={styles["container"]}>
        <h1 className={styles["text"]}>
          <span style={{ color: "var(--primary-color)" }}>익명</span>의
          누군가에게
          <br />
          나의 편지가 전송됐어요!
        </h1>
        {latestLetter && (
          <img
            src={`/images/${envelope}.png`}
            className={styles["letterImg"]}
            alt="letterImg"
          />
        )}
      </div>
    </div>
  );
}

export default LetterDraw;
