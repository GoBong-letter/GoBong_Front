import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../hooks/queries/useCategory";
import { sendLetterContext } from "./SendLetterProvider";
import Button from "../../components/Button";
import GoHome from "../../components/GoHome";
import data from "../../components/WriteLetter/typelist.json";
import { Category } from "../../components/WriteLetter/Category";
import { BottomSheet } from "../../components/BottomSheet";
import { TitleBox } from "../../components/WriteLetter/TitleBox";
import { ButtonList } from "../../components/ButtonList";
import { CharInput } from "../../components/WriteLetter/CharInput";
import styles from "../../styles/WriteLetter/SelectInfoOfMe.module.css";
function WriteLetterBasic() {
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

  const navigate = useNavigate();

  const handleNavigator = (link) => {
    let updatedCategory = removeEmptyArrays(category);
    saveData(titleValue, updatedCategory);
    navigate(link);
  };

  const handleCheckBox = () => {
    setChecked((prev) => !prev);
  };

  //TODO : 컴포넌트화 시키기
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
            placeholder="편지 이름을 작성해주세요"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          ></input>

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
          <div className={styles["charac-box"]}>
            {data.map((item, index) => {
              return (
                <Category key={index} item={item} handleOpen={handleOpen} />
              );
            })}
          </div>
          <span>*최대 6개까지 선택할 수 있어요!</span>
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
      <Button
        text="다음"
        onClick={() => {
          handleNavigator("/WriteLetter");
          myCategory();
        }}
      />
    </div>
  );
}

export default WriteLetterBasic;
