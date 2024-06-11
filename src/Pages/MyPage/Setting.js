import React, { useState, useContext } from "react";
import {JoinContext} from "../Join/JoinProvider";
import Back from "../../components/Back";
import Input from "../../components/Join/Input";
import styles from "../../styles/MyPage.module.css";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import ProfilePopup from "./ProfilePopup";
import { Category } from "../../components/WriteLetter/Category";
import { sendLetterContext } from "../WriteLetter/SendLetterProvider";
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
  // const [cList, setCList] = useState([]);
  const [cList, setCList] = useState(0);

  const [isOpen, setOpen] = useState(false);
  const [showData, setShowData] = useState({});
  const { saveData } = useContext(sendLetterContext);
  const { category, setCategory } = useContext(JoinContext);

  const [titleValue, setTitleValue] = useState("");
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
          <div style={{display:"flex",flexDirection:"column",paddingBottom:"14vw"}}>
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
        <Button text="저장" style={{ margin: "0 auto" }} />
      </div>
      {isPopupVisible && <ProfilePopup onClose={handleClosePopup} />}
    </div>
  );
}
