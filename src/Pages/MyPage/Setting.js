import React, { useState, useContext } from "react";
import {JoinContext} from "../Join/JoinProvider";
import Back from "../../components/Back";
import Input from "../../components/Join/Input";
import styles from "../../styles/MyPage.module.css";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import ProfilePopup from "./ProfilePopup";
import { Category } from "../../components/WriteLetter/Category";
import data from "../../components/WriteLetter/typelist.json";
import categoryStyle from '../../styles/WriteLetter/SelectLetterItem.module.css'
// import categoryStyle from "../../styles/WriteLetter/SelectInfoOfMe.module.css";
import { BottomSheet } from "../../components/BottomSheet";
import { CharInput } from "../../components/WriteLetter/CharInput";
import { ButtonList } from "../../components/ButtonList";


export default function Setting() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { nickname, image } = useContext(JoinContext);
  const [isChecked, setChecked] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showData, setShowData] = useState({});
  const [inputChar, setInputChar] = useState("");
  const [category, setCategory] = useState({
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

  const handleCheckBox = () => {
    setChecked((prev) => !prev);
  };
  const handleOpen = (item) => {
    setOpen((prev) => !prev);
    setShowData(item);
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
          <Input text1="닉네임" value={nickname}></Input>
          <div
            style={{
              textAlign: "end",
              color: "var(--primary-color)",
              fontSize: "0.9rem",
            }}
          >
            비밀번호 변경
          </div>
          <div className={categoryStyle["info-box"]}>
          <div className={categoryStyle["charac-box"]}>
            {data.map((item, index) => {
              return (
                <Category key={index} item={item} handleOpen={handleOpen} />
              );
            })}
          </div>
          <span>*최대 6개까지 선택할 수 있어요!</span>
          </div>
      {isOpen && (
        <BottomSheet
          item={showData}
          image={showData.image}
          text={showData.text}
          handleOpen={handleOpen}
        >
          {showData.text === "기타" ? (
            <CharInput inputChar={inputChar} setInputChar={setInputChar} />
          ) : (
            <ButtonList
              image={showData.image}
              text={showData.text}
              wordList={showData.wordList}
              category={category}
              setCategory={setCategory}
            />
          )}
        </BottomSheet>
      )}
        </div>
        <Button text="저장" style={{ margin: "0 auto" }} />
      </div>
      {isPopupVisible && <ProfilePopup onClose={handleClosePopup} />}
    </div>
  );
}
