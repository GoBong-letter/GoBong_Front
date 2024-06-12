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
import axios, { all } from 'axios';
import { useNavigate } from "react-router-dom";
import Card from "../components/Home/Card"

function Home() {
  const { userId, nickname, GetUserInfo } = useContext(JoinContext);
  const [ count, getCount ] = useState()
  const navigate = useNavigate();
  
  const [chartAverage, setChartAverage] = useState(null);
  const [chartUserLetter, setChartUserLetter] = useState(null);
  const [ cardImg, setCardImg ] = useState(null);

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
    try{
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/average-per-week/${userId}`);
      if (res.status === 200) {
        setChartAverage(res.data);
      }
    } catch(error) {
      console.error(error);
    }
  };

  const ChartUserLetter = async () => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/this-week/${userId}`);
      if (res.status === 200) {
        setChartUserLetter(res.data);
      }
    } catch(error) {
      console.error(error);
    }
  };

  const GetCard = async () => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_HOST}/users/card/${userId}`);
      if (res.status === 200) {
        setCardImg(res.data)
      }
    } catch(error) {
      console.error(error);
    }
  };

  const GetLetterCount = async () => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/count/all`)
      if (res.status === 200){
        getCount(res.data.count)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (userId) {
      UserNickName();
      ChartAverage();
      ChartUserLetter();
      GetCard();
      GetLetterCount();
    }
  }, [userId]);

  return (
    <div
      className={styles["container"]}
      style={{ width: "100vw", overflowX: "hidden" }}
    >
      <Header />
      <div className={styles["cardContainer"]}>
        <LetterCount LetterCount={count}/>
        <WelcomeMent nickname={nickname}/>
        <CardList cardImg={cardImg}/>
      </div>
      <Button
        icon="lucide:pen-line"
        text="편지쓰러가기"
        onClick={() => navigate("/writeletterbasic")}
      />
      <GobongMent />
        <Chart  nickname={nickname} chartAverage={chartAverage} chartUserLetter={chartUserLetter} />
      <Nav />
    </div>
  );
}

export default Home;
