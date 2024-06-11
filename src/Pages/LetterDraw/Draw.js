import React, { useEffect, useState, useContext } from "react";
import { JoinContext } from "../Join/JoinProvider";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "../../styles/LetterDraw.module.css";
import GoHome from "../../components/GoHome";
import Button from "../../components/Button";
import LetterList from "../../components/LetterDraw/LetterList";
import Popup from "../../components/LetterDraw/Popup";
import axios from "axios";

function Draw() {
  const { userId } = useContext(JoinContext)
  const { nickname } = useContext(JoinContext);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [letterList, setLetterList] = useState([]);
  const [category, setCategory] = useState({});
  const [ centerLettter, setCenterLetter ] = useState();
  const navigate = useNavigate();

  const handleOpenPopup = async() => {
    try {
      console.log(centerLettter);
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/category/${centerLettter}`);
      console.log(res);
      if (res.status === 200) {
        setPopupOpen(true);
        console.log("카테고리", res.data);
        setCategory(res.data);
        setPopupOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    let userId = localStorage.getItem('id');
    async function fetchData() {
      try {
        const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/random/${userId}`);
        if (res.status === 200) {
          console.log("편지 가져오기 성공")
          console.log(res.data)
          setLetterList(res.data);
        }
      } catch (error) {
        console.error("에러 낫어용,,", error)
      }
    }
    fetchData();
  }, []);

  const fetchCategory = async (letterId) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/category/${letterId}`);
      console.log(res);
      if (res.status === 200) {
        console.log("카테고리", res.data);
        setCategory(res.data);
        setPopupOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageClick = async (index) => {
    setActiveIndex(index);
    const letterId = letterList[index]?.id;
    console.log(letterId);
    if (letterId) {
      await fetchCategory(letterId);
    }
  };


  const handleDrawLetter = async () => {
    const letterId = centerLettter;
    console.log(letterId)
    try{
      const req = {
        letter_id: letterId,
        user_id: userId
      }
      console.log("레큐",req)
      const res = await axios.post(`${process.env.REACT_APP_HOST}/letters/inbox`, req);
      console.log(res.data)
      navigate('/receiveLetter')
    } catch (error) {
      console.error(error);
    } 
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <GoHome />
      <div className={styles["container"]}>
        <h1 className={styles["text"]}>
          {nickname}님도 누군가 작성한
          <br />
          <span style={{ color: "var(--primary-color)" }}>편지</span>를
          뽑아보세요!
        </h1>
        <div className={styles["draw-container"]}>
          <div style={{ display: "flex" }}>
            <LetterList letterList={letterList} onImageClick={handleImageClick} setCenterLetter={setCenterLetter}/>
          </div>
          <button className={styles["btn-style"]} onClick={handleOpenPopup}>
            자세히보기
          </button>
        </div>
        <Button text="이 편지로 할래요!" onClick={handleDrawLetter}/>
      </div>
      {isPopupOpen && <Popup onClose={handleClosePopup} category={category}/>}
    </div>
  );
}

export default Draw;
