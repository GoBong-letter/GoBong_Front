import React from "react";
import styled from "styled-components";

export function Category({ item, handleOpen }) {
  return (
    <CharcDiv onClick={() => handleOpen(item)}>
      <div style={{ fontSize: 25 }}>{item.image}</div>
      <span style={{ fontSize: 14 }}>{item.text}</span>
    </CharcDiv>
  );
}

const CharcDiv = styled.div`
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
