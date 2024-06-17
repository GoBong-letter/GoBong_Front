import React, { useContext, useEffect, useState } from "react";
import { JoinContext } from "../pages/join/JoinProvider";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import Header from "../components/home/Header";
import WelcomeMent from "../components/home/WelcomeMent";
import LetterCount from "../components/home/LetterCount";
import Nav from "../components/Nav";
import CardList from "../components/home/CardList";
import GobongMent from "../components/home/GobongMent";
import Chart from "../components/home/Chart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GetCardPopup from "../components/home/GetCardPopup";

function Home() {
  const { userId, nickname, GetUserInfo } = useContext(JoinContext);
  const [count, getCount] = useState();
  const navigate = useNavigate();

  const [chartAverage, setChartAverage] = useState(null);
  const [chartUserLetter, setChartUserLetter] = useState(null);
  const [chartComparison, setChartComparison] = useState(null);
  const [cardImg, setCardImg] = useState([]);
  const [cardCnt, setCardCnt] = useState([]);
  const [newCard, setNewCard] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const UserNickName = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/users/${userId}`
      );
      if (res.status === 200) {
        const { nickname, image, category } = res.data;
        GetUserInfo(nickname, image, category);
        console.log(category);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ChartAverage = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/letters/average-per-week/all`
      );
      if (res.status === 200) {
        setChartAverage(res.data);
        console.log("평균", res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ChartUserLetter = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/letters/this-week/${userId}`
      );
      if (res.status === 200) {
        setChartUserLetter(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ChartComparison = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/letters/comparison/${userId}`
      );
      if (res.status === 200) {
        setChartComparison(res.data);
        console.log("비교", res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetCard = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/users/card/${userId}`
      );
      if (res.status === 200) {
        console.log(res.data);
        setCardImg(res.data.myCards);
        setCardCnt(res.data.needCard);
        setNewCard(res.data.newCard);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const GetLetterCount = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST}/letters/count/all`
      );
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
      ChartComparison();
    }
  }, [userId]);

  useEffect(() => {
    if (newCard && newCard.length > 0) {
      setShowPopup(true);
    }
  }, [newCard]);

  return (
    <div
      className={styles["container"]}
      style={{ width: "100vw", overflowX: "hidden" }}
    >
      <Header />
      <div className={styles["cardContainer"]}>
        <LetterCount LetterCount={count} />
        <WelcomeMent nickname={nickname} />
        <CardList cardImg={cardImg} cardCnt={cardCnt} nickname={nickname} />
      </div>
      <div style={{ width: "calc(100% - 58px)" }}>
        <Button
          icon="lucide:pen-line"
          text="편지쓰러가기"
          onClick={() => navigate("/writeLetterbasic")}
        />
      </div>
      <GobongMent />
      <Chart
        nickname={nickname}
        chartAverage={chartAverage}
        chartUserLetter={chartUserLetter}
        chartComparison={chartComparison}
      />
      <Nav />
      {showPopup && (
        <GetCardPopup onClose={() => setShowPopup(false)} cardImg={cardImg} />
      )}
    </div>
  );
}

export default Home;
