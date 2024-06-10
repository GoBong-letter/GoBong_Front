import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/Join/Join.module.css";
import { sendLetterContext } from "../WriteLetter/SendLetterProvider";
import Num from "../../components/Join/Num";
import Info from "../../components/Join/Info";
import { Category } from "../../components/WriteLetter/Category";
import data from "../../components/WriteLetter/typelist.json";
import categoryStyle from "../../styles/WriteLetter/WriteLetterBasic.module.css";
import { BottomSheet } from "../../components/BottomSheet";
import { CharInput } from "../../components/WriteLetter/CharInput";
import { ButtonList } from "../../components/ButtonList";
import { useCategory } from "../../hooks/queries/useCategory";
import { JoinContext } from "./JoinProvider"
import axios from 'axios';

function JoinAbout() {
  const navigate = useNavigate();
  const { nickname, password, email, image } = useContext(JoinContext);
  const [isChecked, setChecked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showData, setShowData] = useState({});
  const [inputChar, setInputChar] = useState("");
  const { saveData } = useContext(sendLetterContext);
  const [titleValue, setTitleValue] = useState("");
  const [category, setCategory] = useState({
    외모: [],
    성격: [],
    MBTI: [],
    취미: [],
    색: [],
    기타: [],
  });

  const myCategory = useCategory();

  const removeEmptyArrays = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => Array.isArray(value) && value.length > 0
      )
    );
  };

  const handleOpen = (item) => {
    setOpen((prev) => !prev);
    setShowData(item);
  };

  const handleJoin = async () => {

    let updatedCategory = removeEmptyArrays(category);
    saveData(titleValue, updatedCategory);

    console.log(updatedCategory)
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/users/signup`, {
        email: email,
        nickname: nickname,
        password: password,
        image: image,
        category: JSON.stringify(updatedCategory),
      });

      if (response.status === 200) {
        console.log(response.data);
        navigate("/loginPage");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          width: "calc(100% - 58px)",
        }}
      >
        <Num />
        <Info text1="해원님을 나타낼" />
        <Info
          text1="카테고리를 선택해주세요!"
          text2="나의 편지를 보낼 때 나를 알려줄거예요!"
        />
      </div>

      
      <Button text="회원가입 완료" onClick={handleJoin}/>
    </div>
  );
}

export default JoinAbout;