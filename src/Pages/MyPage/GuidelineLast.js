import React from "react";
import { useNavigate } from 'react-router-dom';
import GuidelineInfo from "../../commponents/MyPage/Guideline";
import Text from "../../commponents/MyPage/Text";
import styles from "../../styles/GuideLine.module.css"
import Button from "../../commponents/Button";
import Step from "../../commponents/MyPage/Step";

export default function GuidelineLast(){

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/mypage');
  };
    return(
        <div className={styles['container']}>
            <Text text1="커뮤니티에서" text2="서로의 " span="고민" text3="을 털어놓아봐요!" subtext="모두에게 위로와 조언을 얻고싶을 때 고민을 올려요"/>
            <img src="/images/guide3.png" className={styles['img']}/>
            <div className={styles['btn-container']}>
            <Button text="닫기" onClick={handleHome}/>
            </div>
            <Step/>
        </div>
    )
}