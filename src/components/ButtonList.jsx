import React, { useEffect, useState } from "react";
import { TypeButton } from "./WriteLetter/TypeButton";
import styled from "styled-components";

export function ButtonList({
  wordList,
  text,
  myCategory,
  setMyCategory,
  cList,
  setCList,
}) {
  const [textInfo, setTextInfo] = useState(null);
  const isSelected = (word, text) => {
    return myCategory[text].includes(word);
  };

  const handleToggleButton = (word, text) => {
    setCList((prev) => {
      //있는경우
      if (myCategory[text].indexOf(word) !== -1) {
        return prev - 1;
      } else {
        // 6개 이하인 경우
        if (prev < 6) {
          return prev + 1;
        } else {
          return prev;
        }
      }
    });
  };

  useEffect(() => {
    addMyCategory();
  }, [cList]);

  const addMyCategory = () => {
    if (textInfo !== undefined && textInfo !== null) {
      let index = myCategory[text].indexOf(textInfo);

      if (cList <= 6) {
        if (index === -1) {
          setMyCategory((prevData) => ({
            ...prevData,
            [text]: [...myCategory[text], textInfo],
          }));
        } else {
          setMyCategory((prevData) => ({
            ...prevData,
            [text]: myCategory[text].filter((item) => item !== textInfo),
          }));
        }
      }
    }
  };

  console.log(cList, myCategory);

  return (
    <BottomSheetContent>
      {wordList.map((word, index) => (
        <TypeButton
          word={word}
          key={index}
          onClick={() => {
            setTextInfo(word);
            handleToggleButton(word, text);
          }}
          className={isSelected(word, text) ? "clickButton" : "Button"}
        />
      ))}
    </BottomSheetContent>
  );
}

const BottomSheetContent = styled.div`
  box-sizing: border-box;
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 16px 26px 16px;
  row-gap: 13px;
  column-gap: 7px;
  margin-top: 26px;
`;
