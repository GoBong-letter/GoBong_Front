import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../commponents/Button';
import styles from '../styles/Home.module.css'
import Header from '../commponents/Home/Header';
import WelcomeMent from '../commponents/Home/WelcomeMent';
import LetterCount from '../commponents/Home/LetterCount';
import Nav from '../commponents/Nav';
import Card from '../commponents/Home/Card';
import CardList from '../commponents/Home/CardList'
import GobongMent from '../commponents/Home/GobongMent';
import Chart from '../commponents/Home/Chart'

function Home() {
    return (
       <div className={styles['container']} style={{width:"100vw", overflowX:"hidden"}}>
            <Header />
            <div className={styles['cardContainer']}>
                <LetterCount />
                <WelcomeMent />
                <CardList />
            </div>
            <Button text="편지쓰러가기"/>
            <GobongMent />
            <Chart />
            <Nav />
       </div>
    )
}

export default Home;

