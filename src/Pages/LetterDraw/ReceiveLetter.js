import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoHome from "../../components/GoHome";
import styles from "../../styles/LetterDraw.module.css";
import Button from "../../components/Button";
import { ReceiveLetterContext } from "./ReceiveLetterProvider";
import axios from "axios";

export default function ReceiveLetter() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { letterId } = useContext(ReceiveLetterContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_HOST}/letters/${letterId}`);
        if (res.status === 200) {
          setData(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (letterId) {
      fetchCategory();
    } else {
      setLoading(false);
    }
  }, [letterId]);

  if (loading) {
    return(
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <div className={styles["loading"]}>
          <span className={styles["loading__dot"]}></span>
          <span className={styles["loading__dot"]}></span>
          <span className={styles["loading__dot"]}></span>
      </div>
    </div>
    )
  }

  if (!data) {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column", rowGap:"10vw"}}>
        <div style={{textAlign:"center", fontSize:"22px", fontWeight:"600", lineHeight:"28px"}}>죄송합니다:(<br/>편지를 불러오는데<span style={{color:"var(--primary-color)"}}> 실패</span>했어요😞</div>
        <img src="/images/sad.png" alt="슬픈 고봉" style={{width:"180px"}}/>
        <div style={{display:"flex", alignItems:"center", columnGap:"10px", color:"var(--gray)"}}>
          <GoHome/>
          <p style={{margin:"0"}}>홈으로 가기</p>
        </div>
      </div>
    )
  }

  const handleNext = () => {
    navigate('/letterstorage');
  };

  const formattedContent = data.content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <div style={{ height: "100vh" }}>
        <GoHome />
        <div className={styles["container"]}>
          <h1 className={styles["text"]}>
            띵동! <span style={{ color: "var(--primary-color)" }}>편지</span>가 도착했어요 :)
          </h1>
          <div className={styles.imgBox}>
            <div className={styles.letterContent}>
              {formattedContent}
            </div>
            <img
              src={`/images/${data.envelope}.svg`}
              className={styles["lettercontent"]}
              alt="letterImg"
            />
          </div>
          <Button text="편지 보관함으로 이동하기" onClick={handleNext} />
        </div>
      </div>
    </>
  );
}