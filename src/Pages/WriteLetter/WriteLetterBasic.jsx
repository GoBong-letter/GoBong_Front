import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendLetterContext } from "./SendLetterProvider";
import { JoinContext } from "../join/JoinProvider";
import Button from "../../components/Button";
import GoHome from "../../components/GoHome";
import { Category } from "../../components/writeletter/Category";
import { BottomSheet } from "../../components/BottomSheet";
import { TitleBox } from "../../components/writeletter/TitleBox";
import { ButtonList } from "../../components/ButtonList";
import { CharInput } from "../../components/writeletter/CharInput";
import styles from "../../styles/writeletter/writeLetterBasic.module.css";

function WriteLetterBasic() {
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

  const navigate = useNavigate();

  const handleNavigator = (link) => {
    let updatedCategory = removeEmptyArrays(myCategory);
    saveData(titleValue);
    setCategory(updatedCategory);
    navigate(link);
  };

  //TODO: 카테고리 useContext 로 가져오기
  const handleCheckBox = () => {
    if (!isChecked) {
      setMyCategory(category);
    } else {
      setMyCategory({
        외모: [],
        성격: [],
        MBTI: [],
        취미: [],
        색: [],
        기타: [],
      });
    }
    setChecked((prev) => !prev);
  };

  return (
    <div className={styles["selectInfoContainer"]}>
      <div style={{ width: "100%" }}>
        <GoHome />
        <TitleBox
          title="나를 알려주세요!"
          subtitle="나는 어떤 사람인지 알려주세요"
        />
      </div>
      <div>
        <div className={styles["info-box"]}>
          <input
            className={styles["letter-name"]}
            placeholder="편지 제목을 작성해주세요"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            maxLength={10}
          />

          <div className={styles["status-check-div"]}>
            <div
              className={styles["checkbox"]}
              style={{
                background: isChecked
                  ? `url(${process.env.PUBLIC_URL}/images/checkedbox.svg) no-repeat center center`
                  : "white",
              }}
              onClick={handleCheckBox}
            ></div>
            <span>기존 카테고리로 선택할래요!</span>
          </div>
          <Category handleOpen={handleOpen} />
        </div>
      </div>
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
      <Button
        text="다음"
        onClick={() => {
          handleNavigator("/WriteLetter");
        }}
      />
    </div>
  );
}

export default WriteLetterBasic;
