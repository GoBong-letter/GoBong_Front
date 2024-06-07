import React from "react";
import { useNavigate } from 'react-router-dom';
import Text from "../../commponents/MyPage/Text";
import styles from "../../styles/GuideLine.module.css"
import Button from "../../commponents/Button";
import Step from "../../commponents/MyPage/Step";

export default function Guideline(){

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/guidelineTwo');
  };

  const handleHome = () => {
    navigate('/mypage');
  };
    return(
        <div className={styles['container']}>
            <Text text1="편지를 쓰고" span="익명의 편지" text3="를 받아봐요!" subtext="랜덤으로 주어지는 5가지 편지중 선택"/>
            <img src="/images/guide1.png" className={styles['img']}/>
            <div className={styles['btn-container']}>
            <Button text="다음" onClick={handleNext}/>
                <button style={{height:"50px", width:"100%", backgroundColor:"transparent"}} onClick={handleHome}>닫기</button>
            </div>
            <Step/>
        </div>
    )
}