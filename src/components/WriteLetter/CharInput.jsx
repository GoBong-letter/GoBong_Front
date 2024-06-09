import React from "react";
import styled from "styled-components";

export function CharInput({ inputChar, setInputChar }) {
  return (
    <CreateCharInput
      placeholder="나만의 카테고리 만들기"
      type="text"
      value={inputChar}
      onChange={(e) => setInputChar(e.target.value)}
    />
  );
}
const CreateCharInput = styled.input`
  box-sizing: border-box;
  width: 83.6vw;
  height: 55px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  background-color: #ecedf4;
  padding: 15px 18px;
  outline: none;
  margin: 26px 29px 16px 29px;
  &::placeholder {
    color: rgba(202, 203, 212, 0.8627);
  }
`;
