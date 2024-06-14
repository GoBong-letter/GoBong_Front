import React from "react";
import styled from "styled-components";

export function TitleBox({ title, subtitle }) {
  return (
    <div>
      <TitleBoxDiv>
        <TitleBoxH1>
          <TitleBoxSpan>익명</TitleBoxSpan>의 누군가에게
          <br />
          {title}
        </TitleBoxH1>
        <TitleBoxP>{subtitle}</TitleBoxP>
      </TitleBoxDiv>
    </div>
  );
}
const TitleBoxDiv = styled.div`
  box-sizing: border-box;
  margin: 13% 0 0 10%;
`;
const TitleBoxH1 = styled.h1`
  font-size: 24px;
  font-weight: 800;
  margin-top: 4.6vh;
  margin-bottom: 10px;
`;
const TitleBoxSpan = styled.span`
  color: var(--primary-color);
`;
const TitleBoxP = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.34);
  margin-top: 1.5vh;
`;
