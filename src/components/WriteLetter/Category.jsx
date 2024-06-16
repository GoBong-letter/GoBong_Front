import React from "react";
import styled from "styled-components";
import data from "./typelist.json";

export function Category({ handleOpen }) {
  return (
    <>
      <CharacBox>
        {data.map((item, index) => (
          <CharacDiv key={index} onClick={() => handleOpen(item)}>
            <div style={{ fontSize: 25 }}>{item.image}</div>
            <span style={{ fontSize: 14 }}>{item.text}</span>
          </CharacDiv>
        ))}
      </CharacBox>
      <CharBoxSpan>*최대 6개까지 선택할 수 있어요! </CharBoxSpan>
    </>
  );
}
const CharacBox = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 3vw;
  margin-top: 2.3vh;
`;
const CharacDiv = styled.div`
  box-sizing: border-box;
  width: 25.3vw;
  height: 11.4vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  border-radius: 10px;
  border: none;
`;
const CharBoxSpan = styled.span`
  font-size: 12px;
  color: rgba(255, 0, 0, 0.34);
  width: 100%;
  margin-top: 2.2vh;
`;
