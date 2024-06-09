import styled from "styled-components";

export function SearchInput({}) {
  return (
    <LetterInput>
      <Input />
    </LetterInput>
  );
}
const LetterInput = styled.div`
  box-sizing: border-box;
  width: 68vw;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #eeeeee;
  background-color: white;
  margin-left: 8vw;
  display: flex;
  align-items: center;
  position: relative;
  column-gap: 5px;
  padding-left: 15px;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  border: none;
  outline: none;
  font-size: 16px;
`;
