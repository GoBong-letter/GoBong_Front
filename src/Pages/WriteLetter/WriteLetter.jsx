import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GoHome from "../../components/GoHome";
import { TitleBox } from "../../components/WriteLetter/TitleBox";
import { SelectLetterItem } from "../../components/WriteLetter/SelectLetterItem";
import { Letter } from "../../components/WriteLetter/Letter";
import { sendLetterContext } from "./SendLetterProvider";
import { useMutation } from "@tanstack/react-query";
import { postLetter } from "../../services/mutations/letter";
import styles from "../../styles/WriteLetter/WriteLetter.module.css";

function WriteLetter() {
  let list = [
    { img: "red", color: "#FFA5A5" },
    { img: "yellow", color: "#FFE9B0" },
    { img: "green", color: "#C5F2B0" },
    { img: "blue", color: "#C2E5FF" },
    { img: "purple", color: "#D9C2FF" },
  ];
  const [letterCover, setLetterCover] = useState(0);
  const [letter, setLetter] = useState("");
  const { title, category } = useContext(sendLetterContext);
  const navigate = useNavigate();

  const userId = String(localStorage.getItem("id"));

  const { mutate: letterMutate } = useMutation({
    mutationFn: postLetter,
    onSuccess: () => {
      console.log("편지보내기 성공");
      navigate("/letterDraw");
    },
    onError: (error) => console.log("편지보내기 실패", error.status),
  });

  const handleNavigator = () => {
    const req = {
      user_id: userId,
      envelope: list[letterCover].img,
      title: title,
      content: letter,
      category: JSON.stringify(category),
    };
    letterMutate(req);
  };

  const selectLetterCover = (ClickedIndex) =>
    list.map((_, index) =>
      ClickedIndex === index ? setLetterCover(ClickedIndex) : null
    );

  return (
    <div className={styles["writeLetterContainer"]}>
      <div style={{ width: "100%" }}>
        <GoHome />
        <TitleBox
          title="나의 편지를 전달해봐요!"
          subtitle="비방과 욕설은 자제해주세요"
        />
      </div>
      <Letter
        list={list}
        letterCover={letterCover}
        letter={letter}
        setLetter={setLetter}
      />
      <SelectLetterItem
        list={list}
        letterCover={letterCover}
        selectLetterCover={selectLetterCover}
      />
      <button className={styles["SendLetterButton"]} onClick={handleNavigator}>
        편지 보내기
      </button>
    </div>
  );
}

export default WriteLetter;
