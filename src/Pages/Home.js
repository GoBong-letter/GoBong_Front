import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import Header from "../components/Home/Header";
import WelcomeMent from "../components/Home/WelcomeMent";
import LetterCount from "../components/Home/LetterCount";
import Nav from "../components/Nav";
import Card from "../components/Home/Card";
import CardList from "../components/Home/CardList";
import GobongMent from "../components/Home/GobongMent";
import Chart from "../components/Home/Chart";

function Home() {
  return (
    <div
      className={styles["container"]}
      style={{ width: "100vw", overflowX: "hidden" }}
    >
      <Header />
      <div className={styles["cardContainer"]}>
        <LetterCount />
        <WelcomeMent />
        <CardList />
      </div>
      <Button text="편지쓰러가기" />
      <GobongMent />
      <Chart />
      <Nav />
    </div>
  );
}

export default Home;
