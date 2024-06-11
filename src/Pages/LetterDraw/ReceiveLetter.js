import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoHome from "../../components/GoHome";
import styles from "../../styles/LetterDraw.module.css";
import Button from "../../components/Button";
import { ReceiveLetterContext } from "./ReceiveLetterProvider";
import axios from "axios";

export default function ReceiveLetter() {
  const [data, setData] = useState(null); // 초기값을 null로 설정
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
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
        setLoading(false); // 로딩 상태 갱신
      }
    };

    if (letterId) {
      fetchCategory();
    } else {
      setLoading(false); // letterId가 없을 때도 로딩 상태 갱신
    }
  }, [letterId]);

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시
  }

  if (!data) {
    return <div>No letter data found.</div>; // 데이터가 없을 때 표시
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
