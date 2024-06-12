import React, { useContext, useEffect, useState } from "react";
import { JoinContext } from "../pages/Join/JoinProvider";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import Header from "../components/Home/Header";
import WelcomeMent from "../components/Home/WelcomeMent";
import LetterCount from "../components/Home/LetterCount";
import Nav from "../components/Nav";
import CardList from "../components/Home/CardList";
import GobongMent from "../components/Home/GobongMent";
import Chart from "../components/Home/Chart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GetCardPopup from "../components/Home/GetCardPopup";

function Home() {
  const { userId, nickname, GetUserInfo } = useContext(JoinContext);
  const [count, getCount] = useState();
  const navigate = useNavigate();

  const [chartAverage, setChartAverage] = useState(null);
  const [chartUserLetter, setChartUserLetter] = useState(null);
  const [cardImg, setCardImg] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]); // 표시된 이미지를 추적하는 상태 추가
  const [showPopup, setShowPopup] = useState(false);

  const UserNickName = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}`);
      if (res.status === 200) {
        const { nickname, image, category } = res.data;
        GetUserInfo(nickname, image, category);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ChartAverage = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/average-per-week/all`);
      if (res.status === 200) {
        setChartAverage(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ChartUserLetter = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/this-week/${userId}`);
      if (res.status === 200) {
        setChartUserLetter(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetCard = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/users/card/${userId}`);
      if (res.status === 200) {
        console.log(res.data);
        setCardImg(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetLetterCount = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/count/all`);
      if (res.status === 200) {
        getCount(res.data.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId) {
      UserNickName();
      ChartAverage();
      ChartUserLetter();
      GetCard();
      GetLetterCount();
    }
  }, [userId]);

  useEffect(() => {
    if (cardImg.length > 0) {
      const newImages = cardImg.filter(img => !displayedImages.includes(img));
      if (newImages.length > 0 && !localStorage.getItem("popupShown")) {
        setShowPopup(true);
        setDisplayedImages([...displayedImages, ...newImages]);
        localStorage.setItem("popupShown", "true");
      }
    }
  }, [cardImg, displayedImages]);

  return (
    <div
      className={styles["container"]}
      style={{ width: "100vw", overflowX: "hidden" }}
    >
      <Header />
      <div className={styles["cardContainer"]}>
        <LetterCount LetterCount={count} />
        <WelcomeMent nickname={nickname} />
        <CardList cardImg={cardImg} nickname={nickname} />
      </div>
      <div style={{width: "calc(100% - 58px)"}}>
        <Button
          icon="lucide:pen-line"
          text="편지쓰러가기"
          onClick={() => navigate("/writeletterbasic")}
        />
      </div>
      <GobongMent />
      <Chart nickname={nickname} chartAverage={chartAverage} chartUserLetter={chartUserLetter} />
      <Nav />
      {showPopup && <GetCardPopup onClose={() => setShowPopup(false)} cardImg={cardImg} />}
    </div>
  );
}

export default Home;
