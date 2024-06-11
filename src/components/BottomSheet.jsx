import { Fragment, useState } from "react";
import Button from "./Button";
import styled from "styled-components";

export function BottomSheet({ image, text, handleOpen, children }) {
  const [selectCharList, setSelectCharList] = useState([]);

  const isChecked = (index) => {
    return selectCharList.includes(index);
  };
  const onCheckedElement = (checked, item) => {
    if (isChecked) {
      setSelectCharList([...selectCharList, item]);
    } else if (!isChecked) {
      setSelectCharList(selectCharList.filter((element) => element !== item));
    }
  };

  const onRemove = (item) => {
    setSelectCharList(selectCharList.filter((element) => element !== item));
  };

  return (
    <Fragment>
      <Background onClick={handleOpen}></Background>
      <BottomSheetBox>
        <BottomSheetHeader>
          <div style={{ fontSize: 25 }}>
            {image}
            <span style={{ fontSize: 20, fontWeight: 600, marginLeft: 5 }}>
              {text}
            </span>
          </div>
        </BottomSheetHeader>
        {children}
        <Button text="완료" onClick={handleOpen} />
      </BottomSheetBox>
    </Fragment>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;
const BottomSheetBox = styled.div`
  width: 100%;
  height: fit-content;
  background-color: transparent;
  z-index: 99999;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-bottom: 26px;
  left:0;
`;
const BottomSheetHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 8.25vh;
  background-color: white;
  z-index: 999;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
  padding-top: 29px;
  padding-left: 28px;
`;
