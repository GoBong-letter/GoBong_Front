import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
export function CharInput({ myCategory, setMyCategory, setCList, cList }) {
  const [inputChar, setInputChar] = useState("");
  const [chartList, setChartList] = useState([]);
  // const handleAddCharItem = (word) => {
  //   setCList((prev) => {
  //     //있는경우
  //     if (myCategory["기타"].indexOf(word) !== -1) {
  //       return prev.filter((item) => item !== word);
  //     } else {
  //       // 6개 이하인 경우
  //       if (prev.length < 6) {
  //         return prev.concat(word);
  //       } else {
  //         return prev;
  //       }
  //     }
  //   });

  const handleAddCharItem = (word) => {
    setCList((prev) => {
      //있는경우
      if (myCategory["기타"].indexOf(word) !== -1) {
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

    setChartList((prevCharList) => {
      if (!prevCharList.includes(word)) return [...prevCharList, word];
      else return prevCharList;
    });

    console.log(cList, chartList);
  };
  const handleDeleteCharItem = (clickIndex) => {
    setChartList(() => chartList.filter((_, i) => i !== clickIndex));
  };

  useEffect(() => {
    setMyCategory({
      ...myCategory,
      기타: chartList,
    });
  }, [chartList]);
  console.log(myCategory);
  return (
    <>
      <ButtonList>
        {chartList.map((item, index) => (
          <CharButton key={index}>
            {item}
            <div
              onClick={() => handleDeleteCharItem(index)}
              style={{ width: 19, height: 19 }}
            >
              <Icon
                icon="bi:x"
                width="19"
                height="19"
                style={{ color: "black" }}
              />
            </div>
          </CharButton>
        ))}
      </ButtonList>
      <InputBox>
        <CreateCharInput
          placeholder="나만의 카테고리 만들기"
          type="text"
          value={inputChar}
          onChange={(e) => setInputChar(e.target.value)}
        />
        <CreateCharButton onClick={() => handleAddCharItem(inputChar)}>
          <Icon
            icon="ic:round-plus"
            width="28"
            height="28"
            style={{ color: "#ffff" }}
          />
        </CreateCharButton>
      </InputBox>
    </>
  );
}
const CreateCharInput = styled.input`
  box-sizing: border-box;
  width: 65vw;
  height: 55px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #ecedf4;
  padding: 15px 18px;
  outline: none;
  &::placeholder {
    color: rgba(202, 203, 212, 0.8627);
  }
`;
const CreateCharButton = styled.button`
  box-sizing: border-box;
  width: 15vw;
  height: 55px;
  border-radius: 10px;
  border: none;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.div`
  width: 83.6vw;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  margin: 16px 29px 16px 29px;
`;
const ButtonList = styled.div`
  width: 83.6vw;
  display: flex;
  column-gap: 9px;
  row-gap: 10px;
  flex-wrap: wrap;
  margin-top: 12px;
`;
const CharButton = styled.div`
  box-sizing: border-box;
  width: -moz-fit-content;
  width: fit-content;
  height: 3.75vh;
  border-radius: 117px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  border: 1px solid black;
  font-size: 16px;
`;
