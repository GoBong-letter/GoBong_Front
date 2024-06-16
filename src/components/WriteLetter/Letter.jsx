import styled from "styled-components";

export function Letter({ list, letterCover, letter, setLetter }) {
  return (
    <LetterDiv
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/${list[letterCover].img}.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <Textarea
        placeholder="익명에게 편지를 써보세요!"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        wrap="hard"
        cols="50"
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
  border-radius: 15px;
`;
const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 92%;
  height: 95%;
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
