import styled from "styled-components";

export function Letter({ list, letterCover, letter, setLetter }) {
  return (
    <LetterDiv
      style={{
        background: `url(${process.env.PUBLIC_URL}/images/${list[letterCover].img}.svg) no-repeat center center`,
      }}
    >
      <Textarea
        placeholder="익명에게 편지를 써보세요!"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
      ></Textarea>
    </LetterDiv>
  );
}

const LetterDiv = styled.div`
  box-sizing: border-box;
  width: 83.6vw;
  height: 43vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.3vh;
  padding: 24px;
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  resize: none;
  line-height: 20px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.16);
  }
`;
