import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JoinContext } from "../Join/JoinProvider";
import Back from "../../components/Back";
import Input from "../../components/Join/Input";
import styles from "../../styles/MyPage.module.css";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import ProfilePopup from "./ProfilePopup";
import { Category } from "../../components/WriteLetter/Category";
import { sendLetterContext } from "../WriteLetter/SendLetterProvider";
import { BottomSheet } from "../../components/BottomSheet";
import { CharInput } from "../../components/WriteLetter/CharInput";
import { ButtonList } from "../../components/ButtonList";
import axios from "axios";

export default function Setting({ category }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  let navigate = useNavigate();
  
  const {
    nickname,
    image,
    userId,
    setNickname,
    setImage,
    GetUserInfo,
    setCategory,
  } = useContext(JoinContext);
  const [isOpen, setOpen] = useState(false);
  const [showData, setShowData] = useState({});
  const { saveData } = useContext(sendLetterContext);
  const [cList, setCList] = useState(0); // Define cList and setCList

  const [myCategory, setMyCategory] = useState({
    외모: [],
    성격: [],
    MBTI: [],
    취미: [],
    색: [],
    기타: [],
  });

  const handleIconClick = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleOpen = (item) => {
    setOpen((prev) => !prev);
    setShowData(item);
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    if (newNickname.length <= 8) {
      setNickname(newNickname);
    }
  };

  const handleSave = async() => {
    try{
        const nicknameRes = await axios.patch(
          `${process.env.REACT_APP_HOST}/users/nickname`,
          {
            user_id: userId,
            nickname: nickname,
          }
        );
        if (nicknameRes.status === 200) {
          console.log("닉네임 수정 성공", nicknameRes.data);
        }

        const categoryRes = await axios.patch(
          `${process.env.REACT_APP_HOST}/users/category`,
          {
            user_id: userId,
            category: JSON.stringify(myCategory),
          }
        );
        if (categoryRes.status === 200) {
          console.log("카테고리 수정 성공", categoryRes.data);
        }

        const profileRes = await axios.patch(
          `${process.env.REACT_APP_HOST}/users/image`,
          {
            user_id: userId,
            image: image
          }
        );
        if (profileRes.status === 200) {
          console.log("이미지 수정 성공", profileRes.data);
        }

        localStorage.setItem("image", image);
        localStorage.setItem("category", JSON.stringify(myCategory));
        localStorage.setItem("nickname", nickname)

        navigate('/mypage')
    }catch(error){
      console.error(error);
      if(error.response.status == 409){
        alert(error.response.data.error)
      }
    }
  };

  return (
    <div>
      <Back text="내 정보 수정" />
      <div style={{ display: "flex", flexDirection: "column", rowGap: "7vw" }}>
        <div
          style={{
            margin: "0 auto",
            width: "fit-content",
            position: "relative",
          }}
        >
          <img
            src={`/images/${image}.png`}
            alt="profile"
            className={styles["profile-img"]}
          />
          <Icon
            icon="jam:camera"
            className={styles["icon"]}
            onClick={handleIconClick}
          />
        </div>
        <div
          style={{
            width: "80vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            rowGap: "5vw",
          }}
        >
          <Input
            text1="닉네임"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <div
            style={{
              textAlign: "end",
              color: "var(--primary-color)",
              fontSize: "0.9rem",
            }}
          >
            비밀번호 변경
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "14vw",
            }}
          >
            <Category handleOpen={handleOpen} />
            {isOpen && (
              <BottomSheet
                item={showData}
                image={showData.image}
                text={showData.text}
                handleOpen={handleOpen}
              >
                {showData.text === "기타" ? (
                  <CharInput
                    myCategory={myCategory}
                    setMyCategory={setMyCategory}
                    setCList={setCList}
                    cList={cList}
                  />
                ) : (
                  <ButtonList
                    text={showData.text}
                    wordList={showData.wordList}
                    myCategory={myCategory}
                    setMyCategory={setMyCategory}
                    cList={cList}
                    setCList={setCList}
                  />
                )}
              </BottomSheet>
            )}
          </div>
        </div>
        <Button text="저장" style={{ margin: "0 auto" }} onClick={handleSave} />
      </div>
      {isPopupVisible && <ProfilePopup onClose={handleClosePopup} />}
    </div>
  );
}
