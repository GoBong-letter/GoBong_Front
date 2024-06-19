import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../components/MyPage/Text";
import styles from "../../styles/GuideLine.module.css";
import Button from "../../components/Button";
import Step from "../../components/MyPage/Step";

export default function GuidelineThree() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/guidelineLast");
  };

  const handleHome = () => {
    navigate("/mypage");
  };
  return (
    <div className={styles["container"]}>
      <Text
        text1="내가 받은 편지에"
        span="답장"
        text3="을 보낼 수 있어요!"
        subtext="답장으로 편지를 읽고 난 나의 마음을 전달해봐요"
      />
      <img src="/images/guide2.png" className={styles["img"]} alt="" />
      <div className={styles["btn-container"]}>
        <Button text="다음" onClick={handleNext} />
        <button
          style={{
            height: "50px",
            width: "100%",
            backgroundColor: "transparent",
            color:"black"
          }}
          onClick={handleHome}
        >
          닫기
        </button>
      </div>
      <Step />
    </div>
  );
}
