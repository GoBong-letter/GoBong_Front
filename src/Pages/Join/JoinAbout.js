import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../commponents/Button';
import styles from '../../styles/Join/Join.module.css'
import Num from '../../commponents/Join/Num'
import Info from '../../commponents/Join/Info';

function JoinAbout() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Home');
  };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "calc(100% - 58px)" }}>
            <Num />
            <Info text1="해원님을 나타낼"/><Info text1 = "카테고리를 선택해주세요!" text2="나의 편지를 보낼 때 나를 알려줄거예요!" />
          </div>
      
          <Button text="회원가입 완료" onClick={handleNext}/>
        </div>
      );
      
}

export default JoinAbout;