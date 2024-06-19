import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../components/MyPage/Text";
import styles from "../../styles/GuideLine.module.css";
import Button from "../../components/Button";
import Step from "../../components/MyPage/Step";

export default function GuidelineTwo() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/guidelineThree");
  };

  const handleHome = () => {
    navigate("/mypage");
  };

  return (
    <div className={styles["container"]}>
      <Text
        text1="편지를 많이 쓰면"
        span="고봉이"
        text3="에게 편지가 와요!"
        subtext="편지 카드가 점점 더 업그레이드 되는 재미가 있어요 :)"
      />
      <img
        src="/images/guide.png"
        className={styles["img"]}
        style={{ marginRight: "1.5vw" }}
        alt=""
      />
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
