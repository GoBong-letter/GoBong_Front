import React from "react";
import { TypeButton } from "./WriteLetter/TypeButton";
import styled from "styled-components";

export function ButtonList({ wordList, text, category, setCategory }) {
  const isSelected = (word, text) => {
    return category[text].includes(word);
  };
  // console.log(category[text])
  const handleToggleButton = (word, text) => {
    let index = category[text].indexOf(word);
    if (index === -1)
      setCategory((prevData) => ({
        ...prevData,
        [text]: [...category[text], word],
      }));
    else {
      setCategory((prevData) => ({
        ...prevData,
        [text]: category[text].filter((item) => item !== word),
      }));
    }
  };

  return (
    <BottomSheetContent>
      {wordList.map((word, index) => (
        <TypeButton
          word={word}
          key={index}
          onClick={() => handleToggleButton(word, text)}
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