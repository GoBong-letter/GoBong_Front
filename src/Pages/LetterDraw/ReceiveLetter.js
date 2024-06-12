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

  const navigate = useNavigate()

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
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>편지를 불러올 수 없어요</div>;
  }

  const handleNext = ()=>{
    navigate('/letterstorage')
  }

  return (
    <>
      <div style={{ height: "100vh" }}>
        <GoHome />
        <div className={styles["container"]}>
          <h1 className={styles["text"]}>
            띵동! <span style={{ color: "var(--primary-color)" }}>편지</span>가 도착했어요 :)
          </h1>
          <div className={styles.imgBox}>
            <div>
              {data.content}
            </div>
            <img
              src={`/images/${data.envelope}.svg`}
              className={styles["lettercontent"]}
              alt="letterImg"
            />
          </div>
          <Button text="편지 보관함으로 이동하기" onClick={handleNext}/>
        </div>
      </div>
    </>
  );
}
