import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "../../styles/LetterDraw.module.css";
import GoHome from "../../components/GoHome";
import Button from "../../components/Button";
import LetterList from "../../components/LetterDraw/LetterList";
import Popup from "../../components/LetterDraw/Popup";
import axios from "axios";

function Draw() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [letterList, setLetterList] = useState([]);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

useEffect(() => {
  let userId = localStorage.getItem('id');
  letterDraw();
  async function letterDraw(){
    try{
      const res =  await axios.get(`${process.env.REACT_APP_HOST}/letters/random/${userId}`)
      if(res.status === 200){
        console.log("편지 가져오기 성공")
        // 가져온 이후에 어떻게 할건지 작성 
        console.log(res.data)
        setLetterList(res.data);
      }
    }catch(error){
        console.error("에러 낫어용,,", error)
    }
  }
}, [])
  
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <GoHome />
      <div className={styles["container"]}>
        <h1 className={styles["text"]}>
          해원님도 누군가 작성한
          <br />
          <span style={{ color: "var(--primary-color)" }}>편지</span>를
          뽑아보세요!
        </h1>
        <div className={styles["draw-container"]}>
          <div style={{ display: "flex" }}>
            <LetterList letterList={letterList}/>
          </div>
          <button className={styles["btn-style"]} onClick={handleOpenPopup}>
            자세히보기
          </button>
        </div>
        <Button text="이 편지로 할래요!" />
      </div>
      {isPopupOpen && <Popup onClose={handleClosePopup} letterList={letterList}/>}
    </div>
  );
}

export default Draw;
